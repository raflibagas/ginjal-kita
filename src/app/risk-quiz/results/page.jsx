// app/risk-quiz/results/page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function QuizResults() {
  const router = useRouter();

  // This would normally come from the quiz answers
  const riskLevel = "medium"; // low, medium, high, very-high

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto p-4 px-8">
        {/* Header */}
        <div className="flex items-center mb-6 -mt-4">
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
          <div className="flex-1 text-center ml-8">
            <h1 className="text-sm font-bold text-gray-900">Quiz Risiko CKD</h1>
            <p className="text-xs text-gray-500">Cek Risiko Anda</p>
          </div>
          <div className="w-14">
            <Image
              src="/logo-vegetables.png"
              alt="Gigin dan Jajal"
              width={80}
              height={80}
            />
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 -mt-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Hasil Anda:</h2>

          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-4">
            <div className="flex mb-2">
              <div className="flex-1">
                <h3 className="text-xl mb-3">
                  <span className="text-red-500 font-bold">Siaga</span>{" "}
                  <span className="text-gray-800">Bareng Jajal</span>
                </h3>

                <div className="flex">
                  <div className="w-30 h-30 mr-3 -ml-4 -mt-8">
                    <Image
                      src="/logo-confused.png"
                      alt="Gigin dan Jajal"
                      width={240}
                      height={240}
                    />
                  </div>

                  <div className="flex-1">
                    <p className="mb-2">
                      <span className="text-sm text-gray-800">
                        Ginjalimu butuh perhatian ekstra. Jajal menyarankan kamu
                        untuk lebih rutin cek kesehatan dan konsultasi jika
                        perlu!
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1 ">
                <span className="text-base font-semibold text-gray-800">
                  Tingkat Risiko:
                </span>
                <span className="text-yellow-500 font-medium">Medium</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-2/3"></div>
              </div>
            </div>

            <p className="font-medium mb-2 text-sm">
              <span className="text-gray-800">
                Berdasarkan jawaban Anda, risiko PGK Anda tergolong{" "}
              </span>
              <span className="underline text-gray-800 font-bold">sedang</span>
            </p>
            <p className="text-gray-800 text-sm">
              Perhatian khusus diperlukan untuk beberapa faktor risiko Anda.{" "}
              <span className="font-bold underline">
                Konsultasikan dengan dokter
              </span>{" "}
              untuk langkah pencegahan.
            </p>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="flex items-center text-base font-medium -mt-4">
              <span className="text-gray-900 mr-1 font-bold">Rekomendasi</span>
              <span className="text-gray-800"> dari Gigin!</span>
              <div className="ml-auto">
                <Image
                  src="/logo-confused.png"
                  alt="Gigin"
                  width={40}
                  height={24}
                  className="ml-2"
                />
              </div>
            </h3>

            <div className="space-y-3">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Kontrol Tekanan Darah
                  </h4>
                  <p className="text-xs text-gray-600">
                    Pantau tekanan darah Anda secara teratur dan jaga agar tetap
                    di bawah 130/80 mmHg.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Tingkatkan Asupan Air
                  </h4>
                  <p className="text-xs text-gray-600">
                    Minum setidaknya 8 gelas air per hari untuk menjaga fungsi
                    ginjal yang optimal
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Lakukan Olahraga Teratur
                  </h4>
                  <p className="text-xs text-gray-600">
                    Lakukan aktivitas fisik minimal 30 menit setiap hari, 5 kali
                    seminggu
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Kontrol Makanan
                  </h4>
                  <p className="text-xs text-gray-600">
                    Batasi asupan natrium hingga kurang dari 2000mg per hari
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3 mb-4">
          <button className="w-full bg-red-500 text-white rounded-lg py-3 font-medium flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Konsultasi dengan Dokter
          </button>

          <button className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-3 font-medium flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            Ketahui Dipstick
          </button>

          <button className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-3 font-medium flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Unduh hasil Anda
          </button>
        </div>

        <p className="text-xs text-gray-500 mb-8">
          <b>Catatan:</b> Hasil ini bersifat prediktif dan bukan diagnosis.
          Konsultasikan dengan dokter untuk evaluasi lengkap.
        </p>
      </div>
    </main>
  );
}
