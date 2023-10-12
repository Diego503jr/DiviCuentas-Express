import React from "react";
import Dashboard from "../components/Dashboard";

export default function Contact() {
  function enviarEmail() {
    const email = document.getElementById("emailInput").value;
    const asunto = "Contacto desde DiviCuentas Express";
    const cuerpo = document.getElementById("cuerpoInput").value;

    var link =
      "mailto:innovacionesgastrotech@gmail.com?subject=" +
      encodeURIComponent(asunto) +
      "&body=" +
      encodeURIComponent(cuerpo) +
      "&cc=" +
      email;
    window.location.href = link;
  }

  return (
    <Dashboard>
      <div
        style={{ color: "#040100" }}
        className="row d-flex justify-content-center"
      >
        <div className="col-sm-8 d-flex justify-content-center my-3">
          <h1>Contactanos</h1>
        </div>
        <form action="" className="col-sm-8 card border border-2 my-3">
          <div className="my-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="ejemplo123@ejemplo.com"
            />
            <div id="emailHelp" className="form-text">
              Ingresa tu email para saber quien eres.
            </div>
          </div>
          <div className="my-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Asunto
            </label>
            <textarea
              className="form-control"
              id="cuerpoInput"
              rows="3"
            ></textarea>
            <div id="emailHelp" className="form-text">
              Ingresa el asunto por el cual nos quieres contactar.
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                enviarEmail();
              }}
              className="btn btn-success my-3 w-100"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Dashboard>
  );
}
