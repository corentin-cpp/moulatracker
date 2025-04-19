import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import TestUser from "@/components/TestUser";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </div>
  );
}
