import React from "react";
import logotipo from "../assets/v1horizontal.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "#E22717" }}
      className="col-sm-12 d-flex align-items-center"
    >
      <div className="my-4 mx-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-2">
            <img
              src={logotipo}
              alt={logotipo}
              className="img-fluid rounded-5"
            />
          </div>
          <div className="col-sm-6 d-flex justify-content-center">
            <div className="text-white text-center">
              Copyright © {year} DiviCuentas Express S.A de C.V
            </div>
          </div>
          <div className="col-sm-4 d-flex justify-content-center">
            <div className="d-flex">
              <a
                href="mailto:innovacionesgastrotech@gmail.com"
                className="btn text-white"
              >
                <i
                  style={{ fontSize: "1.3rem" }}
                  className="bi bi-envelope"
                ></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551842061313"
                className="btn text-white"
              >
                <i
                  style={{ fontSize: "1.3rem" }}
                  className="bi bi-facebook"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/innovaciones.gastrotech/"
                className="btn text-white"
              >
                <i
                  style={{ fontSize: "1.3rem" }}
                  className="bi bi-instagram"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
