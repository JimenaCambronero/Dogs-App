import React from "react";

const Footer = () => {
  return (
    
      <footer className="contenedor-copy">
        <div className="copy">
          <p className="copy-parrafo">
            {" "}
            Practica React Dog - App-
            <span>
              Desarrollado con <span className="heart">💜</span> por Jimena G.
              Cambronero.
            </span>
          </p>
        </div>
        <div className="copy-links">
          <a
            href="https://github.com/JimenaCambronero"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jimena-gisele-cambronero/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
  
  );
};

export default Footer;
