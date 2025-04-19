import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const { user, loading } = useAuth();

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <nav className="w-full px-4 py-3 flex justify-between items-center bg-gray-100 dark:bg-gray-800 shadow-md">
            <div className="text-2xl font-bold">
                <span className="text-green-500">Moula</span> Tracker
            </div>
            <div className="space-x-4">
                <a href="#" className="hover:underline">
                    Accueil
                </a>
                <a href="#" className="hover:underline">
                    Aide
                </a>
                {user ? (
                    <a href="/profil">Connecté en tant que {user.email}</a>
                ) : (
                    <a href="/login">Connexion</a>
                )}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-4 p-2 rounded-md bg-gray-200 dark:bg-gray-700"
                >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>
        </nav>
    )
}