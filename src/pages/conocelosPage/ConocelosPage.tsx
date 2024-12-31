import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import useAuth from "../../hooks/useAuth";
import Button from "@/components/button/Button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ModalAddDog from "./components/modal/ModalAddDog";
import useSWRImmutable from 'swr/immutable'


import { getAllDogs } from "@/services/dogs.services";

const ConocelosPage = () => {
  const { userLogged } = useAuth();
  const { data: perros } = useSWRImmutable("/perros", getAllDogs);
  console.log(userLogged)

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-wrap justify-center gap-5">
        {perros?.map((dog) => (
          <Link to={`/conocelos/${dog.id}`}>
            <Card width="300px" widthImage="200px" {...dog} />
          </Link>
        ))}

      </div>
        {userLogged && (
          <Dialog>
            <DialogTrigger asChild>
              <Button>Agregar un perrito</Button>
            </DialogTrigger>
            <ModalAddDog />
          </Dialog>
        )}
    </div>
  );
};

export default ConocelosPage;
