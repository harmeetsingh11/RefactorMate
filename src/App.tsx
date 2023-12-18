import {useState} from 'react'
import OriginalCodeDisplay from './components/OriginalCodeDisplay'
import RefactorCodeDisplay from './components/RefactorCodeDisplay'
import SkeletonLoading from './components/SkeletonLoading'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Footer from './components/Footer'


interface chatData{
  role:string,
  content: string,
}

const App = ()=> {

  const [value,setValue]=useState<string>("")
  const [chat,setChat]=useState<chatData>([])
  // const [chat, setChat] = useState<chatData>('');

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const getRefactorCode=async ()=>{

  try{
     // Loading
     setMessage('Refactoring Code...')
     setLoading(true)
     
     setTimeout(() => {
       setMessage('Getting closer ...')
     }, 7000)

     setTimeout(() => {
       setMessage('Almost there ...')
     }, 15000)

    const options={
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message:`${value}`
      })
    }
    const response = await fetch("http://localhost:8000/completions",options)
    const data=await response.json() 
    // console.log(data)
    setChat(data)
    setLoading(false)
    setMessage("") 

  }catch(error){
    console.error(error)
  }
// console.log("APP VALUE: "+value)
}
  const refactoredCode= chat
  // console.log(refactoredCode.content)

  return (
    <>
      <Navbar/>
      <Hero /> 

      {/* main section starts*/}
      <div className="relative bg-[url('./assets/background.svg')] pt-6" id="main">
      <div className="flex md:flex-row flex-col gap-5 max-w-7xl m-auto justify-evenly px-4">
        <OriginalCodeDisplay onValueChange={(newValue:string)=>setValue(newValue)}/>   
        {loading ? (
  <SkeletonLoading />
) : (
  <RefactorCodeDisplay text={refactoredCode?.content||""}/>
)}
      </div>
      <div className='flex justify-center'>
      <button onClick={getRefactorCode}
      type="button" className="px-4 py-2 mt-8 mb-12 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading?message:"Refactor Code"}</button>
      </div>
      </div>
      {/* main section ends */}
  <Benefits/>

      <Footer/>
    </>
  )
}

export default App
