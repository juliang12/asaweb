import { useParams } from "react-router-dom";
import { getDogData } from "../../utils/getDogData";
import Card from "../../components/card/Card";

const DogPage = () => {
  const { id } = useParams();
  const dogData = getDogData({ id });

  if (!dogData) return null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div></div>
      <Card
        width="500px"
        height="500px"
        widthImage="600px"
        nombre={dogData?.nombre}
        imagen={dogData.imagen}
        history={dogData.history}
      />
      <div className="py-10">
        <li>
          <b>Edad:</b> <span className="text-lg">{dogData.edad}</span>
        </li>
        <li>
          <b>Caracteristicas:</b>{" "}
        {dogData?.caracteristicas?.map(item => (
          <span>
           <br /> {item} 
          </span>
        ))}
        </li>
      </div>
      <div className="text-center flex flex-col items-center justify-center bg-gray-200 p-5">
        <h2 className="text-2xl font-bold">Historia:</h2>
        <p>{dogData.history}</p>
      </div>
    </div>
  );
};

export default DogPage;
