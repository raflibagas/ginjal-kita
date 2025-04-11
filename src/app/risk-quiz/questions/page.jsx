// app/risk-quiz/questions/page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Updated comprehensive questions data for PGK risk assessment
const quizQuestions = [
  {
    id: 1,
    question: "Berapa usia Anda?",
    type: "number",
    placeholder: "contoh: 35",
    min: 20,
    max: 90,
    note: "Dalam rentang 20-90 tahun",
  },
  {
    id: 2,
    question: "Apa jenis kelamin Anda?",
    type: "radio",
    options: [
      { id: "0", label: "Pria" },
      { id: "1", label: "Wanita" },
    ],
  },
  {
    id: 3,
    question: "Apa etnis Anda?",
    type: "radio",
    options: [
      { id: "0", label: "Kaukasian" },
      { id: "1", label: "Afrika-Amerika" },
      { id: "2", label: "Asia" },
      { id: "3", label: "Lainnya" },
    ],
  },
  {
    id: 4,
    question: "Bagaimana status sosial dan ekonomi Anda?",
    type: "radio",
    options: [
      { id: "0", label: "Rendah" },
      { id: "1", label: "Sedang" },
      { id: "2", label: "Tinggi" },
    ],
  },
  {
    id: 5,
    question: "Apa level pendidikan tertinggi Anda?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak ada" },
      { id: "1", label: "Sekolah Menengah" },
      { id: "2", label: "Sarjana" },
      { id: "3", label: "Lebih Tinggi" },
    ],
  },
  {
    id: 6,
    question: "Berapakah BMI Anda?",
    type: "number",
    placeholder: "contoh: 23",
    min: 15,
    max: 40,
    note: "Dalam rentang 15-40",
  },
  {
    id: 7,
    question: "Apakah Anda merokok?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 8,
    question: "Berapa unit alkohol yang Anda konsumsi per minggu?",
    type: "number",
    placeholder: "contoh: 5",
    min: 0,
    max: 20,
    note: "Dalam rentang 0-20 unit",
  },
  {
    id: 9,
    question: "Berapa jam Anda berkegiatan fisik per minggu?",
    type: "number",
    placeholder: "contoh: 3",
    min: 0,
    max: 10,
    note: "Dalam rentang 0-10 jam",
  },
  {
    id: 10,
    question: "Menurut Anda, bagaimana kualitas makanan Anda?",
    type: "number",
    placeholder: "contoh: 7",
    min: 0,
    max: 10,
    note: "Dalam rentang 0-10",
  },
  {
    id: 11,
    question: "Menurut Anda, bagaimana kualitas tidur Anda?",
    type: "number",
    placeholder: "contoh: 7",
    min: 4,
    max: 10,
    note: "Dalam rentang 4-10",
  },
  {
    id: 12,
    question: "Apakah keluarga Anda memiliki riwayat penyakit ginjal?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 13,
    question: "Apakah keluarga Anda memiliki riwayat hipertensi?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 14,
    question: "Apakah keluarga Anda memiliki riwayat diabetes?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 15,
    question:
      "Apakah Anda pernah mengalami GGA (Gagal Ginjal Akut) sebelumnya?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 16,
    question: "Apakah Anda pernah mengalami infeksi saluran kemih?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 17,
    question: "Apakah Anda sedang mengonsumsi obat Penghambat ACE?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 18,
    question: "Apakah Anda sedang mengonsumsi obat Diuretik?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 19,
    question: "Apakah Anda sedang mengonsumsi obat Antiperadangan Nonsteroid?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 20,
    question: "Apakah Anda sedang mengonsumsi obat Statin?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 21,
    question: "Apakah Anda sedang mengonsumsi obat Antidiabetes?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 22,
    question: "Apakah Anda mengalami sembap?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 23,
    question: "Menurut Anda, berapa tingkat kelelahan yang Anda rasakan?",
    type: "number",
    placeholder: "contoh: 5",
    min: 0,
    max: 10,
    note: "Dalam rentang 0-10",
  },
  {
    id: 24,
    question: "Berapa kali Anda mengalami mual muntah dalam seminggu?",
    type: "number",
    placeholder: "contoh: 2",
    min: 0,
    max: 7,
    note: "Dalam rentang 0-7 kali per minggu",
  },
  {
    id: 25,
    question: "Berapa kali Anda mengalami keram otot dalam seminggu?",
    type: "number",
    placeholder: "contoh: 3",
    min: 0,
    max: 7,
    note: "Dalam rentang 0-7 kali per minggu",
  },
  {
    id: 26,
    question: "Menurut Anda, berapa tingkat gatal yang Anda rasakan?",
    type: "number",
    placeholder: "contoh: 4",
    min: 0,
    max: 10,
    note: "Dalam rentang 0-10",
  },
  {
    id: 27,
    question: "Menurut Anda, berapa skor kualitas hidup Anda saat ini?",
    type: "number",
    placeholder: "contoh: 75",
    min: 0,
    max: 100,
    note: "Dalam rentang 0-100",
  },
  {
    id: 28,
    question: "Apakah Anda terpapar logam berat?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 29,
    question: "Bagaimana kualitas udara di lingkungan Anda?",
    type: "radio",
    options: [
      { id: "0", label: "Baik" },
      { id: "1", label: "Buruk" },
    ],
  },
  {
    id: 30,
    question: "Apakah Anda terpapar bahan kimia di tempat kerja?",
    type: "radio",
    options: [
      { id: "0", label: "Tidak" },
      { id: "1", label: "Ya" },
    ],
  },
  {
    id: 31,
    question: "Berapa kali Anda melakukan pemeriksaan kesehatan dalam setahun?",
    type: "number",
    placeholder: "contoh: 2",
    min: 0,
    max: 4,
    note: "Dalam rentang 0-4 kali per tahun",
  },
  {
    id: 32,
    question: "Menurut Anda, berapa skor kepatuhan pengobatan Anda?",
    type: "number",
    placeholder: "contoh: 8",
    min: 0,
    max: 10,
    note: "Dalam rentang 0-10",
  },
  {
    id: 33,
    question: "Menurut Anda, berapa skor literasi kesehatan Anda?",
    type: "number",
    placeholder: "contoh: 7",
    min: 0,
    max: 10,
    note: "Dalam rentang 0-10",
  },
];

// Divide questions into pages - 4 questions per page
const questionsPerPage = 4;
const groupedQuestions = [];
for (let i = 0; i < quizQuestions.length; i += questionsPerPage) {
  groupedQuestions.push(quizQuestions.slice(i, i + questionsPerPage));
}

export default function QuizQuestions() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);
  const [isPageValid, setIsPageValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate progress percentage
  useEffect(() => {
    setProgress(((currentPage + 1) / groupedQuestions.length) * 100);
  }, [currentPage]);

  // Validate current page
  useEffect(() => {
    const currentPageQuestions = groupedQuestions[currentPage];
    const allQuestionsAnswered = currentPageQuestions.every(
      (question) =>
        answers[question.id] !== undefined && answers[question.id] !== ""
    );
    setIsPageValid(allQuestionsAnswered);
  }, [answers, currentPage]);

  const handleNext = async () => {
    if (currentPage < groupedQuestions.length - 1) {
      // Just move to next page if not on the last page
      setCurrentPage(currentPage + 1);
    } else {
      // On the last page, submit answers to backend
      try {
        // Show loading state
        setIsSubmitting(true);

        // Send answers to backend
        const response = await fetch(
          "https://ginjalkita-api-5da756be2fd5.herokuapp.com/predict",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(answers),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Get prediction results
        const result = await response.json();

        // Store both answers and results in localStorage for the results page
        localStorage.setItem("quizAnswers", JSON.stringify(answers));
        localStorage.setItem("predictionResults", JSON.stringify(result));

        // Navigate to results page
        router.push("/risk-quiz/results");
      } catch (error) {
        console.error("Error predicting risk:", error);
        alert("Terjadi kesalahan. Silakan coba lagi.");
        setIsSubmitting(false);
      }
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
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
            <h1 className="text-sm font-bold text-gray-800">Quiz Risiko PGK</h1>
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
          <div className="w-full bg-white rounded-full h-2.5">
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
              <h2 className="text-md font-medium mb-2 text-gray-900">
                {question.question}
              </h2>

              {question.note && (
                <p className="text-xs text-gray-500 mb-3">{question.note}</p>
              )}

              {question.type === "number" && (
                <input
                  type="number"
                  placeholder={question.placeholder}
                  min={question.min}
                  max={question.max}
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
            className={`flex-1 ${
              isPageValid ? "bg-red-500 text-white" : "bg-red-300 text-white"
            } rounded-lg py-3 font-medium`}
            disabled={!isPageValid}
          >
            {currentPage === groupedQuestions.length - 1 ? "Selesai" : "Lanjut"}
          </button>
        </div>
      </div>
    </main>
  );
}
