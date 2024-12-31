import Estamos from "../../assets/estamos.jpg"

const EstamosTrabajandoPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-5xl uppercase text-gray-400 py-10">Estamos trabajando en esta seccion</h2>
        <img className="opacity-50" src={Estamos} alt="" />
    </div>
  )
}

export default EstamosTrabajandoPage