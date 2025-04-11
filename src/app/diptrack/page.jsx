"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DiptrackLanding() {
  const router = useRouter();

  const handleMenuClick = (route) => {
    router.push(`/diptrack/${route}`);
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
            <h1 className="text-sm font-bold text-gray-900">Diptrack</h1>
            <p className="text-xs text-gray-500">
              Informasi, Input Hasil, Pemantauan PGK
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
          {/* Informasi */}
          <div
            className="bg-blue-400 rounded-xl shadow-md p-4 text-white cursor-pointer"
            onClick={() => handleMenuClick("info")}
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
              <h2 className="font-bold mb-1">Informasi</h2>
              <p className="text-xs text-center">Tes & Parameter Dipstick</p>
            </div>
          </div>

          {/* Catat Hasil */}
          <div
            className="bg-red-300 rounded-xl shadow-md p-4 text-white cursor-pointer"
            onClick={() => handleMenuClick("input")}
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="font-bold mb-1">Catat Hasil</h2>
              <p className="text-xs text-center">Input Data Dipstick</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
