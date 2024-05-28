import {useState} from 'react';
import performance from '../assets/performance.png';
import performancehover from '../assets/performancehover.png';
import code from '../assets/code.png';
import codehover from '../assets/codehover.png';
import '../App.css';

const AboutUs = () => {
    const [codeHovered, setCodeHovered] = useState(false);
    const [performanceHovered, setPerformanceHovered] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-900" id="benefits">
    <div className='flex flex-col gap-4'>
    <div className='about-us-block grid md:grid-cols-2 gap-8'>
        <div className='about-us-community bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg' onMouseOver={()=>setCodeHovered(true)} onMouseLeave={()=>setCodeHovered(false)}>
            <div className='flex items-center gap-4'>
                <img src={codeHovered ? codehover : code} alt="" className='ml-4 mt-4 w-10'/>
                <div className='about-us-blk-text'>Improved Readability and Maintainability</div>
            </div>
            <p className='about-us-blk-para'>Refactoring code is essential for enhancing readability and maintainability. Clear and well-organized code makes it easier for developers to understand the logic, reducing the chances of errors and facilitating collaboration. By refactoring, you invest in code that is not only functional but also sustainable over time, making future modifications and updates more efficient.</p>
        </div>
        <div className='about-us-product bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg' onMouseOver={()=>setPerformanceHovered(true)} onMouseLeave={()=>setPerformanceHovered(false)}>
            <div className='flex items-center gap-4'>
                <img src={performanceHovered ? performancehover : performance} alt="" className='ml-4 mt-4 w-10'/>
                <div className='about-us-blk-text'>Enhanced Performance and Efficiency</div>
            </div>
            <p className='about-us-blk-para'>Code refactoring plays a crucial role in improving the performance and efficiency of your application. Through optimizations and restructuring, you can eliminate bottlenecks, reduce redundancy, and enhance overall system performance. Refactored code tends to be more streamlined and optimized, leading to a more responsive and scalable software solution.</p>
        </div>
    </div>
    </div>
    </section>
  )
}

export default AboutUs