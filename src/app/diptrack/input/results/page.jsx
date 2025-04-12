// app/diptrack/results/page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DiptrackResults() {
  const [expandedParam, setExpandedParam] = useState(null);
  const [resultData, setResultData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("diptrackResult");
    if (saved) {
      setResultData(JSON.parse(saved));
    }
  }, []);

  const toggleParameterDetails = (paramId) => {
    setExpandedParam(expandedParam === paramId ? null : paramId);
  };

  const handleScheduleConsultation = () => {
    router.push("/telemedis");
  };

  const handleBack = () => {
    router.push("/diptrack");
  };

  const handleDownload = () => {
    alert("Mengunduh hasil...");
  };

  const getImplicationMessage = (risk) => {
    if (risk === "high") {
      return "Hasil menunjukkan risiko tinggi terhadap penyakit ginjal. Disarankan segera konsultasi ke dokter untuk evaluasi lebih lanjut.";
    } else {
      return "Tidak ditemukan indikasi signifikan. Namun, tetap pantau secara berkala dan pertahankan gaya hidup sehat.";
    }
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
              fill="currentColor"
              viewBox="0 0 20 20"
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

        {/* Overview */}
        {resultData && (
          <>
            {/* Summary Section */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Hasil Dipstick Anda
              </h2>
              <div className="flex items-start mb-3">
                <div
                  className={`h-12 w-3 rounded-full mr-3  ${
                    resultData?.risk === "high" ? "bg-red-600" : "bg-green-500"
                  }`}
                ></div>

                <div>
                  <p
                    className={`text-sm font-semibold mb-2 ${
                      resultData?.risk === "high"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {/* Risk Level:{" "} */}
                    {resultData?.risk === "high"
                      ? "Siaga Bareng Jajal"
                      : "Bugar Bareng Gigin"}
                  </p>
                  <p className="text-sm text-gray-800 mt-0.5">
                    {resultData?.date || "Tanggal tidak tersedia"}
                  </p>
                </div>
              </div>

              {/* Display GFR and ACR */}
              <div className="mb-4 text-sm text-gray-800 space-y-1">
                <p>
                  <strong>eGFR:</strong> {resultData?.gfr} mL/min/1.73m²{" "}
                  <span className="text-sm text-gray-500">(Normal: ≥ 45)</span>
                </p>
                <p>
                  <strong>ACR:</strong> {resultData?.acr} mg/g{" "}
                  <span className="text-sm text-gray-500">
                    (Normal: ≤ 300)
                  </span>
                </p>
              </div>
            </div>

            {/* Dynamic Parameter List */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h3 className="mb-2 text-base font-bold text-gray-800 -mt-1">
                Detail Hasil
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {resultData?.parameters &&
                  resultData.parameters.map((param) => (
                    <div
                      key={param.id}
                      className="bg-gray-100 p-3 rounded shadow-sm text-center"
                    >
                      <p className="text-xs font-medium text-gray-500">
                        {param.name}
                      </p>
                      <p className="text-sm font-bold text-gray-800 mt-1">
                        {param.value}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Implication Section */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex justify-between items-center">
                <h3 className="mb-2 text-base font-bold text-gray-800 -mt-1">
                  Penjelasan Implikasi
                </h3>
                {/* <Image
                  src="/logo-vegetables.png"
                  alt="Gigin dan Jajal"
                  width={60}
                  height={60}
                /> */}
              </div>
              <p className="text-sm text-gray-800">
                {getImplicationMessage(resultData.risk)}
              </p>
            </div>
          </>
        )}

        {/* Telemedicine */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h3 className="mb-2 text-base font-bold text-gray-800 -mt-1">
            Telemedicine
          </h3>
          <p className="text-sm text-gray-800 mb-3">
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
