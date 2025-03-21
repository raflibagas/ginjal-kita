// app/telemedis/dokter/[id]/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TelemedisDokterDetail({ params }) {
  const router = useRouter();
  const doctorId = params?.id;
  const [selectedDate, setSelectedDate] = useState("22nd Wed, June 2022");
  const [selectedTime, setSelectedTime] = useState("9:41 AM");
  const [note, setNote] = useState("");

  // Mock doctor data
  const doctor = {
    id: doctorId,
    name: "dr. Budi Santoso, Sp.PD-KGH",
    specialty: "Spesialis Ginjal Hipertensi",
    hospital: "RS Premier Jakarta",
    available: true,
    rating: 4.8,
    image: "/doctor-1.png", // Replace with actual image path
    services: [
      {
        id: 1,
        name: "Konsultasi Hasil CekRisiko - Konsultasi Via Chat",
        price: "Rp 150.000",
      },
    ],
  };

  const handleScheduleConsultation = () => {
    // In a real app, this would send the consultation request
    router.push("/telemedis/dokter/chat");
  };

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto p-4 px-8">
        {/* Header */}
        <div className="flex items-center -mt-4">
          <Link
            href="/telemedis/dokter"
            className="flex items-center text-gray-600"
          >
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

        {/* Consultation scheduling section */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-lg font-medium mb-4 text-gray-800">Jadwalkan Konsultasi</h2>

          {/* Doctor info */}
          <div className="flex items-center mb-4">
            <div className="h-14 w-14 rounded-full overflow-hidden bg-gray-200 mr-3">
              <Image
                src="/agus.png"
                alt={doctor.name}
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="text-sm font-medium mr-2 text-gray-800">{doctor.name}</h3>
                <div className="flex items-center">
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-bold ml-1 text-gray-800">
                    {doctor.rating}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500">{doctor.specialty}</p>
              <p className="text-xs text-gray-500">{doctor.hospital}</p>
            </div>
          </div>

          {/* Service selection */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2 text-gray-800 uppercase">
              LAYANAN
            </h3>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-800">{doctor.services[0].name}</p>
            </div>
          </div>

          {/* Date and time selection */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2 text-gray-800 uppercase">
              WAKTU & TANGGAL
            </h3>
            <div className="flex justify-between bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-800">{selectedDate}</p>
              <p className="text-sm font-medium text-gray-800">{selectedTime}</p>
            </div>
          </div>

          {/* Notes section */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2 text-gray-800 uppercase">
              CATATAN
            </h3>
            <textarea
              className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Keluhan Anda.."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>

          {/* Attachment section */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2 text-gray-800 uppercase">
              HASIL CekRisiko
            </h3>
            <div className="flex items-center text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="text-sm">Tambahkan Lampiran</span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={handleScheduleConsultation}
          className="w-full bg-red-500 text-white rounded-lg py-3 font-medium"
        >
          Pesan
        </button>
      </div>
    </main>
  );
}
