import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import NodeCache from 'node-cache';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 8000;
const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Cache configuration
const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

// OpenAI API key from environment variable
const API_KEY = process.env.VITE_OPENAI_API_KEY;

// Validate API key on startup
if (!API_KEY) {
    console.error('❌ Error: VITE_OPENAI_API_KEY is not set in environment variables');
    process.exit(1);
}

const openai = new OpenAI({
    apiKey: API_KEY,
});

// Types
interface CompletionRequest {
    message: string;
}

interface ErrorResponse {
    error: string;
    details?: string;
}

// Validation middleware
const validateCompletionRequest = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { message } = req.body as CompletionRequest;

    if (!message) {
        res.status(400).json({
            error: 'Bad Request',
            details: 'Message field is required',
        } as ErrorResponse);
        return;
    }

    if (typeof message !== 'string') {
        res.status(400).json({
            error: 'Bad Request',
            details: 'Message must be a string',
        } as ErrorResponse);
        return;
    }

    if (message.trim().length === 0) {
        res.status(400).json({
            error: 'Bad Request',
            details: 'Message cannot be empty',
        } as ErrorResponse);
        return;
    }

    if (message.length > 10000) {
        res.status(400).json({
            error: 'Bad Request',
            details: 'Message exceeds maximum length of 10000 characters',
        } as ErrorResponse);
        return;
    }

    next();
};

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});

// Main completion endpoint
app.post(
    '/completions',
    validateCompletionRequest,
    async (req: Request, res: Response): Promise<void> => {
        const { message } = req.body as CompletionRequest;

        try {
            // Check cache first
            const cachedResponse = cache.get<OpenAI.Chat.Completions.ChatCompletionMessage>(message);

            if (cachedResponse) {
                console.log('✅ Cache hit for request');
                res.status(200).json(cachedResponse);
                return;
            }

            console.log('🔄 Making OpenAI API request...');

            // Make OpenAI API call
            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                temperature: 0,
                max_tokens: 200,
                messages: [
                    {
                        role: 'user',
                        content: 'refactor this code:\n' + message,
                    },
                ],
            });

            const responseMessage = completion.choices[0]?.message;

            if (!responseMessage) {
                res.status(500).json({
                    error: 'Internal Server Error',
                    details: 'No response received from OpenAI',
                } as ErrorResponse);
                return;
            }

            // Cache the response
            cache.set(message, responseMessage);
            console.log('✅ Response cached successfully');

            res.status(200).json(responseMessage);
        } catch (error) {
            console.error('❌ Error in /completions endpoint:', error);

            // Handle OpenAI specific errors
            if (error instanceof OpenAI.APIError) {
                const statusCode = error.status || 500;
                res.status(statusCode).json({
                    error: 'OpenAI API Error',
                    details: error.message,
                } as ErrorResponse);
                return;
            }

            // Handle rate limit errors
            if (error instanceof Error && error.message.includes('rate limit')) {
                res.status(429).json({
                    error: 'Rate Limit Exceeded',
                    details: 'Too many requests. Please try again later.',
                } as ErrorResponse);
                return;
            }

            // Generic error handler
            res.status(500).json({
                error: 'Internal Server Error',
                details: error instanceof Error ? error.message : 'An unexpected error occurred',
            } as ErrorResponse);
        }
    }
);

// 404 handler for undefined routes
app.use((_req: Request, res: Response) => {
    res.status(404).json({
        error: 'Not Found',
        details: 'The requested endpoint does not exist',
    } as ErrorResponse);
});

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error('❌ Unhandled error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        details: 'An unexpected error occurred',
    } as ErrorResponse);
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on PORT: ${PORT}`);
    console.log(`📍 Health check available at: http://localhost:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('⚠️  SIGTERM signal received: closing HTTP server');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('⚠️  SIGINT signal received: closing HTTP server');
    process.exit(0);
});
