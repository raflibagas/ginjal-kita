// app/onboarding/page.jsx
import Image from "next/image";
import Link from "next/link";

export default function Onboarding() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center text-center px-4 max-w-md">
        <div className="mb-6">
          <Image
            src="/mascots/gigin-jajal.png"
            alt="Gigin dan Jajal"
            width={150}
            height={150}
            priority
          />
        </div>

        <h1 className="text-2xl font-bold mb-4">Cek Risiko Gagal Ginjal</h1>
        <p className="text-sm text-gray-600 mb-10">
          Kenali risiko penyakit ginjal sejak dini dengan bantuan teknologi
          kecerdasan buatan. Cegah dan kendalikan penyakit ginjal lebih awal.
        </p>

        <Link
          href="/auth/sign-in"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg w-full max-w-xs"
        >
          Mulai Sekarang
        </Link>
      </div>
    </main>
  );
}
