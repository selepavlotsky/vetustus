import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageCarrusel1 from "../../assets/Carrusel-home/carrusel1.png";
import imageCarrusel2 from "../../assets/Carrusel-home/carrusel2.png";
import imageCarrusel3 from "../../assets/Carrusel-home/carrusel3.png";

const ImageSlider = () => {
  const images = [imageCarrusel1, imageCarrusel2, imageCarrusel3];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} style={{ width: "100%", margin: "auto" }}>
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Imagen ${index + 1}`}
            style={{ width: "100%", height: "600px" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
