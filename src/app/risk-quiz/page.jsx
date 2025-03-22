// app/risk-quiz/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function QuizLanding() {
  const router = useRouter();

  const startQuiz = () => {
    router.push("/risk-quiz/questions");
  };

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto p-4 px-8 ">
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
          <div className="flex-1 text-center ml-6">
            <h1 className="text-sm font-bold text-gray-800">Quiz Risiko CKD</h1>
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

        {/* Character image */}
        <div className="flex justify-center -mt-24 -mb-24">
          <Image
            src="/logo-confused.png"
            alt="Gigin dan Jajal"
            width={240}
            height={240}
            priority
          />
        </div>

        {/* Quiz title and description */}
        <div className="mb-6 text-center">
          <h2 className="text-xl mb-2">
            <span className="text-gray-800">Penilaian </span>
            <span className="text-gray-800 font-bold">Risiko </span>
            <span className="text-red-500 font-bold">PGK</span>
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Quiz ini akan membantu Anda mengevaluasi risiko terkena penyakit
            ginjal kronis (PGK) berdasarkan riwayat kesehatan dan gaya hidup
            Anda.
          </p>
        </div>

        {/* Quiz details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <div className="bg-red-100 text-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-sm">⏱️</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800">
                Waktu Pengerjaan
              </h3>
              <p className="text-xs text-gray-500">Sekitar 8-10 menit</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-red-100 text-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-sm">📋</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800">
                Jumlah Pertanyaan
              </h3>
              <p className="text-xs text-gray-500">20 Pertanyaan</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-red-100 text-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-sm">🔒</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800">Privasi</h3>
              <p className="text-xs text-gray-500">
                Data anda aman dan terlindungi
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-gray-800 mb-2">Petunjuk:</h3>
          <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
            <li>Jawab semua pertanyaan dengan jujur</li>
            <li>Semua informasi dapat membantu kesehatan Anda</li>
            <li>Anda dapat kembali ke pertanyaan sebelumnya</li>
            <li>Hasil akan ditampilkan setelah semua pertanyaan dijawab</li>
          </ul>
        </div>

        {/* Start button */}
        <button
          onClick={startQuiz}
          className="w-full bg-red-500 text-white rounded-lg py-3 font-medium"
        >
          Mulai Sekarang
        </button>
      </div>
    </main>
  );
}
