// app/risk-quiz/questions/page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Sample questions data
const quizQuestions = [
  {
    id: 1,
    question: "Berapa Usia Anda?",
    type: "number",
    placeholder: "contoh: 35",
  },
  {
    id: 2,
    question: "Jenis Kelamin Anda?",
    type: "radio",
    options: [
      { id: "female", label: "Perempuan" },
      { id: "male", label: "Laki-Laki" },
    ],
  },
  {
    id: 3,
    question: "Apakah Anda Mempunyai Riwayat Diabetes?",
    type: "radio",
    options: [
      { id: "yes", label: "Ya" },
      { id: "no", label: "Tidak" },
    ],
  },
  {
    id: 4,
    question:
      "Apakah Anda Mempunyai Riwayat Hipertensi (Tekanan Darah Tinggi)?",
    type: "radio",
    options: [
      { id: "yes", label: "Ya" },
      { id: "no", label: "Tidak" },
    ],
  },
  {
    id: 5,
    question: "Berapa Berat Badan Anda? (kg)",
    type: "number",
    placeholder: "contoh: 65",
  },
];

export default function QuizQuestions() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(25); // Progress percentage

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 2) / quizQuestions.length) * 100);
    } else {
      // Submit answers and navigate to results
      router.push("/risk-quiz/results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setProgress((currentQuestion / quizQuestions.length) * 100);
    }
  };

  const handleAnswerChange = (value) => {
    setAnswers({
      ...answers,
      [quizQuestions[currentQuestion].id]: value,
    });
  };

  const currentQuestionData = quizQuestions[currentQuestion];

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto p-4 px-8">
        {/* Header */}
        <div className="flex items-center mb-6 -mt-4">
          <Link href="/risk-quiz" className="flex items-center text-gray-600">
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
          <div className="flex-1 text-center ml-4">
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

        {/* Progress bar */}
        <div className="mb-8 -mt-4">
          <p className="text-xs text-gray-500 mb-1">{`${currentQuestion + 1}/${quizQuestions.length} Halaman`}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-red-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-4 mb-4">
            <h2 className="text-md font-medium mb-4 text-gray-900">
              {currentQuestionData.question}
            </h2>

            {currentQuestionData.type === "number" && (
              <input
                type="number"
                placeholder={currentQuestionData.placeholder}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-gray-400 text-gray-800"
                value={answers[currentQuestionData.id] || ""}
                onChange={(e) => handleAnswerChange(e.target.value)}
              />
            )}

            {currentQuestionData.type === "radio" && (
              <div className="space-y-3">
                {currentQuestionData.options.map((option) => (
                  <label
                    key={option.id}
                    className={`block p-3 border rounded-lg cursor-pointer ${
                      answers[currentQuestionData.id] === option.id
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={`question-${currentQuestionData.id}`}
                        value={option.id}
                        checked={answers[currentQuestionData.id] === option.id}
                        onChange={() => handleAnswerChange(option.id)}
                        // className="mr-2 text-red-500 focus:ring-red-500"
                        className="mr-2 text-gray-800 focus:ring-blue-500 focus:ring-offset-red-100"
                        style={{
                          accentColor: "#EB5C59", // Force blue color for the radio button
                        }}
                      />
                      <span className="text-gray-900">{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handlePrevious}
            className={`flex-1 py-3 rounded-lg font-medium ${
              currentQuestion === 0
                ? "bg-gray-200 text-gray-500"
                : "bg-white border border-gray-300 text-gray-700"
            }`}
            disabled={currentQuestion === 0}
          >
            Kembali
          </button>

          <button
            onClick={handleNext}
            className="flex-1 bg-red-500 text-white rounded-lg py-3 font-medium"
          >
            {currentQuestion === quizQuestions.length - 1
              ? "Selesai"
              : "Lanjut"}
          </button>
        </div>
      </div>
    </main>
  );
}
