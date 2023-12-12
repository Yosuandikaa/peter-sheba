// components/BottomNavigation.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const BottomNavigation = () => {
  const router = useRouter();

  const handleScrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1); 
        handleScrollToId(id);
      }
    };

    // Listen for hash changes and scroll to the element
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Run only once on component mount

  const isActive = (pathname) => {
    return router.pathname === pathname;
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white rounded-t-[1.2rem] p-3 flex justify-around items-center text-black z-50 font-medium shadow-md">
      <a href="#home" onClick={() => handleScrollToId('home')} className={`flex flex-col items-center ${isActive('/') ? '' : ''}`}>
      <img
              src="/img/homes.png"
              alt="home"
              className="w-10 mb-1"
            />
        <span className="text-xs">Home</span>
      </a>
      <a href="#couple" onClick={() => handleScrollToId('couple')} className={`flex flex-col items-center ${isActive(`/couple`) ? 'text-blue-500' : ''}`}>
      <img
              src="/img/icon2.png"
              alt="couple"
              className="w-10 mb-1"
            />
        <span className="text-xs">Couple</span>
      </a>
      <a href="#info" onClick={() => handleScrollToId('info')} className={`flex flex-col items-center ${isActive('/#info') ? 'text-blue-500' : ''}`}>
      <img
              src="/img/icon3.png"
              alt="event"
              className="w-[2.4rem] mb-1"
            />
        <span className="text-xs">Event</span>
      </a>
      <a href="#gallery" onClick={() => handleScrollToId('gallery')} className={`flex flex-col items-center ${isActive('/gallery') ? 'text-blue-500' : ''}`}>
      <img
              src="/img/icon4.png"
              alt="gallery"
              className="w-10 mb-1"
            />
        <span className="text-xs">Gallery</span>
      </a>
      <a href="#wish" onClick={() => handleScrollToId('wish')} className={`flex flex-col items-center ${isActive('/wish') ? 'text-blue-500' : ''}`}>
      <img
              src="/img/icon5.png"
              alt="wish"
              className="w-10 mb-1"
            />
        <span className="text-xs">Wish</span>
      </a>
      {/* ... (sama seperti sebelumnya) */}
    </nav>
  );
};

export default BottomNavigation;
