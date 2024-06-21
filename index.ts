import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const PORT: number = parseInt(process.env.PORT || '8000', 10);
const MONGODB_URI: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/refactormate';
const JWT_SECRET: string = process.env.JWT_SECRET || 'your_jwt_secret';
const API_KEY: string = process.env.VITE_OPENAI_API_KEY || '';

const app: Application = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema and Model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

 const User = mongoose.model('User', userSchema);

// Extend Request type to include user property
interface AuthenticatedRequest extends Request {
  user?: JwtPayload & { userId: string };
}

// Signup Route
app.post('/signup', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
app.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Middleware to authenticate the user
const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err: any, user: JwtPayload & { userId: string }) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// OpenAI Setup
const openai = new OpenAI({
  apiKey: API_KEY
});

// OpenAI Completions Route
app.post('/completions', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 200,
      messages: [{ role: "user", content: "refactor this code:\n" + req.body.message }]
    });
    res.send(completion.choices[0].message);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => console.log(`Your server is running on PORT: ${PORT}`));
