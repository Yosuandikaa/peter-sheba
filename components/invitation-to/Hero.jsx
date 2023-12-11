import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'aos/dist/aos.css';


const Hero = ({action}) => {
  const router = useRouter();
  const [nama, setNama] = useState('');
  const [registrationUrl, setRegistrationUrl] = useState('');
  const [registrationUrls, setRegistrationUrls] = useState([]);

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % 3);
        setFade(false);
      }, 400);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);



    const backgrounds = [
    '/img/img5.jpg',
    '/img/fotos12.jpg',
    '/img/img3.png',
    // Tambahkan lebih banyak jika diperlukan
  ];

  useEffect(() => {
    // Mengecek apakah ada data daftar URL yang disimpan di localStorage
    if (typeof window !== 'undefined') {
      const storedUrls = localStorage.getItem('registrationUrls');
      if (storedUrls) {
        setRegistrationUrls(JSON.parse(storedUrls));
      }
    }
  }, []);

  useEffect(() => {
    // Menyimpan data daftar URL ke localStorage setiap kali berubah
    if (typeof window !== 'undefined') {
      localStorage.setItem('registrationUrls', JSON.stringify(registrationUrls));
    }
  }, [registrationUrls]);

  useEffect(() => {
    const { nama: namaParam } = router.query;

    if (typeof namaParam === 'string' && namaParam.trim() !== '') {
      setNama(namaParam.trim());
    }
  }, [router.query]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = process.env.NEXT_PUBLIC_BASE_PATH || ''; // Sesuaikan dengan nama variabel 
      setRegistrationUrl(`${window.location.origin}${currentPath}/registration?nama=${encodeURIComponent(nama)}`);
    }
  }, [nama]);

  const handleChangeNama = (event) => {
    const newNama = event.target.value;
    setNama(newNama);
  };

  const handleAddUrl = () => {
    const newRegistrationUrls = [...registrationUrls, registrationUrl];
    setRegistrationUrls(newRegistrationUrls);
    setNama(''); // Reset nama setelah menambah URL
  
    // Menyimpan data-daftar URL ke localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('registrationUrls', JSON.stringify(newRegistrationUrls));
    }
  };

  useEffect(() => {
    // Inisialisasi AOS.js setelah komponen dimount
    import('aos').then((aos) => {
      aos.init({
        duration: 1000, // durasi animasi
        once: false, // animasi hanya terjadi sekali
        easing: 'ease-in-out', // jenis animasi
      });
    });
  }, []);
  
  return (
    <div  className={`page-container animate-fade-in-out-smooth ${fade ? ' fade-in-out' : ''} `} style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}>
      <div className="flex flex-col space-y-6 md:space-y-12 text-center">
        <h3 className="font-normal text-base md:text-xl">The Wedding Of</h3>
        <span className="font-great text-5xl md:text-7xl">Peter & Sheba</span>
        <div className="flex flex-col space-y-5 md:space-y-7">
          <div className="flex flex-col space-y-2">
            <span className="text-sm md:text-base font-light">Dear / To</span>
            <h3 className="font-semibold text-lg">{nama ?? 'Guest Name'}</h3>
          </div>
          <button className="bg-transparent border-2 border-white p-2.5 md:p-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all ease-in-out" onClick={action}>
            Open Announcement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
