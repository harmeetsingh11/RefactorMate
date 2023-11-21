import React from 'react'

const SkeletonLoading = () => {
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
        <button className='items-center gap-1 inline-flex'>
          <span>
            <ion-icon name="clipboard-outline"></ion-icon>
          </span>
            Copy
        </button>
        </div>
      </div>

      {/* Code Input Box */}
  
      <div className="flex h-[68vh] w-[45vw] rounded-b-md bg-gray-800 "
    > 
      {/* Skeleton loading */}
        <div role="status" className="w-[75%] animate-pulse p-5">
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 w-48 mb-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 max-w-[260px] mb-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 max-w-[250px] mb-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 max-w-[360px]"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 w-48 my-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 max-w-[260px] mb-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 max-w-[250px] mb-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 max-w-[360px]"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 max-w-[300px] my-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 max-w-[250px] mb-2.5"></div>
            <div className="h-2.5 bg-gray-400 rounded-sm dark:bg-gray-700 max-w-[360px]"></div>
            
        </div>
    </div>
   </div>
  </div>
  )
}

export default SkeletonLoading