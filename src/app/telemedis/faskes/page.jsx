// app/telemedis/faskes/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TelemedisFaskes() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock healthcare facilities data
  const facilities = [
    {
      id: 1,
      name: "RS Premier Jakarta",
      address: "Jl. Mega Kuningan Barat, Jakarta Selatan",
      distance: "2.3 Km",
      image: "/hospital-premier.jpg",
      services: ["Dialisis", "Nefrologi", "Urologi"],
    },
    {
      id: 2,
      name: "RSUD Pasar Minggu",
      address: "Jl. TB Simatupang, Jakarta Selatan",
      distance: "4.5 Km",
      image: "/hospital-pasarminggu.jpg",
      services: ["Dialisis", "Urologi"],
    },
    {
      id: 3,
      name: "RS Pondok Indah",
      address: "Jl. Metro Pondok Indah, Jakarta Selatan",
      distance: "5.8 Km",
      image: "/hospital-pondokindah.jpg",
      services: ["Dialisis", "Nefrologi", "Urologi"],
    },
  ];

  const handleFacilitySelect = (facilityId) => {
    router.push(`/telemedis/faskes/${facilityId}`);
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
            <h1 className="text-sm font-bold text-gray-900">Faskes</h1>
            <p className="text-xs text-gray-500">Cari Faskes Terdekat</p>
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
        <div className="relative mb-2">
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
            className="pl-10 pr-4 py-2 w-full bg-white border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Facilities List */}
        <h2 className="text-lg font-bold text-gray-800 mb-2">Faskes Terdekat</h2>

        <div className="space-y-4 mb-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-lg shadow-sm p-4"
            >
              <div className="flex">
                <div className="mr-3">
                  <div className="h-14 w-14 rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src="/rs.png"
                      alt={facility.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-semibold text-gray-800">{facility.name}</h3>
                    <span className="text-xs text-blue-500">
                      {facility.distance}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">
                    {facility.address}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {facility.services.map((service, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-0.5 text-xs bg-gray-100 rounded-md text-gray-600"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <button
                  onClick={() => handleFacilitySelect(facility.id)}
                  className="px-3 py-1 bg-red-400 text-white rounded-md text-xs font-medium"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
