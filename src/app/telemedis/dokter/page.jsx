// app/telemedis/dokter/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TelemedisDokter() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAvailability, setFilterAvailability] =
    useState("Available Today");
  const [filterConsultType, setFilterConsultType] = useState("Via Text");

  // Mock doctor data
  const doctors = [
    {
      id: 1,
      name: "dr. Budi Santoso, Sp.PD-KGH",
      specialty: "Spesialis Ginjal Hipertensi",
      hospital: "RS Premier Jakarta",
      available: true,
      rating: 4.8,
      image: "/doctor-1.png", // Replace with actual image path
    },
    {
      id: 2,
      name: "dr. Eka Gunadi, Sp.PD-KGH",
      specialty: "Spesialis Ginjal Hipertensi",
      hospital: "RS Mitra Keluarga",
      available: true,
      rating: 4.8,
      image: "/doctor-2.png", // Replace with actual image path
    },
    {
      id: 3,
      name: "dr. Budi Sarwidi, Sp.PD-KGH",
      specialty: "Spesialis Ginjal Hipertensi",
      hospital: "RS Hermina",
      available: true,
      rating: 4.8,
      image: "/doctor-3.png", // Replace with actual image path
    },
    {
      id: 4,
      name: "dr. Budi Sulaiman, Sp.PD-KGH",
      specialty: "Spesialis Ginjal Hipertensi",
      hospital: "RS Pondok Indah",
      available: true,
      rating: 4.8,
      image: "/doctor-4.png", // Replace with actual image path
    },
    {
      id: 5,
      name: "dr. Budi Sukoyo, Sp.PD-KGH",
      specialty: "Spesialis Ginjal Hipertensi",
      hospital: "RS Pasar Minggu",
      available: true,
      rating: 4.8,
      image: "/doctor-5.png", // Replace with actual image path
    },
  ];

  const handleDoctorSelect = (doctorId) => {
    router.push(`/telemedis/dokter/${doctorId}`);
  };

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto p-4 px-8">
        {/* Header */}
        <div className="flex items-center -mt-4">
          <Link href="/telemedis" className="flex items-center text-gray-600">
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
            <h1 className="text-sm font-bold text-gray-900">Dokter</h1>
            <p className="text-xs text-gray-500">Konsultasi Hasil</p>
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

        {/* Search Bar */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="pl-10 pr-4 py-2 w-full bg-white text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex space-x-2 -mb-8 overflow-x-auto pb-2">
          <div className="relative">
            <button className="flex items-center px-3 py-1.5 bg-red-400 text-white rounded-lg text-sm">
              <span>{filterAvailability}</span>
              <svg
                className="ml-1 h-4 w-4"
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
            </button>
          </div>

          <div className="relative">
            <button className="flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700">
              <span>In-Person</span>
              <svg
                className="ml-1 h-4 w-4"
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
            </button>
          </div>

          <div className="relative">
            <button className="flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700">
              <span>{filterConsultType}</span>
              <svg
                className="ml-1 h-4 w-4"
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
            </button>
          </div>
        </div>

        {/* Available Doctors Header */}
        <h2 className="text-lg font-medium mb-4">Dokter Tersedia</h2>

        {/* Doctor List */}
        <div className="space-y-3 mb-6">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-sm p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-3">
                    <Image
                      src="/agus.png"
                      alt={doctor.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800">
                      {doctor.name}
                    </h3>
                    <p className="text-xs text-gray-500">{doctor.specialty}</p>
                    <p className="text-xs text-gray-500">{doctor.hospital}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center mr-3">
                    <svg
                      className="h-4 w-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-bold text-gray-800 ml-1">
                      {doctor.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex mt-2 justify-between items-center">
                <p className="text-xs text-green-500 font-medium">Tersedia</p>
                <button
                  className="px-3 py-1 bg-red-400 text-white rounded-md text-xs font-medium"
                  onClick={() => handleDoctorSelect(doctor.id)}
                >
                  Jadwalkan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
