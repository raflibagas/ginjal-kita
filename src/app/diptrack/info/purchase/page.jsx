// app/telemedis/dipstick/purchase/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TelemedisDipstickPurchase() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("purchase");

  const navigateToTab = (tab) => {
    if (tab === "information") {
      router.push("/diptrack/info");
    } else {
      setActiveTab(tab);
    }
  };

  const handleBuyPackage = (packageId) => {
    router.push(`/diptrack/info/payment?package=${packageId}`);
  };

  // Mock packages data
  const packages = [
    {
      id: "basic",
      name: "Paket Basic (1 Strip)",
      description: "Untuk penggunaan 1 bulan",
      price: 20000,
      image: "/package.png",
    },
    {
      id: "double",
      name: "Paket Double (2 Strip)",
      description: "Untuk penggunaan 2 bulan",
      price: 35000,
      image: "/package.png",
    },
    {
      id: "combo",
      name: "Paket Combo (6 Strip)",
      description: "Untuk penggunaan 6 bulan",
      discount: "Hemat Rp 10.000",
      price: 95000,
      image: "/package.png",
    },
    {
      id: "premium",
      name: "Paket Premium (12 Strip)",
      description: "Untuk penggunaan 12 bulan",
      discount: "Hemat Rp 45.000",
      price: 180000,
      image: "/package.png",
    },
  ];

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto px-4">
        {/* Header */}
        <div className="p-4">
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
              <h1 className="text-sm font-bold text-gray-900">Dipstick</h1>
              <p className="text-xs text-gray-500">Informasi & Pembelian</p>
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

          {/* Tabs */}
          <div className="flex border-b border-gray-200 -mt-2">
            <button
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeTab === "information"
                  ? "text-red-400 border-b-2 border-red-400"
                  : "text-gray-500"
              }`}
              onClick={() => navigateToTab("information")}
            >
              Informasi
            </button>
            <button
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeTab === "purchase"
                  ? "text-red-400 border-b-2 border-red-400"
                  : "text-gray-500"
              }`}
              onClick={() => navigateToTab("purchase")}
            >
              Pembelian
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-8 -mt-2">
          <div className="bg-white rounded-lg p-4 mb-4 mt-4 shadow-sm">
            <h2 className="text-lg font-bold mb-4 text-gray-800">
              Paket Dipstick
            </h2>

            <div className="space-y-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-lg overflow-hidden border border-gray-200"
                >
                  <div className="p-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden mr-3">
                        <Image
                          src={pkg.image}
                          alt={pkg.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-800">
                          {pkg.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {pkg.description}
                        </p>
                        {pkg.discount && (
                          <p className="text-xs text-red-500">{pkg.discount}</p>
                        )}
                      </div>
                      <div className="text-sm font-bold text-gray-800">
                        Rp. {pkg.price.toLocaleString()}
                      </div>
                    </div>

                    <button
                      className="w-full bg-red-500 text-white py-2 rounded-md text-sm font-medium mt-3"
                      onClick={() => handleBuyPackage(pkg.id)}
                    >
                      Beli
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Faskes purchase option */}
          <div className="bg-white rounded-lg p-4 mb-4 mt-4 shadow-sm">
            <div>
              <h2 className="text-lg font-bold mb-2 text-gray-800">
                Pembelian di Faskes
              </h2>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                <div className="flex">
                  <div className="text-blue-500 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-blue-800">
                    Anda juga dapat membeli Dipstick secara langsung di faskes
                    terdekat. Pembelian langsung di Faskes tidak dikenakan biaya
                    pengiriman.
                  </p>
                </div>
              </div>

              <Link
                href="/telemedis/faskes"
                className="block w-full border border-red-500 text-red-500 text-center py-2 rounded-md text-sm font-medium"
              >
                Cari Faskes Terdekat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
