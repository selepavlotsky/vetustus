import React from "react";
import "./AboutUs.scss";
import about from "../../assets/about.png";

const AboutUs = () => {
  return (
    <div id="conocenos" className="about-us-container">
      <div className="wrapper about-us-details">
        <div className="about-us-col-1">
          <h1>Conocenos</h1>
          <p>
            En Vetustus, creemos que cada objeto antiguo cuenta una historia
            única. Nos apasiona descubrir, preservar y compartir piezas con
            alma, que han resistido el paso del tiempo y llevan consigo el
            encanto de épocas pasadas.
          </p>
          <p>
            Nuestro catálogo está cuidadosamente seleccionado para ofrecerte
            antigüedades auténticas, desde muebles con historia hasta piezas
            decorativas que evocan la elegancia de otros tiempos. Nos
            enorgullece brindar no solo objetos, sino también el conocimiento y
            la pasión que nos inspira cada pieza.
          </p>
          <p>
            Si eres un amante de lo clásico, un coleccionista o simplemente
            buscas ese toque especial para tu hogar, en Vetustus encontrarás un
            rincón donde el pasado cobra vida.
          </p>
          <div className="about-contact-container">
            <a
              href="https://api.whatsapp.com/send?phone=541150526731"
              target="_blank"
            >
              Contactanos
            </a>
          </div>
        </div>

        <img src={about} alt="Imagen para aboutus" />
      </div>
    </div>
  );
};

export default AboutUs;
