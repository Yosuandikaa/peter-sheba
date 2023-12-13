/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import Link from "next/link";

const DigitalGift = () => {
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
  const norek = "91204123";

  const onCopy = (str) => {
    if (typeof window !== "undefined") {
      const el = document.createElement("textarea");
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      toast.success("Berhasil Dicopy");
    } else {
      toast.error("Your browser does not support copy to clipboard");
    }
  };
  return (
    <div className="relative py-16 px-4 md:px-5" id="digital-gift">
      <div
        className="flex flex-col items-center mb-4"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="text-3xl md:text-4xl font-bold font-brush">
          Wedding Gift
        </h3>
        <span className="font-light text-black mt-1 w-[70%] md:w-[30%] text-center text-sm">
          Jika Anda ingin berbagi kasih sayang, kami menerimanya dengan tulus.
        </span>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div
          className="flex flex-col space-y-3 bg-white rounded-2xl shadow-sm px-5 py-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src="/img/BCA.svg" alt="BCA" className="w-16" />
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-sm md:text-lg">Elisheba Tarigan</h3>
            <h3 className="font-bold text-base md:text-lg">7771913788</h3>
            <button
              type="button"
              className="w-full bg-[#9a4e33] text-white py-3 rounded-md transition duration-300 text-sm md:text-base mt-3"
              onClick={() => onCopy("7771913788")}
            >
              Copy No.Rekening
            </button>
          </div>
        </div>
        <div
          className="flex flex-col space-y-3 bg-white rounded-2xl shadow-sm px-5 py-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src="/img/Dana.svg" alt="Dana" className="w-20" />
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-sm md:text-base">Peter Setiawan</h3>
            <h3 className="font-bold text-base md:text-lg">081573732797</h3>
            <button
              type="button"
              className="w-full bg-[#9a4e33]  text-white py-3 rounded-md hover:bg-[#e6c3aa] transition duration-300 flex justify-center gap-4 items-center px-4 text-sm md:text-base mt-3"
              onClick={() => onCopy("081573732797")}
            >
              Copy Number
            </button>
          </div>
        </div>
        <div
          className="flex flex-col gap-1 bg-white rounded-2xl shadow-sm px-5 py-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="flex gap-2 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0003 21V12M12.0003 7H7.95032C5.18032 7 5.01032 3 7.95032 3C11.1003 3 12.0003 7 12.0003 7ZM12.0003 7H16.0503C18.9463 7 18.9463 3 16.0503 3C12.9003 3 12.0003 7 12.0003 7Z"
                stroke="#9A4E33"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 12V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V12M21 12V9C21 8.46957 20.7893 7.96086 20.4142 7.58579C20.0391 7.21071 19.5304 7 19 7H5C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V12H21Z"
                stroke="#9A4E33"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="font-bold">Kado Fisik</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-sm md:text-base">
              Jl.Babakan Sentral, Rt 03 Rw 05, No.56, Kel. Sukapura, Kec.
              Kiaracondong, Bandung (Patokan: Warung Dwiki)
            </h3>
            <button
              type="button"
              className="w-full bg-[#9a4e33]  text-white py-3 rounded-md hover:bg-[#e6c3aa] transition duration-300 text-sm md:text-base mt-3"
              onClick={() =>
                onCopy(
                  "Jl.Babakan Sentral, Rt 03 Rw 05, No.56, Kel. Sukapura, Kec. Kiaracondong, Bandung (Patokan: Warung Dwiki)"
                )
              }
            >
              Copy Address
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -top-1 right-0">
        <img
          src="/img/bunga-6.png"
          alt="bunga"
          className="w-36 md:w-64 m-auto mb-1"
        />
      </div>
      <div className="absolute bottom-16 md:bottom-0 left-0">
        <img
          src="/img/bunga-6.png"
          alt="bunga"
          className="w-36 md:w-64 m-auto mb-1 rotate-180"
        />
      </div>
      <div className="mt-16 mx-auto flex flex-col space-y-4">
        <h3
          className="font-normal text-sm md:text-base text-center block mx-auto w-[88%] md:w-[45%] mb-2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Tidak ada kata-kata yang dapat kami sampaikan selain ucapan terima
          kasih yang tulus karena kehadiran Bapak/Ibu/Saudara/i serta doa restu
          yang diberikan.
        </h3>
        <div className="flex flex-col gap-2 items-center text-center">
          <span
            className="font-normal text-sm md:text-base text-center block mx-auto w-[88%] md:w-[45%] mb-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Turut mengundang :{" "}
          </span>
          <span
            className="font-medium text-sm md:text-base text-center block mx-auto w-[88%] md:w-[45%] mb-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Gembala GKKI M2 Pdt. Dr. Lukas Kacaribu, MH dan seluruh jemaat{" "}
          </span>
        </div>
        <div className="mt-3 pb-16">
          <img
            src="/img/foto2.jpg"
            alt="bunga"
            className="w-28 h-28 md:w-36 md:h-36 object-cover object-center rounded-full mx-auto"
          />
          <h3
            className="font-semibold text-2xl font-great text-center mt-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Peter & Sheba
          </h3>
          <span
            className="text-xs font-medium text-center mt-2 mx-auto block pb-8"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            27 Desember 2023
          </span>
          <div className="flex justify-center items-center">
            <span
              className=" text-xs font-normal text-center mx-auto inline-block bg-white/80 p-3 rounded-md max-w-xs h-full"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              Made with love by Peter's brother{" "}
              <Link href="https://instagram.com/yosuandikaa?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                <strong className="underline font-semibold">@yosuandikaa</strong>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalGift;
