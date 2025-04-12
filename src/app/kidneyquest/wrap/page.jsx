// app/kidneyquest/wrap/page.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/navigation";

export default function KidneyQuestWrap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const [slides] = useState([
    {
      id: 1,
      bg: "/pattern-1.png",
      height: "h-[100vh]",
      content: (
        <>
          <div className="absolute top-16 text-center w-full px-4">
            <h2 className="text-3xl text-pink-500 font-semibold mb-2">
              DipQuest Wrap
            </h2>
            <h1 className="text-2xl font-bold text-pink-500 mb-6">
              March 2025
            </h1>
          </div>
          <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2">
            <div className="relative w-[460px] h-[460px] sm:w-[480px] sm:h-[480px]">
              <Image
                src="/bg-1.png"
                alt="Badge"
                layout="fill"
                objectFit="contain"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
                <p className="text-2xl text-gray-800 font-medium leading-tight">
                  Hi <strong>Rumaisha</strong>,<br />
                  bulan ini kamu menyelesaikan
                </p>
                <p className="text-6xl font-extrabold text-pink-600 mt-1 mb-1">
                  2
                </p>
                <p className="text-2xl text-black font-semibold">tantangan</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 w-full text-center text-xl text-purple-700">
            <div>
              <p>
                Perjalanan <strong>Kesehatan</strong>
              </p>
              <p>
                <strong> Ginjal</strong> Anda
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      bg: "/bg-2.png", // Your background with the milk splash
      height: "h-[30vh]", // <- shorter height for slide 2
      content: (
        <>
          <div className="absolute top-70 left-0 w-full h-full flex flex-col items-center justify-center text-center px-6 text-gray-800">
            <Image
              src="/pattern-2.png"
              alt="Glass Background"
              width={480}
              height={480}
              className="absolute top-3/5 transform -translate-y-1/2"
            />
            <div className="flex flex-col items-center mt-12">
              <Image
                src="/Droplet.png"
                alt="Water Drop"
                width={100}
                height={100}
                className="mb-4"
              />
              <p className="text-6xl font-normal text-purple-700 leading-snug">
                8 Gelas
              </p>
              <p className="text-3xl text-orange-500 font-normal mt-1">
                Kosumsi Air Harian
              </p>
            </div>

            <div className="mt-4">
              <p className="text-base text-black">
                Anda meningkatkan konsumsi air sebanyak <br />
                <span className="font-bold">30%</span> selama challenge. Ginjal
                Anda <br />
                <span className="font-bold">berterima kasih!</span>
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 3,
      bg: "/bg-3.png", // you can use the same pink background if needed
      content: (
        <div className="relative w-full min-h-screen bg-[#ffecec] flex flex-col justify-between items-center px-4 py-6">
          {/* Header Title */}
          <div className="bg-gradient-to-b from-red-400 to-red-300 rounded-t-xl text-white px-6 py-3 text-center w-full max-w-sm mx-auto mt-40 -mb-32">
            <h2 className="text-2xl font-bold">DipQuest Challenge</h2>
            <p className="text-base mt-1 mb-6">
              14 Hari Perjalanan Kesehatan Ginjal
            </p>
          </div>

          {/* CARD */}
          <div className="bg-white w-full max-w-sm rounded-b-2xl shadow-md p-4 text-center ">
            {/* Trophy */}
            <div className="flex justify-center">
              <Image src="/Trophy.png" width={50} height={50} alt="Trophy" />
            </div>

            {/* Name */}
            <h3 className="text-lg font-medium mt-2 text-gray-800">
              <span className="text-purple-600 font-bold">Rumaisha</span> telah
              berhasil!!
            </h3>

            {/* Stats */}
            <div className="flex justify-center gap-2 mt-4">
              <div className="bg-purple-50 px-3 py-1 rounded-lg">
                <p className="text-lg font-bold text-purple-600">92%</p>
                <p className="text-xs text-gray-600 -mt-1">Tantangan Selesai</p>
              </div>
              <div className="bg-blue-50 px-3 py-1 rounded-lg">
                <p className="text-lg font-bold text-blue-600">14</p>
                <p className="text-xs text-gray-600 -mt-1">Hari Konsisten</p>
              </div>
              <div className="bg-green-50 px-3 py-1 rounded-lg">
                <p className="text-lg font-bold text-green-600">3</p>
                <p className="text-xs text-gray-600 -mt-1">Lencana</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex justify-center gap-6 mt-5 mb-4">
              <div className="flex flex-col items-center">
                <Image
                  src="/Droplet.png"
                  width={28}
                  height={28}
                  alt="Hydration"
                />
                <p className="text-xs text-gray-700 mt-1">Hydration</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/bicep.png" width={28} height={28} alt="Fitness" />
                <p className="text-xs text-gray-700 mt-1">Fitness</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Books.png" width={28} height={28} alt="Scholar" />
                <p className="text-xs text-gray-700 mt-1">Scholar</p>
              </div>
            </div>

            {/* Achievement */}
            <div className="bg-yellow-100 border border-yellow-300 px-3 py-2 rounded-md text-sm text-gray-800">
              <p className="font-semibold text-yellow-700">Pencapaian Utama</p>
              <p className="mt-1 text-sm">
                <Image
                  src="/Droplet.png"
                  alt="drop"
                  width={14}
                  height={14}
                  className="inline-block mr-1"
                />
                Meningkatkan konsumsi air sebanyak <strong>30%</strong>
              </p>
            </div>
            <div className="text-center mt-6">
              <p className="text-xs text-gray-500">#DipQuestChallenge</p>
              <p className="text-xs text-gray-500">GinjalKita.com</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3 mt-4 mb-4">
            <button className="bg-purple-100 text-purple-600 text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
              <Image src="/share.png" alt="Share" width={32} height={32} />
              Bagikan Poster
            </button>
            <button
              onClick={() => router.push("/dashboard")}
              className="bg-red-400 text-white text-sm font-semibold px-5 py-2 rounded-full"
            >
              Selesai
            </button>
          </div>
        </div>
      ),
    },
  ]);

  return (
    <main className="relative w-full min-h-screen bg-gray-50">
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1.5 w-8 rounded-full ${
                i === activeIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative w-full ${slide.height} bg-cover bg-center`}
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {slide.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
