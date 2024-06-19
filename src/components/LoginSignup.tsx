import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure you import Tailwind CSS

const LoginSignup: React.FC = () => {
    const [isLogin, setIsLogin] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <div className='text-center mb-8'>
            <span className="self-center text-2xl font-bold  whitespace-nowrap dark:text-white font-mono"><mark className="px-2 py-1 text-white bg-blue-600 rounded dark:bg-blue-500 mr-1">Refactor&#60;&#47;&#62;</mark><span className="text-black">Mate</span></span>
            </div>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-6">{isLogin ? 'Login' : 'Signup'}</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg" required />
                    </div>
                    {!isLogin && (
                        <div className="mb-4">
                            <label htmlFor="confirm-password" className="block text-gray-700 mb-2">Confirm Password:</label>
                            <input type="password" id="confirm-password" name="confirm-password" className="w-full px-3 py-2 border rounded-lg" required />
                        </div>
                    )}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                        {isLogin ? 'Login' : 'Signup'}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <button className="w-full bg-white text-black border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                      &nbsp;  {isLogin ? 'Login with Google' : 'Signup with Google'}
                    </button>
                </div>
                <p onClick={toggleForm} className="mt-6 text-blue-500 cursor-pointer hover:underline">
                    {isLogin ? 'Don\'t have an account? Signup' : 'Already have an account? Login'}
                </p>
            </div>
        </div>
    );
};

export default LoginSignup;

