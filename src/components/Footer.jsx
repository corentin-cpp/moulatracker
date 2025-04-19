import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} Moula Tracker. Fait avec 💸 entre amis.
      </p>
    </footer>
  )
}