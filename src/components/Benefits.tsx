import { useState } from 'react';
import performance from '../assets/performance.png';
import performancehover from '../assets/performancehover.png';
import code from '../assets/code.png';
import codehover from '../assets/codehover.png';

const AboutUs = () => {
    const [codeHovered, setCodeHovered] = useState(false);
    const [performanceHovered, setPerformanceHovered] = useState(false);

    return (
        <section className="bg-white dark:bg-gray-900" id="benefits">
            <div className='flex flex-col gap-4'>
                <div className='justify-center items-center mt-8 ml-8 mb-8 grid md:grid-cols-2 gap-8 md:gap-0'>
                    <div className='w-11/12 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-blue-300 dark:hover:bg-blue-600 p-6' onMouseOver={() => setCodeHovered(true)} onMouseLeave={() => setCodeHovered(false)}>
                        <div className='flex items-center gap-4'>
                            <img src={codeHovered ? codehover : code} alt="" className='ml-4 mt-4 w-14 h-14' />
                            <div className='text-gray-900 dark:text-white text-2xl font-bold mb-2'>Improved Readability and Maintainability</div>
                        </div>
                        <p className='text-lg font-normal text-gray-700 dark:text-gray-400 mb-4 mt-2 text-justify'>Refactoring code is essential for enhancing readability and maintainability. Clear and well-organized code makes it easier for developers to understand the logic, reducing the chances of errors and facilitating collaboration. By refactoring, you invest in code that is not only functional but also sustainable over time, making future modifications and updates more efficient.</p>
                    </div>
                    <div className='about-us-product w-11/12 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-purple-300 dark:hover:bg-purple-600 p-6' onMouseOver={() => setPerformanceHovered(true)} onMouseLeave={() => setPerformanceHovered(false)}>
                        <div className='flex items-center gap-4'>
                            <img src={performanceHovered ? performancehover : performance} alt="" className='ml-4 mt-4 w-14 h-14' />
                            <div className='text-gray-900 dark:text-white text-xl font-bold mb-2'>Enhanced Performance and Efficiency</div>
                        </div>
                        <p className='text-lg font-normal text-gray-700 dark:text-gray-400 mb-4 mt-2 text-justify'>Code refactoring plays a crucial role in improving the performance and efficiency of your application. Through optimizations and restructuring, you can eliminate bottlenecks, reduce redundancy, and enhance overall system performance. Refactored code tends to be more streamlined and optimized, leading to a more responsive and scalable software solution.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
