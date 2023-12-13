import Image from "next/image";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import axios from "axios";
import ThanksModal from "../modal/ThanksModal";
import { toast } from "react-toastify";
import MyModal from "../modal/ThanksModal";
import apiService from "../../services/apiService";

const SendWishForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiService.post(
        // "https://peter-sheba.vercel.app/api/wishes",
        "/api/wishes",
        { name, message }
      );
      setName("");
      setMessage("");
      setSubmitSuccess(true);
      setWishes([...wishes, response.data.data]);
    } catch (error) {
      console.error("Error submitting wish:", error);
    }
  };

  const fetchWishes = async () => {
    try {
      const response = await apiService.get("api/wishes");
      setWishes(response.data.data);
    } catch (error) {
      console.error("Error fetching wishes:", error);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  // useEffect(() => {
  //   if (submitSuccess) {
  //     toast.success("Terima kasih buat ucapan nya ya");
  //     setSubmitSuccess(false); // Reset status
  //   }
  // }, [submitSuccess]);

  function closeModal() {
    setSubmitSuccess(false);
  }

  return (
    <div className="relative z-20 py-20 px-4 md:px-5 overflow-hidden" id="wish">
      {submitSuccess && (
        <MyModal isOpen={submitSuccess} closeModal={closeModal} />
      )}

      <div
        className="flex flex-col items-center mb-4"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="text-3xl md:text-4xl font-bold font-brush">
          Wedding Wish
        </h3>
        <span className="font-light text-sm text-black mt-1 w-[70%] md:w-full text-center mx-auto ">
          Kirimkan ucapan Anda untuk kedua mempelai.
        </span>
      </div>
      <div
        className="relative max-w-2xl mx-auto mt-16 p-8 md:p-10 bg-white rounded-3xl shadow-md"
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#9a4e33]">
            <img src="/img/wish.png" alt="ig" className="w-7" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className="mb-4"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
          >
            <label
              htmlFor="recipient"
              className="block text-gray-700 text-xs md:text-sm font-semibold mb-2"
            >
              Nama
            </label>
            <input
              type="text"
              id="recipient"
              className="w-full p-3 border border-gray-300 rounded-md font-normal text-xs md:text-sm"
              placeholder="Masukan nama anda..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div
            className="mb-4"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
          >
            <label
              htmlFor="wish"
              className="block text-gray-700 text-xs md:text-sm font-semibold mb-2"
            >
              Ucapan Anda
            </label>
            <textarea
              id="wish"
              className="w-full p-3 border border-gray-300 rounded-md text-xs md:text-sm font-normal"
              placeholder="Masukan ucapan anda..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#9a4e33] text-white py-3 rounded-md hover:bg-[#e6c3aa] transition duration-300 text-sm md:text-base"
          >
            Kirim Ucapan
          </button>
        </form>

        {/* Display submitted wishes */}
        <div className="mt-8">
          {/* <h3 className="text-xl font-semibold mb-4">Submitted Wishes</h3> */}
          {/* {submittedWishes.length === 0 ? (
            <p className="text-sm text-gray-300 font-light">
              No wishes submitted yet.
            </p>
          ) : ( */}
          <ul className="flex flex-col space-y-3 h-[360px] overflow-y-auto py-3">
            {wishes?.length === 0 ? (
              <div className="flex items-center flex-col gap-5 mt-12">
                <img src="/img/empty.svg" alt="empty" className="w-40 mx-auto" />
                <span className="text-center text-sm font-medium text-gray-700 mt-4">
                  Belum ada ucapan, Jadilah yang pertama yang kirim ucapan.
                </span>
              </div>
            ) : (
              wishes.map((w) => (
                <li key={w._id} className="flex gap-2">
                  <div
                    href="/icon-user.png"
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      className="svg-icon"
                      style={{
                        width: "1em",
                        height: "1em",
                        verticalAlign: "middle",
                        fill: "currentColor",
                        overflow: "hidden",
                      }}
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M843.282963 870.115556c-8.438519-140.515556-104.296296-257.422222-233.908148-297.14963C687.881481 536.272593 742.4 456.533333 742.4 364.088889c0-127.241481-103.158519-230.4-230.4-230.4S281.6 236.847407 281.6 364.088889c0 92.444444 54.518519 172.183704 133.12 208.877037-129.611852 39.727407-225.46963 156.634074-233.908148 297.14963-0.663704 10.903704 7.964444 20.195556 18.962963 20.195556l0 0c9.955556 0 18.299259-7.774815 18.962963-17.73037C227.745185 718.506667 355.65037 596.385185 512 596.385185s284.254815 122.121481 293.357037 276.195556c0.568889 9.955556 8.912593 17.73037 18.962963 17.73037C835.318519 890.311111 843.946667 881.019259 843.282963 870.115556zM319.525926 364.088889c0-106.287407 86.186667-192.474074 192.474074-192.474074s192.474074 86.186667 192.474074 192.474074c0 106.287407-86.186667 192.474074-192.474074 192.474074S319.525926 470.376296 319.525926 364.088889z" />
                    </svg>
                  </div>
                  <div className="flex flex-col bg-gray-100 w-full p-4 rounded-md text-xs md:text-sm">
                    <strong>{w.name}</strong>
                    <span className="font-normal text-[11px] md:text-xs mt-1">
                      {w.message}
                    </span>
                  </div>
                </li>
              ))
            )}
            {/* {} */}
          </ul>
          {/* )} */}
        </div>
      </div>
      <div className="absolute top-0 left-0 z-10">
        <img
          src="/img/bunga-5.png"
          alt="bunga"
          className="w-32 md:w-56 m-auto mb-1"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <img
          src="/img/bunga-5.png"
          alt="bunga"
          className="w-32 md:w-56 m-auto mb-1 rotate-180"
        />
      </div>
    </div>
  );
};

export default SendWishForm;
