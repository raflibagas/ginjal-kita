"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function DipstickInfoPage() {
  const router = useRouter();
  const pathname = usePathname();

  const isActiveTab = (tab) => {
    return tab === "information"
      ? pathname === "/diptrack/info"
      : pathname === "/diptrack/info/purchase";
  };

  const navigateToTab = (tab) => {
    if (tab === "purchase") {
      router.push("/diptrack/info/purchase");
    } else {
      router.push("/diptrack/info");
    }
  };

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
              onClick={() => navigateToTab("information")}
              className={`flex-1 py-2 text-center text-sm font-medium ${
                isActiveTab("information")
                  ? "text-red-400 border-b-2 border-red-400"
                  : "text-gray-500"
              }`}
            >
              Informasi
            </button>
            <button
              onClick={() => navigateToTab("purchase")}
              className={`flex-1 py-2 text-center text-sm font-medium ${
                isActiveTab("purchase")
                  ? "text-red-400 border-b-2 border-red-400"
                  : "text-gray-500"
              }`}
            >
              Pembelian
            </button>
          </div>
        </div>

        {/* Informasi Tab Content */}
        {isActiveTab("information") && (
          <div className="px-4 pb-8 space-y-4">
            {/* Top Image */}
            <div className="rounded-xl overflow-hidden mb-2">
              <Image
                src="/dipstick.png"
                alt="Gambaran strip dan tabel warna"
                width={500}
                height={250}
                className="rounded-md"
              />
            </div>

            {/* What is Dipstick */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                Apa itu Urinalysis Strip (Dipstick)?
              </h2>
              <p className="text-sm text-gray-700">
                <span className="italic font-semibold">
                  Dipstick
                </span>{" "}
                adalah strip plastik  dengan beberapa pad kimia untuk
                mendeteksi zat tertentu dalam urin, seperti protein, leukosit,
                pH, dan glukosa. Ketika strip dicelupkan ke dalam urin, pad akan
                berubah warna sesuai kandungan urin. Ini membantu deteksi awal
                masalah ginjal.
              </p>
            </div>

            {/* Benefit */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-base font-bold text-gray-800 mb-2">
                Kenapa Perlu Tes di Rumah?
              </h2>
              <p className="text-sm text-gray-700">
                Dengan{" "}
                <span className="italic font-semibold">
                  dipstick
                </span>
                , Anda bisa cek kesehatan ginjal secara rutin di rumah tanpa
                harus ke faskes. Ini menghemat waktu dan biaya, serta membantu
                deteksi dini agar perawatan bisa dilakukan lebih cepat.
              </p>
            </div>

            {/* Step 1 */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-base font-bold mb-1 text-gray-800">
                1. Celupkan Strip (Immerse)
              </h2>
              <p className="text-sm text-gray-700 mb-1">
                Celupkan strip ke urin, lalu angkat dan usap ke tepi wadah agar
                tidak berlebih.
              </p>
              <p className="text-xs italic text-gray-500 mb-2">
                Gunakan urin segar dalam wadah bersih dan kering.
              </p>
              <Image
                src="/step1.gif"
                alt="Step 1: Celupkan strip"
                width={500}
                height={250}
                className="rounded-md"
              />
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-base font-bold mb-1 text-gray-800">
                2. Tunggu Waktu
              </h2>
              <p className="text-sm text-gray-700 mb-2">
                Mulai timer sesuai petunjuk (30–120 detik tergantung parameter).
              </p>
              <Image
                src="/step2.gif"
                alt="Step 2: Tunggu waktu"
                width={500}
                height={250}
                className="rounded-md"
              />
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-base font-bold mb-1 text-gray-800">
                3. Bandingkan Warna (Compare)
              </h2>
              <p className="text-sm text-gray-700 mb-1">
                Bandingkan pad strip dengan tabel warna di kemasan untuk membaca
                hasil.
              </p>
              <p className="text-xs italic text-gray-500 mb-2">
                Baca hasil sesegera mungkin, jangan lebih dari 2 menit.
              </p>
              <Image
                src="/step3.gif"
                alt="Step 3: Bandingkan hasil"
                width={500}
                height={250}
                className="rounded-md"
              />
            </div>

            {/* Color Chart */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-base font-bold mb-2 text-gray-800">
                Tabel Warna Hasil Tes
              </h2>
              <p className="text-sm text-gray-700 mb-2">
                Gunakan tabel warna asli dari kemasan untuk membandingkan hasil.
                Tiap warna menunjukkan tingkat zat tertentu, misalnya:
              </p>
              <Image
                src="/compare.png"
                alt="Tabel warna urinalisis"
                width={500}
                height={250}
                className="rounded-md"
              />
            </div>

            {/* Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-xs text-gray-500 italic">
                <span className="font-medium">Catatan:</span> Hasil tes dipstick
                adalah indikasi awal, bukan diagnosis pasti. Selalu
                konsultasikan dengan tenaga medis jika hasil tidak normal.
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
