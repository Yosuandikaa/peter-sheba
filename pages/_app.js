import { AudioProvider } from "../context/AudioContext";
import "../styles/globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: false, // animasi hanya terjadi sekali
      easing: 'ease-in-out', // jenis animasi
    });
  }, []);
  return (
    <AudioProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AudioProvider>
  );
}

export default MyApp;
