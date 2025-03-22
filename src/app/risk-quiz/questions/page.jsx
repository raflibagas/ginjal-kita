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
  {
    id: 6,
    question: "Berapa Tinggi Badan Anda? (cm)",
    type: "number",
    placeholder: "contoh: 170",
  },
  {
    id: 7,
    question: "Apakah Anda Merokok?",
    type: "radio",
    options: [
      { id: "yes", label: "Ya" },
      { id: "no", label: "Tidak" },
      { id: "former", label: "Pernah, tapi sudah berhenti" },
    ],
  },
  {
    id: 8,
    question: "Berapa Banyak Air yang Anda Minum Setiap Hari?",
    type: "radio",
    options: [
      { id: "less_than_1", label: "Kurang dari 1 liter" },
      { id: "1_to_2", label: "1-2 liter" },
      { id: "more_than_2", label: "Lebih dari 2 liter" },
    ],
  },
];

// Divide questions into pages (4 questions per page)
const questionsPerPage = 4;
const groupedQuestions = [];
for (let i = 0; i < quizQuestions.length; i += questionsPerPage) {
  groupedQuestions.push(quizQuestions.slice(i, i + questionsPerPage));
}

export default function QuizQuestions() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(25); // Progress percentage

  const handleNext = () => {
    if (currentPage < groupedQuestions.length - 1) {
      setCurrentPage(currentPage + 1);
      setProgress(((currentPage + 2) / groupedQuestions.length) * 100);
    } else {
      // Submit answers and navigate to results
      router.push("/risk-quiz/results");
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setProgress((currentPage / groupedQuestions.length) * 100);
    }
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });
  };

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
        <div className="mb-4 -mt-4">
          <p className="text-xs text-gray-500 mb-1">{`${currentPage + 1}/${groupedQuestions.length} Halaman`}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-red-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Questions for current page */}
        <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-4 mb-4">
          {groupedQuestions[currentPage].map((question) => (
            <div
              key={question.id}
              className="mb-5 pb-5 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
            >
              <h2 className="text-md font-medium mb-3 text-gray-900">
                {question.question}
              </h2>

              {question.type === "number" && (
                <input
                  type="number"
                  placeholder={question.placeholder}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-gray-400 text-gray-800"
                  value={answers[question.id] || ""}
                  onChange={(e) =>
                    handleAnswerChange(question.id, e.target.value)
                  }
                />
              )}

              {question.type === "radio" && (
                <div className="space-y-2">
                  {question.options.map((option) => (
                    <label
                      key={option.id}
                      className={`block p-2 border rounded-lg cursor-pointer ${
                        answers[question.id] === option.id
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option.id}
                          checked={answers[question.id] === option.id}
                          onChange={() =>
                            handleAnswerChange(question.id, option.id)
                          }
                          className="mr-2 text-gray-800 focus:ring-blue-500 focus:ring-offset-red-100"
                          style={{
                            accentColor: "#EB5C59",
                          }}
                        />
                        <span className="text-gray-900 text-sm">
                          {option.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handlePrevious}
            className={`flex-1 py-3 rounded-lg font-medium ${
              currentPage === 0
                ? "bg-gray-200 text-gray-500"
                : "bg-white border border-gray-300 text-gray-700"
            }`}
            disabled={currentPage === 0}
          >
            Kembali
          </button>

          <button
            onClick={handleNext}
            className="flex-1 bg-red-500 text-white rounded-lg py-3 font-medium"
          >
            {currentPage === groupedQuestions.length - 1 ? "Selesai" : "Lanjut"}
          </button>
        </div>
      </div>
    </main>
  );
}
