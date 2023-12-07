import express,{Application, Request, Response} from 'express'
import cors from 'cors'
import  OpenAI  from "openai";
import dotenv from 'dotenv'; 
dotenv.config();  // Load environment variables from .env file 

const PORT:number=8000

const app:Application=express()
app.use(cors())
app.use(express.json())

// const API_KEY:string="YOUR_OPENAI_API_KEY"
const API_KEY = process.env.VITE_OPENAI_API_KEY

const openai= new OpenAI({
    apiKey:API_KEY
})

app.post("/completions", async(req:Request,res:Response)=> {
    try{
        const completion = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            temperature: 0,
            max_tokens: 200,
            messages:[{role:"user",
            content:"refactor this code:\n"+req.body.message}]

        })
        res.send(completion.choices[0].message)

    }catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})

app.listen(PORT,()=> console.log(`Your server is running on PORT: ${PORT}`))