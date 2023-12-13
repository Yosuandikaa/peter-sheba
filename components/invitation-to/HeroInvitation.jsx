// pages/registration.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import { toast } from "react-toastify";
import apiService from "../../services/apiService";
import shareWithNavigator, {
  shareVideoWithNavigator,
} from "../../lib/shareNavigator";

export default function HeroInvitation() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [nama, setNama] = useState("");
  const [userLinks, setUserLinks] = useState([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [registrationUrl, setRegistrationUrl] = useState("");
  const [registrationUrls, setRegistrationUrls] = useState([]);

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiService.post(
        // `https://peter-sheba.vercel.app/api/username`,
        `/api/username`,
        { name }
      );
      setName("");
      setSubmitSuccess(true);
      setUserLinks([...userLinks, response.data.data]);
    } catch (error) {
      console.error("Error submitting wish:", error);
    }
  };

  const fetchLink = async () => {
    try {
      const response = await apiService.get(
        "/api/username"
        // "/api/username",
      );
      setUserLinks(response.data.data);
    } catch (error) {
      console.error("Error fetching wishes:", error);
    }
  };

  useEffect(() => {
    fetchLink();
  }, []);

  useEffect(() => {
    if (submitSuccess) {
      toast.success("Berhasil ditambahkan");
      setSubmitSuccess(false); // Reset status
    }
  }, [submitSuccess]);

  useEffect(() => {
    // Mengatur interval untuk mengubah latar belakang setiap 800 ms
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % 3); // Ubah 3 menjadi jumlah latar belakang yang Anda miliki
    }, 800);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []); // useEffect hanya dijalankan sekali setelah render pertama

  const backgrounds = [
    "background1.jpg",
    "background2.jpg",
    "background3.jpg",
    // Tambahkan lebih banyak jika diperlukan
  ];

  // useEffect(() => {
  //   // Mengecek apakah ada data daftar URL yang disimpan di localStorage
  //   if (typeof window !== "undefined") {
  //     const storedUrls = localStorage.getItem("registrationUrls");
  //     if (storedUrls) {
  //       setRegistrationUrls(JSON.parse(storedUrls));
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   // Menyimpan data daftar URL ke localStorage setiap kali berubah
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem(
  //       "registrationUrls",
  //       JSON.stringify(registrationUrls)
  //     );
  //   }
  // }, [registrationUrls]);

  useEffect(() => {
    const { nama: namaParam } = router.query;

    if (typeof namaParam === "string" && namaParam.trim() !== "") {
      setName(namaParam.trim());
    }
  }, [router.query]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = process.env.NEXT_PUBLIC_BASE_PATH || ""; // Sesuaikan dengan nama variabel
      setRegistrationUrl(
        `${
          window.location.origin
        }${currentPath}/registration?nama=${encodeURIComponent(nama)}`
      );
    }
  }, [nama]);

  // const handleChangeNama = (event) => {
  //   const newNama = event.target.value;
  //   setNama(newNama);
  // };

  // const handleAddUrl = () => {
  //   const newRegistrationUrls = [...registrationUrls, registrationUrl];
  //   setRegistrationUrls(newRegistrationUrls);
  //   setNama(""); // Reset nama setelah menambah URL

  //   // Menyimpan data-daftar URL ke localStorage
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem(
  //       "registrationUrls",
  //       JSON.stringify(newRegistrationUrls)
  //     );
  //   }
  // };
  const handleShare = async () => {
    shareWithNavigator({
      link: url,
      user,
      authorId: user?.id,
      performer: name,
      caption: captions,
    });
  };

  return (
    <div className="">
      <h3 className="font-bold text-lg text-center m-0 mt-6">
        Tambah Tamu Undangan
      </h3>
      <div className="relative max-w-md md:mx-auto mt-8 mx-4 md:mt-16 px-6 py-12 md:p-10 bg-white rounded-2xl border border-slate-200">
        {/* <h3 className="font-bold text-lg text-center m-0 mb-4">
          Tambah Tamu Undangan
        </h3> */}
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="recipient"
            className="block text-gray-700 text-xs md:text-sm font-semibold mb-2"
          >
            Nama
          </label>
          {/* <input type="text" value={nama} onChange={handleChangeNama} /> */}
          {/* <input type="text" value={nama} onChange={handleChangeNama} /> */}
          <input
            type="text"
            id="recipient"
            className="w-full p-3 border border-gray-300 rounded-md font-normal text-xs md:text-sm"
            placeholder="Masukan nama tamu..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-[#353434] text-white py-3 rounded-md hover:bg-[#e6c3aa] transition duration-300 text-sm md:text-base"
            >
              Tambahkan
            </button>
          </div>
        </form>
        {/* <div className="mt-2">
        <label>URL Pendaftaran:</label>
        <div className="flex">
          <input
            type="text"
            value={registrationUrl}
            readOnly
            className="mr-2"
          />
          <CopyToClipboard text={registrationUrl}>
            <button className="bg-blue-500 text-white px-2 py-1">
              Salin URL
            </button>
          </CopyToClipboard>
        </div>
      </div> */}
      </div>

      <div className="mt-8 px-4 md:px-24">
        <h2 className="text-sm md:text-lg font-semibold">
          Daftar Tamu{" "}
          <span className="pl-1 text-gray-300">{userLinks.length}</span>
        </h2>
        <div className="grid grid-cols-1 :md:grid-cols-3 lg:grid-cols-4 gap-5">
          {userLinks.map((data, index) => (
            <div
              key={index}
              className="px-4 py-8 rounded-lg bg-white border border-slate-200 flex flex-col space-y-8 flex-wrap w-full max-w-full overflow-hidden"
            >
              <h3 className="font-bold text-lg">{data?.name}</h3>
              <h6 className="text-sm font-light text-gray-600 w-full max-w-full flex flex-wrap">{`${
                window.location.origin
              }/invitation-to?nama=${encodeURIComponent(data?.name)}`}</h6>
              {/* <CopyToClipboard
                text={`${
                  typeof window !== "undefined" && window.location.origin
                }/invitation-to?nama=${encodeURIComponent(data?.name)}`}
              >
                <button
                  className="bg-[#353434] text-white px-2 py-1 rounded-full"
                  onClick={() => toast.success("Berhasil di salin")}
                >
                  Salin URL
                </button>
              </CopyToClipboard> */}
              <button
                className="bg-[#353434] text-white p-2 rounded-full w-full"
                // onClick={async () => {
                //   shareVideoWithNavigator({
                //     link: `${
                //       typeof window !== "undefined" && window.location.origin
                //     }/invitation-to?nama=${encodeURIComponent(data?.name)}`,
                //     performer: data?.name,

                //   });
                // }}
                onClick={async () => {
                  shareVideoWithNavigator({
                    title: data?.name,
                    url: `${
                      typeof window !== "undefined" && window.location.origin
                    }/invitation-to?nama=${encodeURIComponent(data?.name)}`,
                    // text: `
                    // Kepada Yth.
                    // Bapak/Ibu/Saudara/i
                    // <b>${title}</b>
                  
                    // <b>Shalom, Salam Sejahtera dalam kasih,</b>
                    // Kami saling mencintai, karena Tuhan Yesus Kristus yang pertama kali mencintai kami,
                    // Tuhan membuat segala sesuatu indah pada waktunya, begitu indah saat Dia mempertemukan kami dan mempersatukan kami dalam ikatan Pernikahan Kudus.
                    
                    // Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i .... untuk menghadiri acara kami.
                    
                    // Berikut link undangan untuk info lengkap dari acara kami :
                    // ${url}
                    
                    // link
                    // (mohon gunakan browser chrome untuk lebih maksimal)
                    
                    // Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.
                    
                    // Hormat Kami,
                    // Peter & Elisheba;
                    // `,
                    performer: data?.name
                  
                  });
                }}
              >
                Bagikan Link
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
