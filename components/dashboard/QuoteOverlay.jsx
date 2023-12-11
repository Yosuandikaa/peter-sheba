// // components/QuoteOverlay.js
// import { useState, useEffect } from 'react';

// const quotes = [
//   "Dan firman-Nya: Sebab itu laki-laki akan meninggalkan ayah dan ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi satu daging. Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia. - Matius 19:5-6 (TB)",
//   "Sebagaimana Allah melalui penciptaan menjadikan dua dari satu, demikian pula melalui pernikahan Dia menjadikan satu dari dua. - Thomas Adams",
//   "Inilah perintah-Ku, yaitu supaya kamu saling mengasihi, seperti Aku telah mengasihi kamu. - Yohanes 15:12 (TB)",
//   // ... Add more quotes as needed
// ];

// const QuoteOverlay = () => {
//   const [quoteIndex, setQuoteIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
//     }, 8000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="relative h-screen">
//     <img
//       className="absolute inset-0 object-cover w-full h-full"
//       src="/img/foto4.jpg"
//       alt="Background Image"
//     />
//     <div className="absolute inset-0 bg-black opacity-50"></div>
//     <div className="flex items-center justify-center text-white z-10 relative">
//       <h1 className="text-4xl font-bold mb-4">Your Next.js App</h1>
//       {/* ... Your page content ... */}
//       <QuoteOverlay />
//     </div>
//   </div>
//   );
// };

// export default QuoteOverlay;
