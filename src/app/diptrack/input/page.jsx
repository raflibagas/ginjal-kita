// app/diptrack/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DiptrackInput() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("LEU");
  const [selectedColor, setSelectedColor] = useState({
    LEU: null,
    NIT: null,
    URO: null,
    PRO: null,
    pH: null,
    BLO: null,
    SG: null,
    KET: null,
    BIL: null,
    GLU: null,
  });
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  // Parameters and their color choices based on the reference images
  const parameters = [
    { id: "LEU", name: "LEU", fullName: "Leukosit", waitTime: "2 menit" },
    { id: "NIT", name: "NIT", fullName: "Nitrit", waitTime: "60 detik" },
    { id: "URO", name: "URO", fullName: "Urobilinogen", waitTime: "60 detik" },
    { id: "PRO", name: "PRO", fullName: "Protein", waitTime: "60 detik" },
    { id: "pH", name: "pH", fullName: "pH", waitTime: "60 detik" },
    { id: "BLO", name: "BLO", fullName: "Darah", waitTime: "60 detik" },
    { id: "SG", name: "SG", fullName: "Berat Jenis", waitTime: "45 detik" },
    { id: "KET", name: "KET", fullName: "Keton", waitTime: "40 detik" },
    { id: "BIL", name: "BIL", fullName: "Bilirubin", waitTime: "30 detik" },
    { id: "GLU", name: "GLU", fullName: "Glukosa", waitTime: "30 detik" },
  ];

  // Color options for each parameter
  const colorOptions = {
    LEU: [
      { value: "negative", color: "#f5f7c4", label: "Negatif" },
      { value: "trace", color: "#ebe7c3", label: "Trace" },
      { value: "small", color: "#d5d4ad", label: "Small +" },
      { value: "moderate", color: "#b99fb0", label: "Moderate ++" },
      { value: "large", color: "#806285", label: "Large +++" },
    ],
    NIT: [
      { value: "negative", color: "#f8f9d0", label: "Negatif" },
      { value: "positive", color: "#ffd9d6", label: "Positif" },
    ],
    URO: [
      { value: "normal", color: "#ffc9a8", label: "Normal 0.2" },
      { value: "1", color: "#ffb4a3", label: "1" },
      { value: "2", color: "#ff979c", label: "2" },
      { value: "4", color: "#ff7a98", label: "4" },
      { value: "8", color: "#ff5c95", label: "8" },
    ],
    PRO: [
      { value: "negative", color: "#f5f7c4", label: "Negatif" },
      { value: "trace", color: "#dff088", label: "Trace" },
      { value: "30", color: "#a4cf7a", label: "30 mg/dL +" },
      { value: "100", color: "#73c267", label: "100 mg/dL ++" },
      { value: "300", color: "#32a877", label: "300 mg/dL +++" },
      { value: "2000", color: "#008e82", label: "2000 mg/dL ++++" },
    ],
    pH: [
      { value: "5.0", color: "#ffa27a", label: "5.0" },
      { value: "6.0", color: "#ffba6a", label: "6.0" },
      { value: "6.5", color: "#f6d255", label: "6.5" },
      { value: "7.0", color: "#d6e04b", label: "7.0" },
      { value: "7.5", color: "#a6d85d", label: "7.5" },
      { value: "8.0", color: "#5bbd8a", label: "8.0" },
      { value: "8.5", color: "#28aec4", label: "8.5" },
    ],
    BLO: [
      { value: "negative", color: "#f6d87c", label: "Negatif" },
      {
        value: "non-hemolyzed-trace",
        color: "#f0ce60",
        label: "Non-hemolyzed Trace",
      },
      {
        value: "non-hemolyzed-moderate",
        color: "#e7c44c",
        label: "Non-hemolyzed Moderate",
      },
      { value: "hemolyzed-trace", color: "#cdcf6e", label: "Hemolyzed Trace" },
      { value: "small", color: "#b4cb8e", label: "Small +" },
      { value: "moderate", color: "#94c7a4", label: "Moderate ++" },
      { value: "large", color: "#7d937e", label: "Large +++" },
    ],
    SG: [
      { value: "1.000", color: "#005a55", label: "1.000" },
      { value: "1.005", color: "#067b68", label: "1.005" },
      { value: "1.010", color: "#2c9e73", label: "1.010" },
      { value: "1.015", color: "#7ab868", label: "1.015" },
      { value: "1.020", color: "#b1cc60", label: "1.020" },
      { value: "1.025", color: "#d5ce56", label: "1.025" },
      { value: "1.030", color: "#e8c456", label: "1.030" },
    ],
    KET: [
      { value: "negative", color: "#e8c8b3", label: "Negatif" },
      { value: "5", color: "#f7b9b2", label: "Trace 5 mg/dL" },
      { value: "15", color: "#f799a3", label: "Small 15" },
      { value: "40", color: "#e97992", label: "Moderate 40" },
      { value: "80", color: "#ce5a7f", label: "Large 80" },
      { value: "160", color: "#a3456e", label: "Large 160" },
    ],
    BIL: [
      { value: "negative", color: "#f9f7c9", label: "Negatif" },
      { value: "small", color: "#ebe7c3", label: "Small +" },
      { value: "moderate", color: "#d5d4ad", label: "Moderate ++" },
      { value: "large", color: "#bfba8e", label: "Large +++" },
    ],
    GLU: [
      { value: "negative", color: "#d6f2d2", label: "Negatif" },
      { value: "100", color: "#bada95", label: "1/10 (tr.) 100 mg/dL" },
      { value: "250", color: "#98c267", label: "1/4 250" },
      { value: "500", color: "#7cb457", label: "1/2 500" },
      { value: "1000", color: "#5c8f36", label: "1 1000" },
      { value: "2000", color: "#754d26", label: ">2 >2000" },
    ],
  };

  const handleColorSelect = (paramId, colorValue) => {
    setSelectedColor({
      ...selectedColor,
      [paramId]: colorValue,
    });
  };

  const handleSave = () => {
    // Save the data and navigate to results page
    router.push("/diptrack/results");
  };

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto p-4 px-8">
        {/* Header */}
        <div className="flex items-center -mt-4">
          <Link href="/diptrack" className="flex items-center text-gray-600">
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

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-lg font-bold text-gray-800">
            Masukkan Hasil Dipstick
          </h2>

          {/* Parameter tabs */}
          <div className="flex overflow-x-auto pb-2 mb-4 border-b">
            {parameters.map((param) => (
              <button
                key={param.id}
                className={`px-3 py-2 text-sm font-medium mr-2 whitespace-nowrap ${
                  activeTab === param.id
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(param.id)}
              >
                {param.name}
              </button>
            ))}
          </div>

          {/* Parameter information */}
          <div className="mb-4">
            {parameters.map(
              (param) =>
                param.id === activeTab && (
                  <div key={param.id}>
                    <p className="text-sm font-medium text-gray-800">
                      {param.fullName}
                    </p>
                    <p className="text-xs text-gray-500">
                      Waktu baca: {param.waitTime}
                    </p>
                  </div>
                )
            )}
          </div>

          {/* Color selection */}
          <div className="mb-2">
            <p className="text-sm mb-2 text-gray-800">
              Pilih hasil yang sesuai:
            </p>
            <div className="grid grid-cols-3 gap-2">
              {activeTab &&
                colorOptions[activeTab] &&
                colorOptions[activeTab].map((option, index) => (
                  <button
                    key={index}
                    className={` overflow-hidden border-2 ${
                      selectedColor[activeTab] === option.value
                        ? "border-red-500"
                        : "border-transparent"
                    }`}
                    onClick={() => handleColorSelect(activeTab, option.value)}
                  >
                    <div
                      className="h-10 w-full rounded-md"
                      style={{ backgroundColor: option.color }}
                    ></div>
                    <div className="bg-white p-1 text-xs text-center text-gray-800">
                      {option.label}
                    </div>
                  </button>
                ))}
            </div>
          </div>

          {/* Selected results summary */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-800">
              Hasil Terpilih
            </h3>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {Object.entries(selectedColor)
                .filter(([_, value]) => value !== null)
                .map(([paramId, value]) => {
                  const param = parameters.find((p) => p.id === paramId);
                  const colorOption = colorOptions[paramId].find(
                    (opt) => opt.value === value
                  );
                  return (
                    <div
                      key={paramId}
                      className="bg-gray-50 p-2 rounded text-xs"
                    >
                      <div
                        className="h-4 w-full mb-1 rounded"
                        style={{
                          backgroundColor: colorOption
                            ? colorOption.color
                            : "#ffffff",
                        }}
                      ></div>
                      <p className="text-gray-800 text-center">
                        {param?.name}: {colorOption?.label || "N/A"}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Date and notes */}
          <div className="mb-4 -mt-2">
            <h3 className="text-sm font-medium mb-2 text-gray-800">
              Tanggal Pengujian
            </h3>
            <input
              type="date"
              className="w-full p-2 border border-gray-400 rounded-md mb-4 text-gray-800"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <h3 className="text-sm font-medium mb-2 text-gray-800">
              Catatan Tambahan
            </h3>
            <textarea
              className="w-full p-2 border border-gray-400 rounded-md h-20 resize-none text-gray-800"
              placeholder="Masukkan catatan Anda..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          className="w-full bg-red-500 text-white py-3 rounded-md font-medium"
        >
          Simpan Hasil
        </button>

        {/* Previous results */}
        <div className="mt-4 bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-medium mb-4 text-gray-800">
            Hasil Sebelumnya
          </h2>

          <div className="border-l-4 border-yellow-400 pl-2 mb-3 flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-800">
                Moderately Increased Risk
              </h3>
              <p className="text-xs text-gray-500">12 Feb 2024</p>
            </div>
            <button className="text-blue-500 text-xs">Detail</button>
          </div>

          <div className="border-l-4 border-green-500 pl-2 flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-800">Low Risk</h3>
              <p className="text-xs text-gray-500">10 Feb 2023</p>
            </div>
            <button className="text-blue-500 text-xs">Detail</button>
          </div>
        </div>
      </div>
    </main>
  );
}
