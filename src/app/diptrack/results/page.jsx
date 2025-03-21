// app/diptrack/results/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DiptrackResults() {
  const router = useRouter();
  const [expandedParam, setExpandedParam] = useState(null);

  // Mock data for results display
  const resultsData = {
    risk: "Very High Risk",
    date: "4 Mar 2025",
    parameters: [
      { id: "leu", name: "Leukosit", value: "Negatif", isAbnormal: false },
      { id: "nit", name: "Nitrit", value: "Negative", isAbnormal: false },
      {
        id: "uro",
        name: "Urobilinogen",
        value: "8*",
        isAbnormal: true,
        details:
          "Nilai urobilinogen 8 mg/dL menunjukkan kadar yang sangat tinggi. Ini dapat mengindikasikan masalah hati seperti hepatitis atau sirosis atau masalah hemolitik (kerusakan sel darah merah).",
      },
      { id: "ph", name: "pH", value: "5.0", isAbnormal: false },
      { id: "mic", name: "Mikroalbumin", value: "Negatif", isAbnormal: false },
      {
        id: "cre",
        name: "Kreatinin",
        value: "3.0*",
        isAbnormal: true,
        details:
          "Nilai kreatinin 3.0 mg/dL menunjukkan kadar yang tinggi. Ini dapat mengindikasikan gangguan fungsi ginjal.",
      },
    ],
    implication:
      "Hasil dipstick menunjukkan indikasi kuat adanya masalah ginjal. Segera konsultasikan dengan dokter untuk penanganan lanjutan.",
  };

  const toggleParameterDetails = (paramId) => {
    if (expandedParam === paramId) {
      setExpandedParam(null);
    } else {
      setExpandedParam(paramId);
    }
  };

  const handleScheduleConsultation = () => {
    router.push("/telemedis");
  };

  const handleBack = () => {
    router.push("/diptrack");
  };

  const handleDownload = () => {
    // Implementation for downloading results
    alert("Mengunduh hasil...");
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
            <p className="text-xs text-gray-500">Catat Hasil Dipstick Anda!</p>
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

        {/* Results overview */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-lg font-medium mb-3 text-gray-800">
            Hasil Dipstick Anda
          </h2>

          <div className="flex items-start mb-3">
            <div className="h-8 w-6 bg-red-600 mr-2 flex-shrink-0 rounded-lg"></div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                {resultsData.risk}
              </p>
              <p className="text-xs text-gray-500">{resultsData.date}</p>
            </div>
          </div>

          {/* Detailed results */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2 text-gray-800">
              Detail Hasil
            </h3>

            <div className="space-y-2">
              {resultsData.parameters.map((param) => (
                <div key={param.id}>
                  {/* Parameter display */}
                  <div
                    className={`bg-gray-100 p-3 rounded ${param.isAbnormal ? "border-l-4 border-red-500" : ""}`}
                    onClick={() =>
                      param.isAbnormal && toggleParameterDetails(param.id)
                    }
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-800">
                          <span className="font-bold">{param.name}:</span>
                          <span className="ml-1">{param.value}</span>
                        </p>
                      </div>
                      {param.isAbnormal && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Expandable details for abnormal values */}
                  {param.isAbnormal && expandedParam === param.id && (
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-b-lg mt-0">
                      <p className="text-xs">{param.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Implication explanation */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h3 className="text-sm font-bold mb-2 text-gray-800">
            Penjelasan Implikasi
          </h3>
          <p className="text-xs text-gray-700">{resultsData.implication}</p>
        </div>

        {/* Telemedicine section */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h3 className="text-sm font-bold mb-2 text-gray-800">
            Telemedicine
          </h3>
          <p className="text-xs text-gray-700 mb-3">
            Konsultasikan hasil Anda dengan dokter melalui chat
          </p>

          <button
            onClick={handleScheduleConsultation}
            className="w-full bg-green-500 text-white py-2 rounded-md font-medium text-sm"
          >
            Jadwalkan Konsultasi
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleBack}
            className="flex-1 border border-gray-300 bg-white text-gray-700 py-2 rounded-md font-medium text-sm"
          >
            Kembali
          </button>

          <button
            onClick={handleDownload}
            className="flex-1 bg-red-400 text-white py-2 rounded-md font-medium text-sm"
          >
            Simpan ke Riwayat
          </button>
        </div>
      </div>
    </main>
  );
}
