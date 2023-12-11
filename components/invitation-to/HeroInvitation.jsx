// pages/registration.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import { toast } from "react-toastify";

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
      const response = await axios.post("/api/username", { name });
      setName("");
      setSubmitSuccess(true);
      setUserLinks([...userLinks, response.data.data]);
    } catch (error) {
      console.error("Error submitting wish:", error);
    }
  };

  const fetchLink = async () => {
    try {
      const response = await axios.get("/api/username");
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

  return (
    <>
      <div className="relative max-w-md mx-auto mt-16 p-8 md:p-10 bg-white rounded-3xl shadow-lg">
        <h3 className="font-bold text-lg text-center m-0 mb-4">
          Tambah Tamu Undangan
        </h3>
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
            placeholder="Masukan nama anda..."
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

      <div className="mt-4 px-4 md:px-24">
        <h2 className="text-lg font-bold">Daftar Tamu <span className="text-gray-600">{userLinks.length}</span></h2>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {userLinks.map((data, index) => (
            <li key={index} className="px-4 py-8 rounded-lg bg-white shadow-lg flex flex-col space-y-4 flex-wrap w-full">
              <h3 className="font-bold text-lg">{data?.name}</h3>
              <span className="text-sm font-light text-gray-600">{`${window.location.origin}/invitation-to?nama=${encodeURIComponent(data?.name)}`}</span>
              <CopyToClipboard
                text={`${
                  typeof window !== "undefined" && window.location.origin
                }/invitation-to?nama=${encodeURIComponent(data?.name)}`}
              >
                <button className="bg-[#353434] text-white px-2 py-1 rounded-full" onClick={() => toast.success('Berhasil di salin')}>
                  Salin URL
                </button>
              </CopyToClipboard>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
