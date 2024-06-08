
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900" id="footer">
      <div className="mx-auto w-full">
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between w-full">
          <span className="text-md text-gray-500 dark:text-gray-300 sm:text-center px-4">
            Made with ♥ by <a href="https://github.com/harmeetsingh11" target="_blank">Harmeet Singh</a>
          </span>
          <div className="flex mt-4 px-6 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse items-center">
            <a href="https://twitter.com/ImHarmeet_Singh" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M 18.058594 2.9921875 A 0.750075 0.750075 0 0 0 17.490234 3.2675781 L 12.767578 8.9082031 L 9.0566406 3.7714844 C 8.7066406 3.2874844 8.1458281 3 7.5488281 3 L 4.078125 3 C 3.420125 3 3.0388281 3.7462969 3.4238281 4.2792969 L 9.546875 12.755859 L 3.6757812 19.767578 A 0.750075 0.750075 0 1 0 4.8242188 20.732422 L 10.451172 14.009766 L 14.943359 20.228516 C 15.293359 20.712516 15.854172 21 16.451172 21 L 19.921875 21 C 20.579875 21 20.961172 20.253703 20.576172 19.720703 L 13.673828 10.164062 L 18.640625 4.2324219 A 0.750075 0.750075 0 0 0 18.058594 2.9921875 z M 5.4335938 4.5 L 7.5507812 4.5 C 7.6657813 4.5 7.7747969 4.5554375 7.8417969 4.6484375 L 18.566406 19.5 L 16.451172 19.5 C 16.336172 19.5 16.227156 19.444562 16.160156 19.351562 L 11.34375 12.683594 A 0.750075 0.750075 0 0 0 10.822266 11.960938 L 5.4335938 4.5 z"></path>
              </svg>
              <span className="sr-only">New Icon</span>
            </a>
            <a href="https://github.com/harmeetsingh11" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="https://linkedin.com/in/harmeetsingh113" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center justify-center" style={{width: '1rem', height: '1rem'}}>
              <ion-icon name="logo-linkedin"></ion-icon>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


