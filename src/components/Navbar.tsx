import React,{useState} from 'react'
import '../index.css'
import 'tailwindcss/tailwind.css';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };
  return (
<nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white font-mono"><mark className="px-2 py-1 text-white bg-blue-600 rounded dark:bg-blue-500 mr-1">Refactor&#60;&#47;&#62;</mark>Mate</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" onClick={()=>{window.open('https://github.com/harmeetsingh11', "_blank", "noreferrer") }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GitHub <ion-icon name="logo-github" ></ion-icon></button>
      <button onClick={toggleMenu} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  {isMenuOpen &&(
  <div className="items-center justify-between w-full md:flex md:w-auto md:order-1 md:hidden " id="navbar-cta"  >
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#benefits" className=" block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Benefits</a>
      </li>
      <li>
        <a href="#main" className=" block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Refactor</a>
      </li>
    </ul>
  </div>
  )}
  </div>
</nav>

  )
}

export default Navbar