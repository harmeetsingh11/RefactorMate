import { useState } from 'react';
import OriginalCodeDisplay from './components/OriginalCodeDisplay';
import RefactorCodeDisplay from './components/RefactorCodeDisplay';
import SkeletonLoading from './components/SkeletonLoading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contributors from './components/Contributors';

interface ChatData {
  role: string;
  content: string;
}

const App = () => {
  const [value, setValue] = useState<string>('');
  const [chat, setChat] = useState<ChatData[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const getRefactorCode = async () => {
    try {
      // Loading
      setMessage('Refactoring Code...');
      setLoading(true);

      setTimeout(() => {
        setMessage('Getting closer ...');
      }, 7000);

      setTimeout(() => {
        setMessage('Almost there ...');
      }, 15000);

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `${value}`,
        }),
      };
      const response = await fetch('http://localhost:8000/completions', options);
      const data = await response.json();
      setChat(data);
      setLoading(false);
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  const refactoredCode = chat;

  const HomePage = () => (
    <>
      <Hero />

      {/* main section starts */}
      <div className="relative bg-[url('./assets/background.svg')] pt-6" id="main">
        <div className="flex md:flex-row flex-col gap-5 max-w-7xl m-auto justify-evenly px-4">
          <OriginalCodeDisplay onValueChange={(newValue: string) => setValue(newValue)} />
          {loading ? (
            <SkeletonLoading />
          ) : (
            <RefactorCodeDisplay text={refactoredCode?.content || ''} />
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={getRefactorCode}
            type="button"
            className="px-4 py-2 mt-8 mb-12 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading ? message : 'Refactor Code'}
          </button>
        </div>
      </div>
      {/* main section ends */}
      <Benefits />
    </>
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contributors" element={<Contributors />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
