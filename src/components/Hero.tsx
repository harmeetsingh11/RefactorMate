const Hero = () => {
  return (
    <>
<section className="bg-white dark:bg-gray-900 bg-[url('./assets/background.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]  mt-20" id="hero">
    <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-[rgba(23,168,225,0.99)] from-[rgb(224,116,224)]">Revolutionize</span> Your Codebase with AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r to-[rgba(23,168,225,0.99)] from-[rgb(224,116,224)]">Refactoring</span></h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Unleash the potential of cutting-edge artificial intelligence with our Code Refactoring AI tool. Elevate your development workflow as our tool intelligently analyzes and enhances your code, promoting efficiency, readability, and maintainability. Say goodbye to manual refactoring hassles and welcome a new era of code optimization with our innovative solution. Explore the future of coding – where AI meets craftsmanship.</p>
        <a href="#main" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Try it
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>

    </div>
    <div className="absolute left-0 z-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 top-16"></div>
</section>
</>
  )
}

export default Hero