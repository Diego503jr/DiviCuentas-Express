import React from "react";
import { useNavigate } from "react-router-dom";
import logotipo from "../assets/v1horizontal.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      style={{ backgroundColor: "#E22717" }}
      className="col-sm-12 navbar navbar-expand-lg"
    >
      <div className="container-fluid">
        <img src={logotipo} alt={logotipo} className="img-fluid w-25" />
        <form className="d-flex" role="search">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            type="button"
            className="nav-link mx-2 text-white fw-bold fs-5"
          >
            Inicio
          </button>
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/services");
            }}
            type="button"
            className="nav-link mx-2 text-white fw-bold fs-5"
          >
            Servicio
          </button> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/about-us");
            }}
            type="button"
            className="nav-link mx-2 text-white fw-bold fs-5"
          >
            Nosotros
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/contact");
            }}
            type="button"
            className="nav-link mx-2 text-white fw-bold fs-5"
          >
            Contacto
          </button>
        </form>
      </div>
    </nav>
  );
}
