import { useEffect, useState } from "react";
import { supabase } from "@/config/subase.config";

const useAuth = () => {
  const authUser = localStorage.getItem("user");
  const [userLogged, setUser] = useState(
    authUser ? JSON.parse(authUser) : null
  );

  console.log(userLogged, "auth");

  useEffect(() => {
    // Verifica si el usuario ya está autenticado al cargar la aplicación
    const session = supabase.auth.getSession();
    if (session) {
      setUser(session); // Si hay una sesión activa, se guarda el usuario
    }

    // Suscribirse a cambios en el estado de autenticación
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user); // Si el usuario está autenticado, actualizamos el estado
          localStorage.setItem("user", JSON.stringify(session.user)); // Guardamos el usuario en localStorage
        } else {
          setUser(null); // Si no hay sesión, limpiamos el estado
          localStorage.removeItem("user"); // Limpiamos localStorage
        }
      }
    );

    // Cleanup cuando el componente se desmonte
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return { userLogged };
};

export default useAuth;
