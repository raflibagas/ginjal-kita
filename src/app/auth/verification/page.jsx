// app/verification/page.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OTPVerification() {
  // Initialize with empty OTP fields
  const [otp, setOtp] = useState(["", "", "", ""]);
  const router = useRouter();

  // Add this to fix the height on mobile browsers
  if (typeof window !== "undefined") {
    // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    // Auto-focus next input if value is entered
    if (value && index < 3) {
      const nextInput = document.querySelector(
        `input[name="otp-${index + 1}"]`
      );
      if (nextInput) nextInput.focus();
    }

    // Check if all fields are filled
    if (newOtp.every((digit) => digit !== "")) {
      // Add a small delay before redirecting
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    }
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between bg-red-50"
      style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
    >
      {/* Header section */}
      <div className="w-full pt-8 px-6 mt-40">
        <h1 className="text-2xl font-semibold text-gray-800">Verifikasi OTP</h1>
        <p className="text-lg text-gray-500 mt-1">
          Kami telah mengirimkan kode OTP ke <br />
          nomor ponsel Anda{" "}
          <span className="text-gray-500">+62 855 1704 434</span>
        </p>
        <p className="text-sm text-red-500 mt-1">Ubah</p>
      </div>

      {/* OTP display */}
      <div className="w-full px-8 pb-24">
        <div className="flex justify-center space-x-4 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              name={`otp-${index}`}
              type="tel"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-16 h-16 flex items-center justify-center bg-white border border-gray-200 rounded-md shadow-sm text-center text-xl font-medium text-gray-800"
              autoFocus={index === 0}
            />
          ))}
        </div>
        <div className="text-left mt-8 mb-72 -ml-2">
          <p className="text-md text-gray-600">Belum menerima kode?</p>
          <button className="text-md text-red-500 font-medium">
            Kirim Ulang
          </button>
        </div>
      </div>
    </main>
  );
}
