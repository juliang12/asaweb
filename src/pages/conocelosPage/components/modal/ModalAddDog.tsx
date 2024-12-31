import Editor from "@/components/editor/Editor";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { addDog } from "@/services/dogs.services";
import { Controller, FieldValues, useForm } from "react-hook-form";

const ModalAddDog = () => {
  const { register, handleSubmit, control } = useForm();

  const handleAddDog = async (values: FieldValues) => {
    await addDog(values);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {" "}
          <h1 className="text-3xl text-center uppercase py-10">
            Agrega un perrito
          </h1>
        </DialogTitle>
        <DialogDescription>
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
            <Button type="submit">Agregar</Button>
          </form>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default ModalAddDog;
