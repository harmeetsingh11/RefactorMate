import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
interface RefactorCodeDisplayProps{
  text:string
}

const RefactorCodeDisplay:React.FC<RefactorCodeDisplayProps> = ({text}) => {

  const [copy,setCopy]=useState(false)

  return (
    <div>
    <div className="flex flex-col p-6 pl-1">
      {/* macOS Title Bar  */}
      <div className="flex-none flex items-center rounded-t-md justify-between px-4 py-2 bg-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <div className='flex text-gray-200 cursor-pointer font-sans'>Refactored Code</div>
      <div className=" pr-1 text-gray-200  cursor-pointer font-sans">
        {copy?(<button className='items-center gap-1 inline-flex'>
          <span>
            <ion-icon name="checkmark-sharp"></ion-icon>
          </span>
            Copied!
        </button>
        ):(
        <button className='items-center gap-1 inline-flex' onClick={()=>{
          navigator.clipboard.writeText(text)
          setCopy(true)
          setTimeout(()=> {
            setCopy(false)
          },3000)
        }}>
          <span>
            <ion-icon name="clipboard-outline"></ion-icon>
          </span>
            Copy
        </button>)}
        </div>
      </div>

      {/* Code Input Box */}
      {/* <div className="p-6 flex-grow bg-gray-800 rounded-b-md">
        <textarea
          id="code"
          name="code"
          rows="12"
          cols="60"
          readOnly
          value={text}
          className=" block w-full resize-none focus:outline-none  bg-gray-800 text-white"
        >
         
        </textarea>
      </div> */}
      <div className="flex h-[68vh] w-[45vw] rounded-b-md relative"
    > 
      
    <SyntaxHighlighter className=" absolute inset-0 rounded-b-md p-0" language="javascript" style={atomOneDark} showLineNumbers={true} wrapLines={true} >
       {text} 
      </SyntaxHighlighter>
  </div>
    </div>
  </div>
  )
}

export default RefactorCodeDisplay