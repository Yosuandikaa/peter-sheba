import { Timer } from "./Timer";
import { VowsDetails } from "./VowsDetails";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export const EventInfo = () => {
  useEffect(() => {
    // Inisialisasi AOS.js setelah komponen dimount
    import("aos").then((aos) => {
      aos.init({
        duration: 900, // durasi animasi
        once: false, // animasi hanya terjadi sekali
        easing: "ease-in-out", // jenis animasi
      });
    });
  }, []);

  const handleAddToCalendar = () => {
    // Format waktu acara (YYYYMMDDTHHMMSSZ)
    const startTime = '20231227T150000'; // 3 sore
    const endTime = '20231227T210000';   // 9 malam

    // Judul dan deskripsi acara
    const title = 'Peter & Sheba Wedding';
    const description = 'Kami mengharapkan kehadiran Bapak/Ibu pada pernikahan kami';

    // URL Google Calendar
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startTime}/${endTime}&text=${encodeURIComponent(
      title
    )}&details=${encodeURIComponent(description)}`;

    // Buka Google Calendar pada tab baru
    window.open(googleCalendarUrl, '_blank');
  };

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % 3);
        setFade(false);
      }, 400);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);



    const backgrounds = [
    '/img/foto13.jpg',
    '/img/fotos14.jpg',
    '/img/fotos15.jpg',
    // Tambahkan lebih banyak jika diperlukan
  ];

  return (
    <div className="relative h-[60vh] overflow-hidden py-12" id="info">
      {/* Background with Parallax Effect */}
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center transform translateZ-0 scale-150 ${fade ? ' fade-in-out' : ''} bg-black animate-fade-in-out-smooth`}
        style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
      />

      {/* Content */}
      <div className="relative z-10 h-full text-white flex items-center justify-center">
        <div className="flex flex-col space-y-12">
          <div
            className="text-center flex flex-col"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h3 className="text-2xl md:text-4xl font-bold">Save The Date</h3>
            <span className="text-sm font-light">
              Catat dan simpan waktunya.
            </span>
          </div>
          <Timer />
          <button
            type="button"
            className="bg-[#aa705a] text-white py-3 rounded-md hover:bg-[#e6c3aa] w-44 transition duration-300 mx-auto text-sm md:text-base"
            onClick={handleAddToCalendar}
          >
            Tambah ke Kalender
          </button>
        </div>
        {/* <VowsDetails /> */}
      </div>
    </div>
  );
};
