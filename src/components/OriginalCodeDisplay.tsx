import React, { ChangeEvent, useState } from 'react'

interface OriginalCodeDisplayProps {
  onValueChange: (value: string) => void;
}
const OriginalCodeDisplay:React.FC<OriginalCodeDisplayProps> = ({onValueChange}) => {

  const [value, setValue] = useState('');
  const [paste, setPaste] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onValueChange(newValue); // Call the callback function with the new value
    // console.log("original code: "+value)
  };

  return (
    <div className="w-full flex flex-col px-2">
    {/* macOS Title Bar  */}
    <div className="flex-none flex items-center rounded-t-md justify-between px-4 py-2 bg-gray-700">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
<div className='flex text-gray-200 cursor-pointer font-sans '>Original Code</div>
<div className=" pr-1 text-gray-200  cursor-pointer font-sans">
{paste?(<button className='items-center gap-1 inline-flex'>
          <span>
            <ion-icon name="checkmark-sharp"></ion-icon>
          </span>
            Pasted!
        </button>
        ):(
        <button className='items-center gap-1 inline-flex' onClick={()=>{
          navigator.clipboard.readText()
  .then((pastedText) => {
    setValue(pastedText)
    // Use the pastedText as needed
    console.log('Pasted text:', pastedText);
  })
  .catch((err) => {
    console.error('Error reading from clipboard:', err);
  });
          setPaste(true)
          setTimeout(()=> {
            setPaste(false)
          },3000)
        }}>
          <span>
            <ion-icon name="clipboard-outline"></ion-icon>
          </span>
            Paste
        </button>)}
        </div>
    </div>

    {/* Code Input Box */}
    <div className="p-4  flex-grow h-[68vh] w-full bg-gray-800 rounded-b-md">

      <textarea
        id="code"
        name="code"
        rows="12"
        cols="60"
        placeholder='Enter your code'
        value={value}
        onChange={handleChange}
        className=" block w-full h-full resize-none focus:outline-none  bg-gray-800 text-white font-mono text-md"
      >
      </textarea>
    </div>
  </div>
  )
}

export default OriginalCodeDisplay