import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv'; 
import NodeCache from 'node-cache';

dotenv.config();  

const PORT: number = 8000;
const app: Application = express();
app.use(cors());
app.use(express.json());

const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

// OpenAI API key from environment variable
const API_KEY = process.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({
    apiKey: API_KEY,
});

app.post("/completions", async (req: Request, res: Response) => {
    const { message } = req.body;

    const cachedResponse = cache.get(message);

    if (cachedResponse) {
        return res.send(cachedResponse);
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            temperature: 0,
            max_tokens: 200,
            messages: [
                {
                    role: "user",
                    content: "refactor this code:\n" + message,
                },
            ],
        });

        const responseMessage = completion.choices[0].message;

        cache.set(message, responseMessage);

        res.send(responseMessage);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

app.listen(PORT, () => console.log(`Your server is running on PORT: ${PORT}`));
