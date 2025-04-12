// app/kidneyquest/difficulty/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function KidneyQuestDifficulty() {
  const router = useRouter();

  const handleSelectDifficulty = (level) => {
    router.push(`/kidneyquest/challenges?level=${level}`);
  };

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto p-4 px-8">
        {/* Header */}
        <div className="flex items-center -mt-4">
          <Link href="/kidneyquest" className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <div className="flex-1 text-center ml-6">
            <h1 className="text-sm font-bold text-gray-900">DipQuest</h1>
            <p className="text-xs text-gray-500">Tantangan Kesehatan Ginjal</p>
          </div>
          <div className="w-14">
            <Image
              src="/logo-vegetables.png"
              alt="Gigin dan Jajal"
              width={60}
              height={60}
            />
          </div>
        </div>

        {/* Challenge intro */}
        <div className="mb-4 bg-purple-100 rounded-lg p-4 shadow-sm">
          <div className="flex items-start">
            <div className=" rounded-full p-2 mr-3 flex-shrink-0">
              <Image src="/panah.png" alt="Trophy" width={24} height={24} />
            </div>
            <div>
              <h2 className="text-sm font-bold mb-1 text-gray-800">
                Mulai Perjalanan Kesehatan Anda!
              </h2>
              <p className="text-xs text-gray-600">
                Ikuti tantangan 14 hari untuk meningkatkan kesadaran sehat dan
                menjaga kesehatan ginjal Anda. Pilih tingkat kesulitan sesuai
                dengan kemampuan Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Wrap-Up Preview Card */}
        <div
          className="mb-4 bg-yellow-100 rounded-lg p-4 shadow-sm cursor-pointer hover:bg-yellow-200 transition"
          onClick={() => router.push("/kidneyquest/wrap")}
        >
          <div className="flex items-start">
            <div className="rounded-full p-2 mr-3 flex-shrink-0 bg-white">
              <Image src="/trophy.png" alt="Wrap Icon" width={24} height={24} />
            </div>
            <div>
              <h2 className="text-sm font-bold mb-1 text-gray-800">
                Lihat Perjalanan Anda!
              </h2>
              <p className="text-xs text-gray-700">
                Temukan rangkuman 14 hari terakhir dan pencapaian Anda selama
                tantangan.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-2 text-gray-800">
          Pilih Tingkat Tantangan
        </h2>

        {/* Difficulty levels */}
        <div className="space-y-4 mb-8">
          {/* Pemula */}
          {/* Pemula */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-start">
              <div className="flex">
                <div
                  className="bg-purple-100 rounded-full p-2 flex-shrink-0 mr-3 flex items-center justify-center mt-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  <Image
                    src="/pemula.png"
                    alt="Pemula"
                    width={28}
                    height={28}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    Pemula
                  </h3>
                  <p className="text-xs text-gray-600">
                    Cocok untuk yang baru memulai perjalanan kesehatan ginjal
                  </p>
                  <p className="text-xs text-gray-400 mt-1">14 Hari</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full mb-auto">
                  Mudah
                </span>
                <button
                  onClick={() => handleSelectDifficulty("beginner")}
                  className="text-blue-500 text-sm font-medium mt-6 mr-2"
                >
                  Pilih
                </button>
              </div>
            </div>
          </div>

          {/* Menengah */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-start">
              <div className="flex">
                <div
                  className="bg-purple-100 rounded-full p-2 flex-shrink-0 mr-3 flex items-center justify-center mt-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  {" "}
                  <Image
                    src="/menengah.png"
                    alt="Menengah"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    Menengah
                  </h3>
                  <p className="text-xs text-gray-600">
                    Untuk yang sudah memiliki kebiasaan sehat dasar
                  </p>
                  <p className="text-xs text-gray-400 mt-1">14 Hari</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded-full mb-auto">
                  Sedang
                </span>
                <button
                  onClick={() => handleSelectDifficulty("intermediate")}
                  className="text-blue-500 text-sm font-medium mt-6 mr-2"
                >
                  Pilih
                </button>
              </div>
            </div>
          </div>

          {/* Mahir */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-start">
              <div className="flex">
                <div
                  className="bg-purple-100 rounded-full p-2 flex-shrink-0 mr-3 flex items-center justify-center mt-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  {" "}
                  <Image src="/mahir.png" alt="Mahir" width={40} height={40} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Mahir</h3>
                  <p className="text-xs text-gray-600">
                    Tantangan lebih intensif untuk hasil maksimal
                  </p>
                  <p className="text-xs text-gray-400 mt-1">14 Hari</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full mb-auto">
                  Sulit
                </span>
                <button
                  onClick={() => handleSelectDifficulty("advanced")}
                  className="text-blue-500 text-sm font-medium mt-6 mr-2"
                >
                  Pilih
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-8 -mt-2">
          <h3 className="text-base font-semibold text-gray-800 mb-3 ">
            Manfaat DipQuest
          </h3>

          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-yellow-100 rounded-full p-2 mr-3 flex-shrink-0">
                <Image src="/trophy.png" alt="Trophy" width={20} height={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  Dapatkan Lencana
                </h4>
                <p className="text-xs text-gray-500">
                  Koleksi lencana prestasi untuk setiap tantangan
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                <Image src="/chart.png" alt="Trending" width={20} height={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  Lacak Kemajuan
                </h4>
                <p className="text-xs text-gray-500">
                  Pantau perkembangan kesehatan ginjal Anda
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3 flex-shrink-0">
                <Image src="/bicep.png" alt="Health" width={20} height={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  Bangun Kebiasaan Sehat
                </h4>
                <p className="text-xs text-gray-500">
                  Bentuk rutinitas yang mendukung kesehatan ginjal jangka
                  panjang
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-2 mr-3 flex-shrink-0">
                <Image src="/gift.png" alt="Gift" width={20} height={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  DipQuest Wrap-Up
                </h4>
                <p className="text-xs text-gray-500">
                  Dapatkan ringkasan perjalanan kesehatan Anda setelah 14 hari
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
