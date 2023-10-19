import React from "react";
import Dashboard from "../components/Dashboard";
import PromoModal from "../components/PromoModal";

export default function Contact() {
  return (
    <React.Fragment>
      <PromoModal />
      <Dashboard>
        <div
          style={{ color: "#040100" }}
          className="row d-flex justify-content-center"
        >
          <div className="col-sm-8 d-flex justify-content-center my-3">
            <h1>Contáctanos</h1>
          </div>
          <form className="col-sm-8 card border border-2 my-3">
            <div className="my-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                id="emailInput"
                placeholder="ejemplo123@ejemplo.com"
              />
              <div className="form-text">
                Ingresa tu email para saber quien eres.
              </div>
            </div>
            <div className="my-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Asunto
              </label>
              <textarea
                className="form-control"
                id="cuerpoInput"
                rows="3"
              ></textarea>
              <div className="form-text">
                Ingresa el asunto por el cual nos quieres contactar.
              </div>
              <button
                data-bs-toggle="modal"
                data-bs-target="#promoModal"
                style={{ backgroundColor: "green" }}
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="btn my-3 text-white fw-bolder w-100"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </Dashboard>
    </React.Fragment>
  );
}
