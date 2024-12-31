import { db } from "@/config/firebase.config";

import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { FieldValues } from "react-hook-form";
import { supabase } from "@/config/subase.config";

const ref = collection(db, "perros");

export const addDog = async (dog: FieldValues) => {
  try {
    // Subir la imagen al almacenamiento de Supabase
    const { data, error } = await supabase.storage
      .from("images")
      .upload(dog.image[0].name, dog.image[0]);

    if (error) {
      throw new Error(error.message);
    }


    // Obtener la URL pública de la imagen
    const { data: publicURL } = supabase.storage
    .from("images")  // El nombre del bucket
    .getPublicUrl(data.path);  // Obtener la URL pública del archivo subido


    // Crear los parámetros para el nuevo registro
    const params = {
      ...dog,
      image: publicURL
    };

    // Agregar el documento a Firestore
    await addDoc(ref, params);

  } catch (error) {
    console.log(error);
  }
};



export const getAllDogs = async () => {
  try {
    const data = await getDocs(ref);
    const results = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return results;
  } catch (error) {
    console.log(error);
  }
};


export const deleteDog = async (id: string) => {
  try {
    await deleteDoc(doc(db, "perros", id));
  } catch (error) {
    console.log(error);
  }
}