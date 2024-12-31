import DeleteIcon from "@/assets/icons/Conocelos/DeleteIcon";
import Img from "../../assets/no-image.jpg";
import { deleteDog } from "@/services/dogs.services";



const Card = ({
  name,
  image,
  width = "450px",
  height = "450px",
  widthImage = "450px",
  id
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {

  return (
    <div
      className={`w-[${width}] h-[${height}] max-w-[500px] rounded-md p-5 relative`}
    >
      <h2 className="flex items-center justify-center text-3xl uppercase text-center p-2 absolute bottom-5 left-14 font-semibold bg-white">
        {name ?? "Nombre"}
      </h2>
      <img
        className={`w-[${widthImage}]`}
        loading="lazy"
        src={image.publicUrl ?? Img}
        alt=""
      />
      <div onClick={(e) => {
        e.stopPropagation();
        deleteDog(id)
      }} className="absolute top-[35px] left-[35px] cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center border-1 border-slate-600 z-10">
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Card;
