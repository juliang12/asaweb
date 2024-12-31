// import noImage from "../assets/no-image.jpg"
import { useState } from "react";
import Image from "../../assets/about.jpg"
import Skeleton from "react-loading-skeleton";
import About from "./components/About";
import useAuth from "../../hooks/useAuth";
const AboutPage = () => {
  const {userLogged} = useAuth()
  const [imgLoading, setImgLoading] = useState(true);
  const onLoadImage = () => {
    setImgLoading(false);
  };

  console.log(userLogged, 'logued')

  return (
    <>
      <div className="w-full flex justify-center items-center bg-white h-auto max-[1000px]:flex-col">
        {imgLoading && (
          <Skeleton width={600} height={450} enableAnimation={true} />
        )}
        <div className="flex justify-center items-center w-full">
          <img
            onLoad={onLoadImage}
            loading="lazy"
            src={Image}
            alt="asa"
          />
        </div>
        <About />
      </div>
    </>
  );
};

export default AboutPage;
