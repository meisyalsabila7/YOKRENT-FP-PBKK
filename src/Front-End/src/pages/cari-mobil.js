import Intro from "@/components/intro";
import "../app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import accord from "../../public/assets/mobil/accord.png";
import agya from "../../public/assets/mobil/agya.png";
import alphard from "../../public/assets/mobil/alphard.png";
import avanza from "../../public/assets/mobil/avanza.png";
import calya from "../../public/assets/mobil/calya.png";
import camry from "../../public/assets/mobil/camry.png";
import civic from "../../public/assets/mobil/civic.png";
import corolla from "../../public/assets/mobil/corolla.png";
import ertiga from "../../public/assets/mobil/ertiga.png";
import hiace from "../../public/assets/mobil/hiace.png";
import innova from "../../public/assets/mobil/innova.png";
import jazz from "../../public/assets/mobil/jazz.png";
import mobilio from "../../public/assets/mobil/mobilio.png";
import vios from "../../public/assets/mobil/vios.png";
import Image from "next/image";
import React from "react";

import { FiUsers, FiSettings, FiCalendar } from "react-icons/fi";
const dataMobil = [
  {
    url: accord,
    name: "Accord",
  },
  {
    url: agya,
    name: "Agya",
  },
  {
    url: alphard,
    name: "Alphard",
  },
  {
    url: avanza,
    name: "Avanza",
  },
  {
    url: calya,
    name: "Calya",
  },
  {
    url: camry,
    name: "Camry",
  },
  {
    url: civic,
    name: "Civic",
  },
  {
    url: corolla,
    name: "Corolla",
  },
  {
    url: ertiga,
    name: "Ertiga",
  },
  {
    url: hiace,
    name: "Hiace",
  },
  {
    url: innova,
    name: "Innova",
  },
  {
    url: jazz,
    name: "Jazz",
  },
  {
    url: mobilio,
    name: "Mobilio",
  },
  {
    url: vios,
    name: "Vios",
  },
];
const CariMobil = () => {
  const [showList, setShowList] = React.useState(false);
  return (
    <>
      <Navbar />
      <main>
        <div className="relative">
          <Intro isHidden={true} />
          <div className="flex lg:absolute  lg:-bottom-8 w-full justify-center">
            <div className="bg-white lg:flex-row flex-col shadow-md lg:w-fit w-full lg:m-0 m-5 p-5 gap-8 flex rounded shadow-slate-300">
              <div>
                <div>Tipe Driver</div>
                <select
                  data-te-select-init
                  className="border-gray-300 rounded border py-1 px-1  italic"
                >
                  <option value="dengan-sopir">Toyota</option>
                  <option value="tanpa-sopir">Honda</option>
                  <option value="tanpa-sopir">Suzuki</option>
                </select>
              </div>
              <div>
                <div>Tanggal</div>
                <input
                  className="border-gray-300 rounded border py-1 px-4 italic"
                  type="date"
                  placeholder="Pilih Tanggal"
                />
              </div>
              <div>
                <div>Waktu Jemput/Ambil</div>
                <input
                  className="border-gray-300 rounded border py-1 px-4 italic"
                  type="time"
                  placeholder="Pilih Waktu"
                />
              </div>
              <div>
                <div>Jumlah Penumpang (optional)</div>
                <input
                  className="border-gray-300 rounded border py-1 px-4 italic"
                  type="number"
                  placeholder="Jumlah Penumpang"
                />
              </div>
              <button
                onClick={() => setShowList(true)}
                className="bg-[#5CB85F] rounded italic py-2 px-4 text-white my-4"
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>

        {showList && (
          <div className="max-w-screen-xl grid lg:grid-cols-3 grid-cols-1 gap-8 mx-auto py-16 lg:px-0 px-5">
            {dataMobil.map((a, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded p-4 shadow-md shadow-slate-300"
              >
                <div className="flex justify-center">
                  <Image className="h-[15rem] w-auto" src={a.url} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{a.name}</p>
                  <p className="italic">Rp 430.000 / hari</p>

                  <span className="flex gap-2 items-center italic">
                    <FiUsers /> 4 Orang
                  </span>
                  <span className="flex gap-2 items-center italic">
                    <FiSettings /> Manual
                  </span>
                  <span className="flex gap-2 items-center italic">
                    <FiCalendar /> Tahun 2020
                  </span>
                </div>
                <button className="bg-[#5CB85F] rounded italic py-2 px-4 text-white my-4 w-full">
                  Pilih Mobil
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CariMobil;
