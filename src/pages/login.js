// pages/Login.tsx
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import { Lock, Mail } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function signIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password.trim(),
    });
    if (error) {
      console.error("Error signing in:", error);
      setErrorMessage("Erreur : " + error.message);
    } else {
      console.log("User signed in successfully:", data);
      setErrorMessage("Connexion réussie !");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Connexion à <span className="text-green-500">Moula Tracker</span>
        </h1>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
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
            Se connecter
          </button>
          {errorMessage && (
            <p className="text-sm text-center mt-2 text-red-500 dark:text-red-400">
              {errorMessage}
            </p>
          )}
        </form>
        <div className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
          Pas encore de compte ?{" "}
          <a href="/register" className="text-green-500 hover:underline">
            Créez-en un ici
          </a>
        </div>
      </div>
    </div>
  );
}