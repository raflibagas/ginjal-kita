// app/telemedis/dipstick/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TelemedisDipstickInfo() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("information");

  const navigateToTab = (tab) => {
    if (tab === "purchase") {
      router.push("/telemedis/dipstick/purchase");
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto px-4">
        {/* Header */}
        <div className="p-4  ">
          <div className="flex items-center -mt-4">
            <Link href="/telemedis" className="flex items-center text-gray-600">
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
              <h1 className="text-sm font-bold text-gray-900">Dipstick</h1>
              <p className="text-xs text-gray-500">Informasi & Pembelian</p>
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

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeTab === "information"
                  ? "text-red-400 border-b-2 border-red-400"
                  : "text-gray-500"
              }`}
              onClick={() => navigateToTab("information")}
            >
              Informasi
            </button>
            <button
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeTab === "purchase"
                  ? "text-red-400 border-b-2 border-red-400"
                  : "text-gray-500"
              }`}
              onClick={() => navigateToTab("purchase")}
            >
              Pembelian
            </button>
          </div>
        </div>

        {/* Dipstick image */}
        <div className="px-4 mb-4">
          <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/dipstick.png"
              alt="Dipstick"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-8">
          <div className="bg-white rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold flex items-center -mt-2 mb-2">
              <span className="text-gray-800">Apa itu</span>{" "}
              <span className="text-red-500 ml-1">Dipstick</span>
              <span className="text-gray-800">?</span>
            </h2>

            <p className="text-sm text-gray-800">
              Dipstick adalah alat uji sederhana untuk mendeteksi adanya{" "}
              <strong>protein atau darah dalam urin</strong> yang dapat menjadi
              indikator awal adanya masalah pada ginjal. Dengan melakukan tes
              dipstick secara rutin, Anda dapat memantau kesehatan ginjal Anda.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 mb-4">
            <h3 className="text-base font-bold mb-3 text-gray-800">
              Cara Penggunaan
            </h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start">
                <div className="bg-red-100 text-red-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-xs">1</span>
                </div>
                <p className="text-sm">
                  Buka kemasan dipstick dengan hati-hati
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 text-red-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-xs">2</span>
                </div>
                <p className="text-sm">
                  Celupkan strip ke dalam urin selama 1-2 detik
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 text-red-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-xs">3</span>
                </div>
                <p className="text-sm">
                  Tunggu 60 detik (atau sesuai petunjuk pada kemasan)
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 text-red-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-xs">4</span>
                </div>
                <p className="text-sm">
                  Bandingkan warna dengan tabel warna pada kemasan
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 text-red-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-xs">5</span>
                </div>
                <p className="text-sm">
                  Masukkan hasil di aplikasi untuk mendapatkan interpretasi
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mb-4">
            <h3 className="text-base font-bold mb-3 text-gray-800">
              Interpretasi Hasil
            </h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-md bg-green-200 mr-2"></div>
                <p className="text-sm">
                  Normal - Tidak ada indikasi masalah ginjal
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-md bg-yellow-300 mr-2"></div>
                <p className="text-sm">
                  Indikasi Ringan - Konsultasi dalam 3 Bulan
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-md bg-red-400 mr-2"></div>
                <p className="text-sm">
                  Indikasi Sedang - Konsultasi dalam 1 Bulan
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-md bg-purple-700 mr-2"></div>
                <p className="text-sm">
                  Indikasi Kuat - Segera konsultasi dengan dokter
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-xs text-gray-500 italic">
              <span className="font-medium">Catatan:</span> Dipstick hanya alat
              pemeriksaan awal.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
