import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/invitation-to/Hero";
import { CoupleInfo } from "../components/dashboard/CoupleInfo";
import Gallery from "../components/dashboard/Gallery";
import { EventInfo } from "../components/dashboard/EventInfo";
import SendWishForm from "../components/dashboard/SendWishForm";
import AudioPlayer from "../components/dashboard/AudioPlayer";
import DigitalGift from "../components/dashboard/DigitalGift";
import BottomNavigation from "../components/dashboard/BottomNavigation";
import Forms from "../components/dashboard/Try";
import MusicPlayer from "../components/dashboard/AudioPlayer";
// import QuoteOverlay from "../components/dashboard/QuoteOverlay";
import { VowsDetails } from "../components/dashboard/VowsDetails";
import { useRef, useState } from "react";
import QuoteOverlay from "../components/dashboard/QuoteOverlay";

export default function Home() {
  const photos = [
    { src: "/img/foto1.jpg", width: "350px", height: "240px" },
    { src: "/img/foto2.jpg", width: "350px", height: "240px" },
    { src: "/img/foto4.jpg", width: "350px", height: "240px" },
    { src: "/img/foto5.jpg", width: "350px", height: "240px" },
    { src: "/img/foto6.jpg", width: "350px", height: "240px" },
    { src: "/img/foto7.jpg", width: "350px", height: "240px" },
    { src: "/img/gambar9.jpeg", width: "350px", height: "240px" },
    { src: "/img/foto10.jpg", width: "350px", height: "240px" },
    { src: "/img/foto11.jpg", width: "350px", height: "240px" },
    { src: "/img/foto18.jpeg", width: "350px", height: "240px" },
  ];
  const audioSrc = "/music/Esok_kan_ku_jelang.mp3";

  const [isAnnouncementOpen, setAnnouncementOpen] = useState(false);
  const announcementRef = useRef(null);

  const toggleAnnouncement = () => {
    setAnnouncementOpen(!isAnnouncementOpen);

    // Scroll ke elemen pengumuman dengan animasi smooth
    if (!isAnnouncementOpen && announcementRef.current) {
      announcementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[url('/img/main-bg.jpg')] bg-cover bg-center overflow-hidden relative">
      <Hero action={toggleAnnouncement} isOpen={isAnnouncementOpen} />
      {isAnnouncementOpen && (
        <div ref={announcementRef}>
          <CoupleInfo />
          <EventInfo />
          <VowsDetails />
          <Gallery images={photos} />
          <QuoteOverlay />
          <SendWishForm />
          {/* <QuoteOverlay /> */}
          {/* <AudioPlayer src={audioSrc} /> */}
          <DigitalGift />
          <MusicPlayer />
          <div className="block md:hidden">
          <BottomNavigation />
          </div>
        </div>
      )}
    </div>
  );
}
