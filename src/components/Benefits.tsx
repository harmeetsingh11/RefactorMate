const Benefits = () => {
  return (
    

<section className="bg-white dark:bg-gray-900" id="benefits">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
   
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                    </svg>
                    Clarity
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Improved Readability and Maintainability</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4 text-justify">Refactoring code is essential for enhancing readability and maintainability. Clear and well-organized code makes it easier for developers to understand the logic, reducing the chances of errors and facilitating collaboration. By refactoring, you invest in code that is not only functional but also sustainable over time, making future modifications and updates more efficient.</p>
                
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                    </svg>
                    Optimization
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"> Enhanced Performance and Efficiency</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4 text-justify">Code refactoring plays a crucial role in improving the performance and efficiency of your application. Through optimizations and restructuring, you can eliminate bottlenecks, reduce redundancy, and enhance overall system performance. Refactored code tends to be more streamlined and optimized, leading to a more responsive and scalable software solution.</p>
            </div>
        </div>
    </div>
</section>

  )
}

export default Benefits