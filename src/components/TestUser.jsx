import { useAuth } from "@/context/AuthContext";

export default function TestUser() {
  const { user, loading } = useAuth();

  console.log("TestAuth - loading:", loading);
  console.log("TestAuth - user:", user);

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      {user ? (
        <p>Connecté en tant que {user.email}</p>
      ) : (
        <p>Pas connecté</p>
      )}
    </div>
  );
}