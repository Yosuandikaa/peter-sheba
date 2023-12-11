// import moment from "moment";
import { useEffect, useState } from "react";
import 'aos/dist/aos.css';


export const Timer = () => {
  
    const targetDate = new Date('2023-12-27T15:00:00+07:00').getTime(); // December 27, 2023, 15:00 WIB
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    function calculateTimeLeft() {
      const now = new Date().getTime();
      const diff = targetDate - now;
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);

    useEffect(() => {
      // Inisialisasi AOS.js setelah komponen dimount
      import('aos').then((aos) => {
        aos.init({
          duration: 900, // durasi animasi
          once: false, // animasi hanya terjadi sekali
          easing: 'ease-in-out', // jenis animasi
        });
      });
    }, []);
  
    // const resetCountdown = () => {
    //   setTimeLeft(calculateTimeLeft());
    // };
  
    // const isCountdownOver = timeLeft.days < 0;

    return (
        <div className="max-w-screen-md m-auto flex flex-col space-y-6 px-4" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <div className="grid grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white/40 text-white p-4 flex flex-col items-center rounded-md">
                    <h3 className="font-bold text-lg">{timeLeft?.days}</h3>
                    <span className="font-normal text-xs ">Hari</span>
                </div>
                <div className="bg-white/40 text-white p-4 flex flex-col items-center rounded-md">
                    <h3 className="font-bold text-lg">{timeLeft?.hours}</h3>
                    <span className="font-normal text-xs">Jam</span>
                </div>
                <div className="bg-white/40 text-white p-4 flex flex-col items-center rounded-md">
                    <h3 className="font-bold text-lg">{timeLeft?.minutes}</h3>
                    <span className="font-normal text-xs">Menit</span>
                </div>
                <div className="bg-white/40 text-white p-4 flex flex-col items-center rounded-md">
                    <h3 className="font-bold text-lg">{timeLeft?.seconds}</h3>
                    <span className="font-normal text-xs">Detik</span>
                </div>
            </div>
        </div>
    );
  };
  