// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

// Configure the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "GinjalKita - Deteksi Dini Penyakit Ginjal Kronis",
  description: "Aplikasi untuk deteksi dini dan monitoring kesehatan ginjal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  );
}
