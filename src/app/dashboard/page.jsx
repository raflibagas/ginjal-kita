// app/dashboard/page.jsx
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-lg mx-auto bg-red-50 min-h-screen px-8 py-6">
        {/* Header with avatar and product name */}
        <header className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex-1"></div> {/* Left spacing */}
            <div className="flex items-center flex-1 justify-center">
              <h2 className="text-xl text-gray-800">Ginjal</h2>
              <h2 className="text-xl font-semibold text-red-500">Kita</h2>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="w-10 h-10 rounded-full bg-red-500 overflow-hidden">
                <Image
                  src="/agus.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border-b-2 border-opacity-5 border-gray-200 mt-4 mb-4"></div>

          <h1 className="text-lg font-medium text-gray-800">
            Yuk Deteksi dan Cegah PGK Sejak Dini
          </h1>
        </header>

        {/* Main Features */}
        <section className="grid grid-cols-2 gap-4 mb-8">
          {/* Risiko */}
          <Link
            href="/risk-quiz"
            className="bg-red-300 p-5 rounded-xl shadow-sm"
          >
            <div className="bg-white h-10 w-10 rounded-full mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-red-500"
              >
                <path d="M12 2L4 8v8l8 6 8-6V8L12 2z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-white">Risiko</h2>
              <p className="text-sm text-white">Cek Risiko PGK</p>
            </div>
          </Link>

          {/* DipTrack */}
          <Link
            href="/diptrack"
            className="bg-blue-400 p-5 rounded-xl shadow-sm"
          >
            <div className="bg-white h-10 w-10 rounded-full mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-blue-500"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-white">DipTrack</h2>
              <p className="text-sm text-white">Catat Hasil</p>
            </div>
          </Link>

          {/* Telemedicine */}
          <Link
            href="/telemedis"
            className="bg-blue-400 p-5 rounded-xl shadow-sm"
          >
            <div className="bg-white h-10 w-10 rounded-full mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-blue-500"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-white">Telemedicine</h2>
              <p className="text-sm text-white">Konsultasi & Faskes</p>
            </div>
          </Link>

          {/* KidneyQuest */}
          <Link
            href="/kidneyquest"
            className="bg-red-300 p-5 rounded-xl shadow-sm"
          >
            <div className="bg-white h-10 w-10 rounded-full mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-red-500"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-white">KidneyQuest</h2>
              <p className="text-sm text-white">Menjaga Ginjal Sehat</p>
            </div>
          </Link>
        </section>

        {/* Articles section */}
        <section className="mt-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 -mt-4">
            Artikel Seputaran Ginjal
          </h2>

          {/* Article items */}
          <div className="space-y-4">
            {/* Article 1 */}
            <div className="flex space-x-3">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/artikel.png"
                  alt="Yoga"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-base font-medium text-gray-800">
                  Yoga Singkat, Ginjal Bebas Penat
                </h3>
                <p className="text-xs text-gray-500">12 Jun 2025</p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex space-x-3">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/buah.png"
                  alt="Buah-buahan"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-base font-medium text-gray-800">
                  Buah-Buahan Segar: Penolong Alami Kesehatan Ginjal
                </h3>
                <p className="text-xs text-gray-500">11 Jun 2025</p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="flex space-x-3">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/sepeda.png"
                  alt="Bersepeda"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-base font-medium text-gray-800">
                  Cara Seru Kurangi Risiko PGK dengan Bersepeda
                </h3>
                <p className="text-xs text-gray-500">12 Jun 2025</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
