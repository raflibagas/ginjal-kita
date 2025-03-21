// app/telemedis/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TelemedicineLanding() {
  const router = useRouter();

  const handleMenuClick = (route) => {
    router.push(`/telemedis/${route}`);
  };

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto p-4 px-8">
        {/* Header */}
        <div className="flex items-center -mt-4">
          <Link href="/dashboard" className="flex items-center text-gray-600">
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
            <h1 className="text-sm font-bold text-gray-900">Telemedicine</h1>
            <p className="text-xs text-gray-500">
              Konsultasi, Faskes, Asuransi, Dipstick
            </p>
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

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Dokter */}
          <div
            className="bg-red-300 rounded-xl shadow-md p-4 text-white cursor-pointer"
            onClick={() => handleMenuClick("dokter")}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="font-bold mb-1">Dokter</h2>
              <p className="text-xs text-center">Konsultasi Hasil</p>
            </div>
          </div>

          {/* Faskes */}
          <div
            className="bg-blue-400 rounded-xl shadow-md p-4 text-white cursor-pointer"
            onClick={() => handleMenuClick("faskes")}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 className="font-bold mb-1">Faskes</h2>
              <p className="text-xs text-center">Cari Faskes Terdekat</p>
            </div>
          </div>

          {/* Dipstick */}
          <div
            className="bg-blue-400 rounded-xl shadow-md p-4 text-white cursor-pointer"
            onClick={() => handleMenuClick("dipstick")}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h2 className="font-bold mb-1">Dipstick</h2>
              <p className="text-xs text-center">Informasi & Pembelian</p>
            </div>
          </div>

          {/* Asuransi */}
          <div
            className="bg-red-300 rounded-xl shadow-md p-4 text-white cursor-pointer"
            onClick={() => handleMenuClick("asuransi")}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h2 className="font-bold mb-1">Asuransi</h2>
              <p className="text-xs text-center">FAQ BPJS/Asuransi</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
