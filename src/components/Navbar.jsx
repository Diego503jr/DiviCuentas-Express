import React from "react";
import { useNavigate } from "react-router-dom";
import logotipo from "../assets/v1horizontal.png";
import lgo from "../assets/v2horizontal.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <nav
        style={{ backgroundColor: "#FFA500" }}
        className="col-sm-12 navbar navbar-expand-lg d-sm-none"
      >
        <div className="container-fluid">
          <img src={logotipo} alt="logo lili-app" className="img-fluid w-50" />
          <button
            className="navbar-toggler border-0 focus-ring focus-ring-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span
              style={{ fontSize: "2rem" }}
              className="bi bi-list text-white"
            ></span>
          </button>
          <div
            className="offcanvas offcanvas-start w-75"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
          >
            <div className="offcanvas-header border-bottom border-dark-subtle">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                <img src={lgo} alt={lgo} className="img-fluid w-50" />
              </h5>
              <button
                type="button"
                className="btn-close w-50"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
                style={{
                  fontSize: "1.1rem",
                  color: "#173A44",
                  border: "1px solid #173A44",
                }}
                className="btn w-100 d-flex justify-content-center mt-2 mb-3"
              >
                Inicio
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/about-us");
                }}
                style={{
                  fontSize: "1.1rem",
                  color: "#173A44",
                  border: "1px solid #173A44",
                }}
                className="btn w-100 d-flex justify-content-center my-3"
              >
                Nosotros
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                }}
                style={{
                  fontSize: "1.1rem",
                  color: "#173A44",
                  border: "1px solid #173A44",
                }}
                className="btn w-100 d-flex justify-content-center my-3"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav
        style={{ backgroundColor: "#FFA500" }}
        className="col-sm-12 navbar navbar-expand-lg d-none d-sm-flex"
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
    </React.Fragment>
  );
}
