// pages/Register.tsx
import { supabase } from "../utils/supabase";
import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function signUp() {
    const cleanedName = name.trim();
    const cleanedEmail = email.trim();
    const cleanedPassword = password.trim();

    const { data, error } = await supabase.auth.signUp({
      email: cleanedEmail,
      password: cleanedPassword,
      options: {
        data: { name: cleanedName },
      },
    });

    if (error) {
      console.error("Erreur lors de l'inscription :", error.message);
      setErrorMessage("Erreur : " + error.message);
    } else {
      console.log("Utilisateur inscrit avec succès :", data);
      setErrorMessage("Inscription réussie !");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Inscription à <span className="text-green-500">Moula Tracker</span>
        </h1>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            signUp();
          }}
        >
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Nom"
              className="w-full pl-10 p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full pl-10 p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded-md transition"
          >
            Créer un compte
          </button>
          {errorMessage && (
            <p className="text-sm text-center mt-2 text-red-500 dark:text-red-400">
              {errorMessage}
            </p>
          )}
        </form>
        <div className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
          Déjà un compte ?{" "}
          <a href="/login" className="text-green-500 hover:underline">
            Connecte-toi ici
          </a>
        </div>
      </div>
    </div>
  );
}
