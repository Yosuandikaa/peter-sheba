// components/QuoteOverlay.js
import { useState, useEffect } from "react";

const QuoteOverlay = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const [fade, setFade] = useState(false);

  const quotes = [
    '"Dan firman-Nya: Sebab itu laki-laki akan meninggalkan ayah dan ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi satu daging. Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia." - Matius 19:5-6 (TB)',
    "Sebagaimana Allah melalui penciptaan menjadikan dua dari satu, demikian pula melalui pernikahan Dia menjadikan satu dari dua. - Thomas Adams",
    "Inilah perintah-Ku, yaitu supaya kamu saling mengasihi, seperti Aku telah mengasihi kamu. - Yohanes 15:12 (TB)",
  ];

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
    "/img/foto13.jpg",
    "/img/fotos14.jpg",
    "/img/fotos15.jpg",
    // Tambahkan lebih banyak jika diperlukan
  ];

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  //     }, 8000);

  //     return () => clearInterval(intervalId);
  //   }, []);

  return (
    <div className="relative h-[50vh] mx-4 md:mx-8 rounded-lg mb-12">
      <img
        className="absolute inset-0 object-cover w-full h-full rounded-xl"
        src="/img/foto4.jpg"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
      <div className="flex flex-col space-y-4">
        <h3 className="text-white text-lg font-semibold z-10 absolute top-6 left-4 md:top-12 md:left-12">Quotes</h3>

      </div>
      <div className="flex items-center justify-center text-white z-10 relative h-full">
        {/* <h1 className="text-4xl font-bold mb-4"></h1> */}
        {/* ... Your page content ... */}
        <span className="text-xs md:text-sm font-medium w-[90%] md:w-[40%] text-center">
          {quotes[backgroundIndex]}
        </span>
      </div>
    </div>
  );
};

export default QuoteOverlay;
