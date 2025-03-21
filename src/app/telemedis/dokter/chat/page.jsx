// app/telemedis/dokter/chat/page.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TelemedisChatPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Mock chat messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "doctor",
      text: "Berdasarkan hasil CekRisiko dan hasil Lab Anda yang tersedia, saya menyarankan Anda cek kesehatan fungsi ginjal dengan dipstick, selain itu apakah Anda memiliki keluhan lainnya?",
      time: "21 min ago",
      isRead: true,
    },
    {
      id: 2,
      sender: "user",
      text: "Aman Dok, tidak ada, baik Dok",
      time: "15 min ago",
      isRead: true,
      reactions: ["👍"],
    },
    {
      id: 3,
      sender: "doctor",
      text: "Baik, saya resepkan yaa, Dipsticknya. Terima kasih banyak Rumaisha, sehat selalu yaa",
      time: "1 min ago",
      isRead: true,
    },
    {
      id: 4,
      sender: "user",
      text: "Terima kasih banyak Dok, Doa yang sama untuk Dokter Budi dan sekeluarga",
      time: "now",
      isRead: false,
    },
  ]);

  // Auto scroll to bottom on new messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message.trim() !== "") {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "user",
          text: message,
          time: "now",
          isRead: false,
        },
      ]);
      setMessage("");
    }
  };

  return (
    <main className="min-h-screen bg-red-50 flex flex-col">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white shadow-sm p-2 px-8">
          <div className="flex items-center">
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

            <div className="flex items-center flex-1 ml-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 mr-3">
                <Image
                  src="/agus.png"
                  alt="Doctor"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-800">
                  dr. Budi Santoso, Sp.PD-KGH
                </h2>
                <p className="text-xs text-gray-500">
                  Spesialis Ginjal Hipertensi
                </p>
              </div>
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
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto px-8">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "doctor" && (
                  <div className="flex-shrink-0 mr-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src="/agus.png"
                        alt="Doctor"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                <div className="max-w-xs">
                  {msg.sender === "doctor" && (
                    <div className="text-xs text-gray-500 mb-1">
                      dr. Budi Santoso
                    </div>
                  )}

                  <div
                    className={`rounded-lg px-4 py-2 ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>

                  <div className="flex mt-1">
                    <span className="text-xs text-gray-500 ml-auto">
                      {msg.time}
                    </span>
                    {msg.sender === "user" && msg.isRead && (
                      <span className="text-xs text-blue-500 ml-1">✓</span>
                    )}
                  </div>

                  {msg.reactions && msg.reactions.length > 0 && (
                    <div className="flex justify-end mt-1">
                      {msg.reactions.map((reaction, index) => (
                        <span
                          key={index}
                          className="text-sm bg-white rounded-full px-1 shadow-sm"
                        >
                          {reaction}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="flex-shrink-0 ml-2 ">
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src="/agus.png"
                        alt="User"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Message Input */}
        <div className="sticky bottom-0 z-10 bg-white p-3 border-t">
          <form onSubmit={handleSendMessage} className="flex items-center">
            <button
              type="button"
              className="p-2 text-gray-500 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>

            <button
              type="button"
              className="p-2 text-gray-500 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button>

            <input
              type="text"
              placeholder="Ketik pesan..."
              className="flex-1 py-2 px-3 mx-2 rounded-full border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              className="p-2 text-red-500 rounded-full hover:bg-gray-100"
              disabled={message.trim() === ""}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
