"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const startX = useRef(0);

  // Add Inter font
  const interFont = {
    fontFamily: "Inter, sans-serif",
  };

  const slides = [
    // Slide 1 - Splash with Gigin and Jajal
    {
      image: "/logo-vegetables.png", // Image showing both characters with vegetables
      title: (
        <h1 className="text-3xl mb-2">
          <span className="text-gray-800">Ginjal</span><span className="font-bold text-red-500">Kita</span>
        </h1>
      ),
      subtitle: "Bersama, Jaga Kesehatan Ginjal Sejak Dini!",
    },
    // Slide 2 - Onboarding with characters
    {
      image: "/logo-confused.png", // Image showing both characters talking
      title: (
        <h1 className="text-3xl mb-2">
          <span className="text-gray-800">Cek </span><span className="text-red-500 font-bold">Risiko</span>
          <br />
          <span className="text-gray-800">Gagal Ginjal!</span>
        </h1>
      ),
      subtitle:
        "Ayo kenali kondisi risiko ginjalmu dengan kuis singkat, temukan rekomendasi yang pas untukmu",
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-4 bg-red-50"
      style={interFont}
    >

      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <div
          className="w-full flex-1 flex flex-col items-center justify-center"
          style={{ touchAction: "pan-y" }}
          onTouchStart={(e) => {
            startX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX.current - endX;

            if (diff > 50) {
              // Swipe left
              handleNext();
            } else if (diff < -50) {
              // Swipe right
              handlePrev();
            }
          }}
        >
          {/* Character Image Container */}
          <div className="mb-6 relative">
            {currentSlide === 0 && (
              <>
                <div className="absolute top-20 left-2 text-md font-medium text-gray-800">
                  Hi, aku Gigin
                </div>
                <div className="absolute top-20 right-4 text-md font-medium text-gray-800">
                  Hi, aku Jajal
                </div>
              </>
            )}

            <Image
              src={slides[currentSlide].image}
              alt={
                currentSlide === 0
                  ? "Gigin dan Jajal"
                  : "Cek Risiko Gagal Ginjal"
              }
              width={280}
              height={280}
              priority
              className="mx-auto -mb-30"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-3">{slides[currentSlide].title}</div>

          {/* Subtitle */}
          <p className="text-sm text-gray-600 mb-6 text-center max-w-xs -mt-4">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Bottom section: Navigation dots and action button */}
      <div className="flex flex-col items-center w-full mt-auto">
        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mb-6 -mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "w-6 bg-gray-800" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mulai Sekarang button - always visible */}
        <Link
          href="/auth/sign-in"
          onClick={(e) => {
            // If not on last slide, prevent navigation and go to next slide
            // if (currentSlide < slides.length - 1) {
            //   e.preventDefault();
            //   handleNext();
            // }
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg w-full max-w-xs text-center mb-20"
        >
          Mulai Sekarang
        </Link>
      </div>
    </main>
  );
}
