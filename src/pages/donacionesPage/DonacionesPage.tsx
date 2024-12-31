import MP from "../../assets/mercado-pago.png";
const DonacionesPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <h1 className="text-center uppercase font-semibold text-6xl py-20 text-gray-400">
        Donaciones
      </h1>
      <div className="bg-white text-black px-20 py-10 ">
        <img className="w-[400px]" src={MP} alt="" />
        <div className="text-center py-20">
          <h2 className="text-3xl"><b>ALIAS:</b> AMOR.SIN.ATADURAS</h2>
          {/* <div className="flex gap-5 flex-wrap justify-around py-10">
            <Button>Dona $500</Button>
            <Button>Dona $1000</Button>
            <Button>Dona $1500</Button>
            <Button>Dona $2000</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DonacionesPage;
