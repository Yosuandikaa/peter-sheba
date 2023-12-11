import { useEffect } from 'react';
import 'aos/dist/aos.css';


export const VowsDetails = () => {
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

  const handleRedirect = () => {
    
    const googleMapsUrl = 'https://maps.app.goo.gl/d16j1Ab8gYgqAf2d6';

    // Redirect ke Google Maps
    window.location.href = googleMapsUrl;
  };

  return (
    <div className="p-5 flex flex-col space-y-4 max-w-5xl mx-auto">
            <div
        className="flex flex-col items-center mb-4 py-8"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="text-3xl md:text-4xl font-bold font-brush">Vows Details</h3>
        <span className="font-light text-sm text-black mt-1 w-[70%] md:w-full text-center mx-auto ">
        Berikut informasi waktu acara.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white text-black px-5 py-8 rounded-2xl flex flex-col space-y-3 relative" data-aos="fade-right" data-aos-easing="ease-out-cubic" >
          <h3 className="font-bold text-lg md:text-xl mt-4">Pemberkatan</h3>
          <span className="text-sm font-medium">Rabu, 27 Desember 2023</span>
          <span className="text-sm font-medium">
            Pukul: 15.00 WIB s/d selesai
          </span>
          <span className="text-sm font-normal">
            Diemdi Hotel, Jl. Kiaracondong No.147 B, Babakan Sari, Kec.
            Kiaracondong, Kota Bandung, Jawa Barat, Bandung, Kiaracondong,
            Bandung, Indonesia, 40218
          </span>
          <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#9a4e33]">
                  <img src="/img/wish.png" alt="ig" className="w-7" />
              </div>
  </div>
          <button
            type="button"
            className="flex gap-2 items-center py-2 px-4 w-28 text-center font-medium text-sm bg-[#9a4e33] text-white rounded-md"
            onClick={handleRedirect}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19.9231L9 17.8231L5.042 19.3531C4.786 19.4485 4.54833 19.4208 4.329 19.2701C4.10967 19.1195 4 18.9078 4 18.6351V6.40415C4 6.22615 4.04333 6.06315 4.13 5.91515C4.21667 5.76848 4.34267 5.66615 4.508 5.60815L9 4.07715L15 6.17715L18.958 4.64715C19.214 4.55181 19.4517 4.56982 19.671 4.70115C19.8903 4.83248 20 5.02815 20 5.28815V17.6731C20 17.8645 19.947 18.0305 19.841 18.1711C19.7357 18.3125 19.5937 18.4118 19.415 18.4691L15 19.9231ZM14.5 18.7031V7.00315L9.5 5.25815V16.9581L14.5 18.7041V18.7031ZM15.5 18.7031L19 17.5501V5.70015L15.5 7.00415V18.7041V18.7031ZM5 18.3001L8.5 16.9581V5.25815L5 6.45015V18.3001Z"
                fill="#ffffff"
              />
            </svg>
            <span>Maps</span>
          </button>
        </div>
        <div className="bg-white text-black px-5 py-8 rounded-2xl flex flex-col space-y-3 relative" data-aos="fade-left" data-aos-easing="ease-out-cubic" >
          <h3 className="font-bold text-lg md:text-xl mt-4">Resepsi</h3>
          <span className="text-sm font-medium">Rabu, 27 Desember 2023</span>
          <span className="text-sm font-medium">
            Pukul: 19.00 WIB s/d selesai
          </span>
          <span className="text-sm font-li">
            Diemdi Hotel, Jl. Kiaracondong No.147 B, Babakan Sari, Kec.
            Kiaracondong, Kota Bandung, Jawa Barat, Bandung, Kiaracondong,
            Bandung, Indonesia, 40218
          </span>
          <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#9a4e33]">
                  <img src="/img/wish.png" alt="ig" className="w-7" />
              </div>
  </div>
          <button
            type="button"
            className="flex gap-2 items-center py-2 px-4 w-28 text-center font-medium text-sm bg-[#9a4e33] text-white rounded-md"
            onClick={handleRedirect}

          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19.9231L9 17.8231L5.042 19.3531C4.786 19.4485 4.54833 19.4208 4.329 19.2701C4.10967 19.1195 4 18.9078 4 18.6351V6.40415C4 6.22615 4.04333 6.06315 4.13 5.91515C4.21667 5.76848 4.34267 5.66615 4.508 5.60815L9 4.07715L15 6.17715L18.958 4.64715C19.214 4.55181 19.4517 4.56982 19.671 4.70115C19.8903 4.83248 20 5.02815 20 5.28815V17.6731C20 17.8645 19.947 18.0305 19.841 18.1711C19.7357 18.3125 19.5937 18.4118 19.415 18.4691L15 19.9231ZM14.5 18.7031V7.00315L9.5 5.25815V16.9581L14.5 18.7041V18.7031ZM15.5 18.7031L19 17.5501V5.70015L15.5 7.00415V18.7041V18.7031ZM5 18.3001L8.5 16.9581V5.25815L5 6.45015V18.3001Z"
                fill="#ffffff"
              />
            </svg>
            <span>Maps</span>
          </button>
        </div>
      </div>
    </div>
  );
};
