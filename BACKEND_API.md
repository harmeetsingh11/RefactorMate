# Backend API Documentation

## Overview

The RefactorMate backend is an Express.js server that provides code refactoring capabilities using OpenAI's GPT-3.5-turbo model. It includes comprehensive error handling, request validation, and caching mechanisms.

## Features

- ✅ **Request Validation**: Comprehensive input validation with detailed error messages
- ✅ **Error Handling**: Specific error handling for OpenAI API, rate limits, and validation errors
- ✅ **Caching**: Response caching to reduce API calls and improve performance
- ✅ **Health Check**: Monitoring endpoint for service health
- ✅ **Type Safety**: Full TypeScript support with proper types
- ✅ **Graceful Shutdown**: Proper cleanup on server termination
- ✅ **Security**: Request size limits and input sanitization

## API Endpoints

### 1. Health Check

**Endpoint**: `GET /health`

**Description**: Check if the server is running and healthy.

**Response**:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-09T15:30:00.000Z",
  "uptime": 123.456
}
```

**Status Codes**:
- `200 OK`: Server is healthy

---

### 2. Code Refactoring

**Endpoint**: `POST /completions`

**Description**: Submit code for refactoring using AI.

**Request Body**:
```json
{
  "message": "function add(a,b){return a+b}"
}
```

**Request Validation**:
- `message` field is required
- `message` must be a string
- `message` cannot be empty
- `message` must not exceed 10,000 characters

**Success Response**:
```json
{
  "role": "assistant",
  "content": "function add(a: number, b: number): number {\n  return a + b;\n}"
}
```

**Error Responses**:

#### 400 Bad Request
```json
{
  "error": "Bad Request",
  "details": "Message field is required"
}
```

Possible validation errors:
- "Message field is required"
- "Message must be a string"
- "Message cannot be empty"
- "Message exceeds maximum length of 10000 characters"

#### 429 Rate Limit Exceeded
```json
{
  "error": "Rate Limit Exceeded",
  "details": "Too many requests. Please try again later."
}
```

#### 500 Internal Server Error
```json
{
  "error": "Internal Server Error",
  "details": "An unexpected error occurred"
}
```

#### OpenAI API Error
```json
{
  "error": "OpenAI API Error",
  "details": "Specific error message from OpenAI"
}
```

**Status Codes**:
- `200 OK`: Successful refactoring
- `400 Bad Request`: Invalid request data
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server or OpenAI API error

---

### 3. 404 Not Found

**Description**: Any undefined route will return a 404 error.

**Response**:
```json
{
  "error": "Not Found",
  "details": "The requested endpoint does not exist"
}
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
PORT=8000
```

**Required**:
- `VITE_OPENAI_API_KEY`: Your OpenAI API key (required)

**Optional**:
- `PORT`: Server port (default: 8000)

## Running the Server

### Development Mode

```bash
# Using npm
npm run backend

# Using pnpm
pnpm run backend

# Using yarn
yarn backend
```

### Production Mode

```bash
# Build TypeScript
npm run build

# Start server
npm start
```

## Caching

The server implements response caching to improve performance and reduce API costs:

- **Cache Duration**: 5 minutes (300 seconds)
- **Cache Check Period**: 60 seconds
- **Cache Key**: Request message content

When a cached response is available, it's returned immediately without making an OpenAI API call.

## Error Handling

The backend implements multiple layers of error handling:

1. **Request Validation**: Validates input before processing
2. **OpenAI API Errors**: Handles specific OpenAI API errors with appropriate status codes
3. **Rate Limiting**: Detects and handles rate limit errors
4. **Global Error Handler**: Catches any unhandled errors
5. **404 Handler**: Handles requests to undefined routes

## Logging

The server provides detailed logging for debugging:

- ✅ Cache hits
- 🔄 API requests
- ❌ Errors with full details
- 🚀 Server startup
- ⚠️ Shutdown signals

## Graceful Shutdown

The server handles shutdown signals gracefully:

- `SIGTERM`: Graceful shutdown on termination signal
- `SIGINT`: Graceful shutdown on interrupt (Ctrl+C)

## Security Features

- **Request Size Limit**: 10MB maximum request body size
- **Input Validation**: Comprehensive validation of all inputs
- **Type Safety**: TypeScript ensures type correctness
- **Error Message Sanitization**: Prevents sensitive information leakage

## Testing the API

### Using cURL

```bash
# Health check
curl http://localhost:8000/health

# Code refactoring
curl -X POST http://localhost:8000/completions \
  -H "Content-Type: application/json" \
  -d '{"message": "function add(a,b){return a+b}"}'
```

### Using Postman

1. Create a new POST request to `http://localhost:8000/completions`
2. Set header: `Content-Type: application/json`
3. Set body (raw JSON):
```json
{
  "message": "your code here"
}
```

## Common Issues

### API Key Not Set

**Error**: `VITE_OPENAI_API_KEY is not set in environment variables`

**Solution**: Create a `.env` file with your OpenAI API key

### Rate Limit Exceeded

**Error**: `Rate Limit Exceeded`

**Solution**: Wait a few minutes before making more requests, or upgrade your OpenAI plan

### Port Already in Use

**Error**: `EADDRINUSE: address already in use`

**Solution**: Change the PORT in `.env` or stop the process using port 8000

## Performance Optimization

- **Caching**: Reduces redundant API calls
- **Request Validation**: Fails fast on invalid requests
- **Connection Pooling**: Efficient HTTP connection management
- **Async/Await**: Non-blocking I/O operations

## Future Improvements

- [ ] Add authentication/authorization
- [ ] Implement request rate limiting per user
- [ ] Add support for multiple AI models
- [ ] Implement request queuing for high load
- [ ] Add metrics and monitoring
- [ ] Implement request logging to database
- [ ] Add support for streaming responses

## Contributing

When contributing to the backend:

1. Maintain TypeScript type safety
2. Add proper error handling for new features
3. Update this documentation for API changes
4. Add validation for new request parameters
5. Include appropriate logging
6. Test error scenarios

## License

This project is part of RefactorMate. See the main README for license information.
