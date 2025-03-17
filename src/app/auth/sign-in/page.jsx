// app/sign-in/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  // Add this to fix the height on mobile browsers
  if (typeof window !== "undefined") {
    // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Navigate to verification page
    router.push("/auth/verification");
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between bg-red-50"
      style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
    >
      {/* Main content - centered */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md px-6">
        {/* Logo and title section */}
        <div className="mb-8 text-center -mt-40">
          <div className="flex justify-center -mb-28">
            <Image
              src="/logo-vegetables.png"
              alt="Gigin dan Jajal"
              width={300}
              height={300}
              priority
              className="mx-auto"
            />
          </div>

          <h1 className="text-3xl mb-1">
            <span className="text-gray-800">Ginjal</span>
            <span className="text-red-500 font-bold">Kita</span>
          </h1>

          <p className="text-sm text-gray-600 -mb-4">
            Bersama, Jaga Kesehatan Ginjal Sejak Dini!
          </p>
        </div>

        {/* Phone input with submit button */}
        <div className="w-full bg-white rounded-xl shadow-lg p-4 mb-8">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex">
              <div className="bg-gray-100 py-3 px-3 rounded-l-lg border border-r-0 border-gray-200">
                <span className="text-gray-700">+62</span>
              </div>

              <input
                type="tel"
                placeholder="812 752 9976"
                className="flex-1 p-3 border border-gray-200 rounded-r-lg focus:outline-none text-gray-400"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />

              <button
                type="submit"
                className="ml-2 bg-red-400 hover:bg-red-500 text-white p-3 rounded-lg w-10 flex items-center justify-center"
                aria-label="Continue"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full text-center pb-8">
        <p className="text-xs text-gray-500 mb-8 px-6">
          Dengan melanjutkan, Anda setuju dengan{" "}
          <Link href="/terms" className="text-red-500">
            Syarat & Ketentuan
          </Link>{" "}
          kami
        </p>

      </div>
    </main>
  );
}
