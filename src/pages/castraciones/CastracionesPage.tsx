import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CastracionImg from "../../assets/castraciones.jpg";
import CastracionImg2 from "../../assets/castraciones2.jpg";
import CastracionImg3 from "../../assets/castraciones3.jpg";
import CastracionImg4 from "../../assets/castraciones4.jpg";
import CastracionImg5 from "../../assets/castraciones5.jpg";
import Slider from "react-slick";
import "./CastracionesStyles.css";

const CastracionesPage = () => {
  const settings = {
    dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    centerMode: true, // Añadido para centrar los elementos
  };

  return (
    <div className={`max-w-screen-lg mx-auto`}>
        <h2 className="text-center uppercase font-semibold text-6xl py-10 text-gray-400">Beneficios y mitos</h2>
      <Slider {...settings}>
        <div className="w-full flex justify-center">
          <img src={CastracionImg} alt="castracion" />
        </div>
        <div>
          <img src={CastracionImg2} alt="castracion" />
        </div>
        <div>
          <img src={CastracionImg3} alt="castracion" />
        </div>
        <div>
          <img src={CastracionImg4} alt="castracion" />
        </div>
        <div>
          <img src={CastracionImg5} alt="castracion" />
        </div>
      </Slider>
    </div>
  );
};

export default CastracionesPage;
