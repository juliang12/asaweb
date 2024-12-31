import { FirebaseError } from "firebase/app"
import { supabase } from "@/config/subase.config"

export const login = async (email: string, password: string) => {
 try {
    const response = await supabase.auth.signInWithPassword({ email, password })
    return response
 } catch (error) {
    if (error instanceof FirebaseError) {
        return error
    }
 }
}