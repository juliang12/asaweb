import { useNavigate } from "react-router-dom";
import DropdownMenu from "../../dropdownMenu/DropdownMenu";
import useAuth from "../../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase.config";
import useIsMobile from "../../../hooks/useIsMobile";
import Bars from "../../../assets/icons/Bars";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const { isMobile } = useIsMobile();
  const { userLogged } = useAuth();
  const options = [
    { title: "Castracion", href: "/castracion" },
    { title: "Denuncia el maltrato", href: "/notaccess" },
  ];

  const options2 = [
    { title: "Conocelos", href: "/conocelos" },
    { title: "Quiero adoptar", href: "/notaccess" },
    { title: "Requisitos de adopcion", href: "/notaccess" },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  const isClickedMobile = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex bg-white justify-between items-center h-[70px] border-b-2 border-black px-5">
      <h2 className="text-3xl font-bold">
        A<span className="text-gray-500">S</span>A
      </h2>
      {isMobile && (
        <button onClick={isClickedMobile}>
          <Bars />
        </button>
      )}
      <nav>
        <ul
          className={`flex items-center gap-10 font-semibold ${
            isMobile && isClicked ? "left-0 right-0" : "left-[-100%]"
          } ${
            isMobile &&
            "flex-col absolute top-[70px] justify-center bg-white w-full h-screen"
          }`}
        >
          <li>
            <DropdownMenu title={"Salva vidas"} options={options} />
          </li>
          <li>
            <a className="hover:underline px-4 py-5" href="/">
              Sobre nosotros
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#home">
              Aportes economicos
            </a>
          </li>
          <li>
            <DropdownMenu title={"Adopta"} options={options2} />
          </li>
          <li>
            <a className="hover:underline" href="#home">
              Donacion de insumos
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#home">
              Contactanos
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => navigate("/colaborar")}
        className="px-10 py-3 bg-black text-white font-semibold rounded-md transition-colors duration-500 hover:bg-opacity-80"
      >
        Donar ahora
      </button>
      {userLogged ? (
        <button onClick={handleLogout}>Desconectar</button>
      ) : (
        <button onClick={() => navigate("/auth/login")}>Iniciar Sesion</button>
      )}
    </div>
  );
};

export default Navbar;
