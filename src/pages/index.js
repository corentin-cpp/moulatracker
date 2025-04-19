import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex-1 p-6">
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold mb-4">Bienvenue sur Moula Tracker</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Gère tes dépenses entre amis simplement.
          </p>
        </div>
      </main>
    </div>
  );
}
