// app/kidneyquest/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function KidneyQuestLanding() {
  const router = useRouter();

  const handleStartChallenge = () => {
    router.push("/kidneyquest/difficulty");
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

        {/* Main content */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div>
            <Image
              src="/logo-vegetables.png"
              alt="Gigin dan Jajal"
              width={240}
              height={240}
              className="mx-auto"
            />
          </div>

          <div className="mb-8 -mt-20">
            <h2 className="text-2xl mb-1">
              <span className="font-bold text-gray-800">DipQuest</span>{" "}
              <span className="text-gray-700">14Days</span>
            </h2>
            <h3 className="text-2xl mb-4 text-gray-800">Challenge</h3>

            <p className="text-sm text-gray-600 mb-6">
              Bersama Gigin & Jajal, ayo buktikan bahwa kamu bisa{" "}
              <span className="font-bold">menjaga ginjal</span> dengan cara yang
              asyik dan penuh tantangan!
            </p>
          </div>

          <button
            onClick={handleStartChallenge}
            className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-medium w-full max-w-xs -mt-4"
          >
            Mulai Sekarang
          </button>
        </div>
      </div>
    </main>
  );
}
