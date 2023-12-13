import Link from "next/link";
import { useEffect } from "react";

export const CoupleInfo = () => {
  useEffect(() => {
    // Inisialisasi AOS.js setelah komponen dimount
    import("aos").then((aos) => {
      aos.init({
        duration: 1000, // durasi animasi
        once: false, // animasi hanya terjadi sekali
        easing: "ease-in-out", // jenis animasi
      });
    });
  }, []);
  return (
    <div
      className="min-h-screen px-8 pt-8 pb-16 relative overflow-hidden"
      id="couple"
    >
      {/* <div className="relative"> */}
      <img src="/img/bunga1.png" alt="bunga" className="w-56 m-auto mb-1" />
      {/* </div> */}
      <div className="absolute top-0 left-0">
        <img
          src="/img/bunga-5.png"
          alt="bunga"
          className="w-36 md:w-56 m-auto mb-1"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <img
          src="/img/bunga-5.png"
          alt="bunga"
          className="w-36 md:w-56 m-auto mb-1 rotate-180"
        />
      </div>

      <div className="flex flex-col space-y-12">
        <div
          className="flex flex-col space-y-1 text-center"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
        >
          <h3 className="font-bold text-2xl mb-3 font-brush">
            Dengan Kasih Karunia Tuhan
          </h3>
          <span className="font-normal text-sm md:text-base m-0 p-0">
            Cinta kita memberikan makna baru pada hidup.
          </span>
          <span className="font-normal text-sm md:text-base">
            Dengan sukacita, kami mengundang Anda untuk hadir dalam pernikahan
            kami
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 max-w-4xl md:mx-auto pb-12">
          <div
            className="flex flex-col space-y-4 items-center"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
          >
            <div className="relative">
              <img
                src="/img/mas-peter.jpg"
                alt="pengantin_pria"
                className="w-56 h-56 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <h3 className="font-bold text-lg md:text-3xl font-great text-center">
                Pdp. Peter Setiawan, S.I.Kom (can)
              </h3>
              <span className="font-normal text-sm md:text-base block w-[70%] text-center">
                Putra dari Bapak Pdp. Tri Satmoko dan Pdp. Ibu Iis Komariah{" "}
              </span>
              <div className="absolute top-[18.1rem] md:top-[21.2rem] right-[3rem] md:right-[7.5rem]">
              <svg
                  width="8"
                  height="14"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 0H8.5V6H14V9H8.5V20H5.5V9H0V6H5.5V0Z"
                    fill="black"
                  />
                </svg>

              </div>
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white">
                <Link
                  href="https://www.instagram.com/peters.11/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/img/ig.png" alt="ig" className="w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col space-y-4 items-center"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
          >
            <div className="relative">
              <img
                src="/img/ka-sheba.jpg"
                alt="pengantin_pria"
                className="w-56 h-56 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <h3 className="font-bold text-lg md:text-3xl font-great text-center">
                Pdp. Elisheba Euodia Br Tarigan, M.Th
              </h3>
              <span className="font-normal text-sm md:text-base block w-[80%] text-center">
                Putri dari Bapak Pdt. Permata Tarigan, Dip. Th dan Pdp.Ibu Marhenita br
                Ginting, Amk
              </span>
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white">
                <Link
                  href="https://www.instagram.com/elisheba.euodia/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/img/ig.png" alt="ig" className="w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
