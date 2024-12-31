
import Editor from "@/components/editor/Editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/config/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { Controller, FieldValues, useForm } from "react-hook-form";


const AgregarPage = () => {
  const { register, handleSubmit, control } = useForm();
  const ref = collection(db, "perros");

  const handleAddDog = async (values: FieldValues) => {
    console.log(values)
    const params = {
      ...values,
      image: values.image[0],
    }
    try {
      await addDoc(ref, params);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="text-3xl text-center uppercase py-10">
        Agrega un perrito
      </h1>
      <form
        className="flex flex-col items-center m-auto gap-3 max-w-screen-sm"
        onSubmit={handleSubmit(handleAddDog)}
      >
        <Input
          {...register("name")}
          type="text"
          placeholder="ingresa el nombre del perro"
        />
        <div className="w-full flex flex-col gap-1 ">
          <label className="text-sm font-semibold">Imagen del perro</label>
          <Input {...register("image")} type="file" />
        </div>
        <div className="w-full flex flex-col gap-1 ">
          <label className="text-sm font-semibold">Caracteristicas</label>
          <Controller
            name="caracteristicas"
            defaultValue={""}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Editor onChange={onChange} value={value} />
            )}
          />
        </div>
        <div className="w-full flex flex-col gap-1 ">
          <label className="text-sm font-semibold">Historia</label>
          <Controller
            name="historia"
            defaultValue={""}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Editor onChange={onChange} value={value} />
            )}
          />
        </div>
        <Button type="submit" onClick={handleSubmit(handleAddDog)}>Agregar</Button>
      </form>
    </div>
  );
};

export default AgregarPage;
