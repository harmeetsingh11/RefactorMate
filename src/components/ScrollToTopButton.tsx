import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-600 hover:shadow-xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ fontWeight: 'bolder', fontSize: '2rem', lineHeight: '1rem' }}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
