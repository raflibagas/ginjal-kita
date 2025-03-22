// app/kidneyquest/challenges/page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function KidneyQuestChallenges() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const difficultyLevel = searchParams.get("level") || "beginner";

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [activityNote, setActivityNote] = useState("");
  const [selectedResult, setSelectedResult] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Mock completion percentage data
  const weeklyProgress = 30; // Percentage of completion
  const currentDay = 4;
  const totalDays = 7;

  // Weekly challenges data
  const weeklyChallenges = [
    {
      id: 1,
      name: "Minum 8 Gelas Air",
      description: "Air membantu ginjal membuang limbah dari darah",
      icon: "/Droplet.png",
      iconBg: "bg-blue-100",
      completed: true,
      date: "04 Mar 2023",
      badge: "SELESAI",
      badgeBg: "bg-green-100",
      badgeText: "text-green-500",
    },
    {
      id: 2,
      name: "Baca Artikel: Pola Makan Sehat",
      description: "Pola makan seimbang yang baik untuk kesehatan ginjal",
      icon: "/Books.png",
      iconBg: "bg-green-100",
      completed: true,
      date: "03 Mar 2023",
      badge: "SELESAI",
      badgeBg: "bg-green-100",
      badgeText: "text-green-500",
    },
    {
      id: 3,
      name: "Olahraga 30 Menit",
      description: "Aktivitas fisik membantu mengontrol tekanan darah",
      icon: "/man.png",
      iconBg: "bg-red-100",
      completed: false,
      date: null,
      badge: "HARI 03",
      badgeBg: "bg-red-100",
      badgeText: "text-red-500",
    },
    {
      id: 4,
      name: "Kurangi Asupan Garam",
      description: "Garam berlebih membebani kerja ginjal",
      icon: "/Salt.png",
      iconBg: "bg-purple-100",
      completed: false,
      date: null,
      badge: "HARI 4",
      badgeBg: "bg-gray-100",
      badgeText: "text-gray-500",
    },
    {
      id: 5,
      name: "Tidur 7-8 Jam",
      description: "Istirahat cukup membantu pemulihan ginjal",
      icon: "/Sleeping.png",
      iconBg: "bg-yellow-100",
      completed: false,
      date: null,
      badge: "HARI 5",
      badgeBg: "bg-gray-100",
      badgeText: "text-gray-500",
    },
    {
      id: 6,
      name: "Cek Tekanan Darah",
      description: "Tekanan darah tinggi dapat merusak ginjal",
      icon: "/Heart.png",
      iconBg: "bg-red-100",
      completed: false,
      date: null,
      badge: "HARI 6",
      badgeBg: "bg-gray-100",
      badgeText: "text-gray-500",
    },
    {
      id: 7,
      name: "Hindari Minuman Beralkohol",
      description: "Soda dapat meningkatkan risiko batu ginjal",
      icon: "/cup.png",
      iconBg: "bg-purple-100",
      completed: false,
      date: null,
      badge: "HARI 7",
      badgeBg: "bg-gray-100",
      badgeText: "text-gray-500",
    },
  ];

  const handleChallengeClick = (challenge) => {
    if (!challenge.completed) {
      setActiveChallenge(challenge);
      setShowSubmitForm(true);
    }
  };

  const handleCloseForm = () => {
    setShowSubmitForm(false);
    setActiveChallenge(null);
    setActivityNote("");
    setSelectedResult("");
  };

  const handleSubmitActivity = () => {
    // Validate if required fields are filled
    if (!selectedResult) {
      alert("Pilih jenis kegiatan terlebih dahulu!");
      return;
    }

    // In a real app, you would save the activity data here

    // Show success message
    setSuccessMessage(`Aktivitas ${activeChallenge?.name} berhasil dicatat!`);
    setShowSuccessMessage(true);

    // Close the form
    handleCloseForm();

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-red-50">
      <div className="max-w-md mx-auto p-4 px-8">
        {/* Header */}
        <div className="flex items-center -mt-4">
          <Link
            href="/kidneyquest/difficulty"
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
            <h1 className="text-sm font-bold text-gray-900">DipQuest</h1>
            <p className="text-xs text-gray-500">Tantangan Kesehatan Ginjal</p>
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

        {/* Progress bar */}
        <div className="mb-4">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-bold text-gray-800">
                Progress Mingguan
              </p>
              <p className="text-sm font-medium text-gray-800">
                {weeklyProgress}%
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
              <div
                className="bg-red-500 h-2.5 rounded-full"
                style={{ width: `${weeklyProgress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-1">
              <p className="text-xs text-gray-500">Hari {currentDay}</p>
              <p className="text-xs text-gray-500">Hari {totalDays}</p>
            </div>
          </div>
        </div>

        {/* Weekly challenges */}
        <h2 className="text-base font-bold text-gray-800 mb-3">
          Tantangan Minggu Ini
        </h2>

        <div className="space-y-3 mb-8">
          {weeklyChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                !challenge.completed ? "cursor-pointer" : ""
              }`}
              onClick={() =>
                !challenge.completed && handleChallengeClick(challenge)
              }
            >
              <div className="p-3 flex items-start justify-between">
                <div className="flex items-start">
                  <div
                    className={`${challenge.iconBg} p-2 rounded-lg mr-3 flex-shrink-0`}
                  >
                    <Image
                      src={challenge.icon}
                      alt={challenge.name}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {challenge.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {challenge.description}
                    </p>
                    {challenge.completed && (
                      <p className="text-xs text-gray-400 mt-1">
                        Diselesaikan pada: {challenge.date}
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={`${challenge.badgeBg} ${challenge.badgeText} px-2 py-1 rounded text-xs font-medium ml-2 flex-shrink-0`}
                >
                  {challenge.badge}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity submission modal with semi-transparent background */}
        {showSubmitForm && activeChallenge && (
          <div
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="bg-white rounded-lg w-full max-w-md shadow-lg">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {activeChallenge.name}
                    </h3>
                    <p className="text-sm text-gray-500">Catat Aktivitas</p>
                  </div>
                  <button
                    onClick={handleCloseForm}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-gray-800">
                    Log Aktivitas
                  </label>
                  <p className="text-xs text-gray-500 mb-2">
                    Hari 3 of 7 Maret
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    Bagaimana Anda menyelesaikan tantangan ini?
                  </p>

                  <div className="mb-4">
                    <select
                      className="w-full p-2 border border-gray-400 text-gray-800 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      value={selectedResult}
                      onChange={(e) => setSelectedResult(e.target.value)}
                    >
                      <option value="">Kegiatan yang dilakukan</option>
                      <option value="jogging">Jogging</option>
                      <option value="walking">Jalan kaki</option>
                      <option value="swimming">Berenang</option>
                      <option value="cycling">Bersepeda</option>
                      <option value="yoga">Yoga</option>
                    </select>
                  </div>

                  <textarea
                    className="w-full p-3 border border-gray-400 text-gray-800 rounded-md text-sm resize-none h-24 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Tambahkan catatan aktivitas Anda di sini..."
                    value={activityNote}
                    onChange={(e) => setActivityNote(e.target.value)}
                  ></textarea>

                  <div className="mt-3 p-3 border border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-xs text-gray-500 mt-1">
                      Tambahkan foto (opsional)
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={handleCloseForm}
                    className="flex-1 py-2 border border-gray-400 text-gray-600 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSubmitActivity}
                    className="flex-1 bg-red-500 text-white py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-colors"
                  >
                    Selesai
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success message toast */}
        {showSuccessMessage && (
          <div className="fixed bottom-4 inset-x-0 flex justify-center items-center z-50 px-4">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-md flex items-center max-w-md">
              <div className="mr-2">
                <svg
                  className="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium">{successMessage}</p>
              <button
                onClick={() => setShowSuccessMessage(false)}
                className="ml-auto"
              >
                <svg
                  className="h-4 w-4 text-green-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
