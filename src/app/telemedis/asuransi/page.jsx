// app/telemedis/asuransi/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TelemedisFAQ() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Mock FAQ data
  const faqItems = [
    {
      id: 1,
      question: "Apakah BPJS menanggung skrining CKD?",
      answer:
        "Ya, BPJS Kesehatan menanggung skrining penyakit ginjal kronik (CKD) sebagai bagian dari program pencegahan penyakit. Namun, terdapat beberapa syarat yang harus dipenuhi, seperti rujukan dari dokter dan indikasi medis yang jelas.",
      category: "umum",
    },
    {
      id: 2,
      question: "Bagaimana proses klaim BPJS jika saya butuh cuci darah?",
      answer:
        "Proses klaim BPJS untuk hemodialisis (cuci darah) adalah sebagai berikut: 1) Dapatkan rujukan dari Faskes tingkat pertama, 2) Bawa rujukan ke rumah sakit yang bekerjasama dengan BPJS, 3) Lakukan pendaftaran dengan menunjukkan kartu BPJS, 4) Ikuti prosedur hemodialisis sesuai jadwal yang ditentukan dokter. BPJS akan menanggung biaya sesuai dengan ketentuan yang berlaku.",
      category: "umum",
    },
    {
      id: 3,
      question: "Apakah asuransi swasta juga menanggung CKD dan cuci darah?",
      answer:
        "Sebagian besar asuransi swasta menanggung pengobatan CKD dan cuci darah, namun cakupan bervariasi tergantung pada paket dan polis yang Anda miliki. Beberapa asuransi mungkin memiliki masa tunggu atau tidak menanggung kondisi yang sudah ada sebelumnya. Pastikan untuk memeriksa detail polis Anda atau menghubungi pihak asuransi untuk konfirmasi cakupan.",
      category: "umum",
    },
    {
      id: 4,
      question:
        "Apa saja dokumen yang dibutuhkan untuk klaim asuransi swasta terkait CKD?",
      answer:
        "Dokumen yang umumnya dibutuhkan untuk klaim asuransi swasta terkait CKD meliputi: 1) Formulir klaim yang sudah diisi lengkap, 2) Surat keterangan dokter, 3) Hasil pemeriksaan laboratorium, 4) Riwayat medis, 5) Kuitansi pembayaran asli, 6) Fotokopi KTP, dan 7) Fotokopi kartu asuransi.",
      category: "umum",
    },
    {
      id: 5,
      question:
        "Bagaimana jika saya belum terdaftar BPJS, apakah bisa mendaftar saat sudah terkena CKD?",
      answer:
        "Ya, Anda masih bisa mendaftar BPJS Kesehatan meskipun sudah didiagnosis CKD. Namun, terdapat masa tunggu 14 hari sebelum Anda dapat menggunakan layanan untuk penyakit tersebut. Untuk kondisi kronis seperti CKD yang memerlukan pengobatan jangka panjang, sangat disarankan untuk segera mendaftar BPJS.",
      category: "umum",
    },
    {
      id: 6,
      question:
        "Apakah bisa langsung ke rumah sakit rujukan tanpa ke faskes tingkat pertama?",
      answer:
        "Tidak, dalam sistem BPJS, Anda perlu mendapatkan rujukan dari Faskes tingkat pertama (seperti puskesmas atau klinik) sebelum dapat ditangani di rumah sakit rujukan. Pengecualian berlaku untuk kondisi gawat darurat, di mana Anda dapat langsung ke IGD rumah sakit.",
      category: "umum",
    },
  ];

  const toggleQuestion = (questionId) => {
    if (expandedQuestion === questionId) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(questionId);
    }
  };

  // Filter FAQ items based on search term
  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <h1 className="text-sm font-bold text-gray-900">Asuransi</h1>
            <p className="text-xs text-gray-500">FAQ BPJS/Asuransi</p>
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
            className="pl-10 pr-4 py-2 w-full bg-white border border-gray-200 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Cari pertanyaan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FAQ Sections */}
        <div className="mb-4">
          <h2 className="text-base font-bold mb-3 text-gray-800">Pertanyaan Umum</h2>

          <div className="space-y-2">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-start"
                  onClick={() => toggleQuestion(faq.id)}
                >
                  <span className="font-medium text-sm pr-2 text-gray-800">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 flex-shrink-0 transform transition-transform ${expandedQuestion === faq.id ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#333333"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedQuestion === faq.id && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Note/Disclaimer */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-8">
          <p className="text-xs text-blue-800">
            <span className="font-medium">Catatan:</span> Informasi ini bersifat
            umum. Untuk detail spesifik, hubungi BPJS Kesehatan atau konsultan
            asuransi Anda.
          </p>
        </div>
      </div>
    </main>
  );
}
