// app/telemedis/faskes/[id]/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TelemedisFaskesDetail({ params }) {
  const router = useRouter();
  const facilityId = params?.id;

  // Mock healthcare facility data
  const facility = {
    id: facilityId,
    name: "RS Pondok Indah",
    address: "Jl. Metro Pondok Indah, Jakarta Selatan",
    distance: "3.8 Km",
    image: "/hospital-pondokindah.jpg",
    mapImage: "/map-pondokindah.jpg",
    services: ["Dialisis", "Nefrologi", "Urologi"],
    facilities: ["Laboratorium", "Radiologi", "ICU", "Apotek"],
    contacts: [
      { type: "phone", value: "(021) 765-7525" },
      { type: "email", value: "info@rspondokindah.co.id" },
      { type: "hours", value: "Senin - Minggu, 24 Jam" },
    ],
  };

  const handleCallFacility = () => {
    window.location.href = `tel:${facility.contacts[0].value}`;
  };

  const handleVisitWebsite = () => {
    window.open("https://www.rspondokindah.co.id", "_blank");
  };

  // Update the header part to match the mockup
  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto">
        {/* Header with banner image - no padding */}
        {/* Header with banner image - adjusted to be lower */}
        <div className="relative">
          {/* Header text now positioned as a separate element above the image */}
          <div className="bg-white py-2 px-4 flex items-center">
            <Link
              href="/telemedis/faskes"
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
            <div className="flex-1 text-center">
              <h1 className="text-sm font-bold text-gray-900">Detail Faskes</h1>
              <p className="text-xs text-gray-500">{facility.name}</p>
            </div>
            <div className="w-10">
              <Image
                src="/logo-vegetables.png"
                alt="Gigin dan Jajal"
                width={40}
                height={40}
              />
            </div>
          </div>

          {/* Banner image now positioned below the header */}
          <div className="w-full h-48 relative">
            <Image
              src="/rs-overview.png"
              alt={facility.name}
              fill
              className="object-cover"
            />

            {/* Distance badge */}
            <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-xs text-gray-800 font-bold">{facility.distance}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 bg-white px-8">
          {/* Facility name and address */}
          <h1 className="text-lg font-semibold text-gray-800">
            {facility.name}
          </h1>
          <p className="text-sm text-gray-500 mb-4">{facility.address}</p>

          {/* Services section in its own white card */}
          <div className="bg-white rounded mb-4">
            <h2 className="text-sm font-bold mb-2 text-gray-800">Layanan</h2>
            <div className="flex flex-wrap gap-2">
              {facility.services.map((service, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-xs bg-red-100 text-red-600 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Facilities section in its own white card */}
          <div className="bg-white rounded mb-4">
            <h2 className="text-sm font-bold mb-2 text-gray-800">Fasilitas</h2>
            <div className="flex flex-wrap gap-2">
              {facility.facilities.map((item, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Contact section */}
          <div className="mb-4">
            <h2 className="text-sm font-bold mb-2 text-gray-800">Kontak</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm text-gray-600">{facility.contacts[0].value}</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-gray-600">{facility.contacts[1].value}</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-gray-600">{facility.contacts[2].value}</span>
              </li>
            </ul>
          </div>

          {/* Address section with map */}
          <div className="mb-6">
            <h2 className="text-sm font-bold mb-2 text-gray-800">Alamat</h2>
            <p className="text-sm text-gray-500 mb-2">{facility.address}</p>
            <div className="w-full h-32 relative rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/maps.png"
                alt="Map location"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-2 mb-6">
            <button
              onClick={handleCallFacility}
              className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 rounded-md font-medium text-sm"
            >
              Telepon
            </button>

            <button
              onClick={handleVisitWebsite}
              className="flex-1 bg-red-500 text-white py-3 rounded-md font-medium text-sm"
            >
              Website
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
