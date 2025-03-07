import "./Footer.scss";
import logoVetustus from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="wrapper footer-details">
        <div className="top-footer">
          <a href="#">
            <img
              className="main-logo-footer"
              src={logoVetustus}
              alt="Logo de vetustus"
            />
          </a>
          <div className="terms-conditions">
            <a href="#">Preguntas frecuentes</a>
            <span>·</span>
            <a href="#"> Métodos de pago</a>
            <span>·</span>
            <a href="#"> Envíos</a>
            <span>·</span>
            <a href="#"> Políticas de privacidad</a>
          </div>
        </div>
        <div className="bottom-footer">
          <div>Todos los derechos reservados</div>
          <div className="site-details">
            <p>Sitio:</p>
            <a href="#">Selene Pavlotsky</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
