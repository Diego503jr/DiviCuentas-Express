import React from "react";
import Dashboard from "../components/Dashboard";
import amigos from "../assets/Amigos.jpg";
import individual from "../assets/Individual.avif";
import duo from "../assets/Pareja.jpg";
import trio from "../assets/Trio.jpg";
import personalizado from "../assets/Personalizado.png";
import Div from "../components/Div";
import Option from "../components/Option";
import promocion from "../assets/promocion.jpg";
import { AcceptModal } from "../components/Modal";
import DesarrolloModal from "../components/DesarrolloModal";

export default function Home() {
  return (
    <React.Fragment>
      <AcceptModal />
      <DesarrolloModal />
      <Dashboard>
        <div className="row h-100">
          <div
            style={{ color: "#040100" }}
            className="col-sm-6 d-flex flex-column justify-content-center align-items-center"
          >
            <h1
              style={{ color: "#040100", fontSize: "2.5rem" }}
              className="fw-bold lh-1  d-lg-none"
            >
              Saborea innovación, paga sin complicación
            </h1>
            <h1
              style={{ fontSize: "3.7rem", color: "#040100" }}
              className="fw-bold lh-1 d-none d-lg-flex"
            >
              Saborea innovación, paga sin complicación
            </h1>
          </div>
          <div className="col-sm-6">
            <img src={amigos} alt={amigos} className="img-fluid" />
          </div>
          <Div>En Cuanto quisieras dividir</Div>
          <Option
            img1={individual}
            title1="Individual"
            txt1="Uno es mejor que ninguno"
            dataBsTarget="#endesarrollo"
            dataBsToggle="modal"
          />
          <Option
            img1={duo}
            title1="Pareja"
            txt1="Con compañia cae bien"
            dataBsTarget="#exampleModal"
            dataBsToggle="modal"
          />
          <Option
            img1={trio}
            title1="Trios"
            txt1="Los tres mosqueteros"
            dataBsTarget="#endesarrollo"
            dataBsToggle="modal"
          />
          <Option
            img1={personalizado}
            title1="Personalizado"
            txt1="Si somos varios es mejor"
            dataBsTarget="#endesarrollo"
            dataBsToggle="modal"
          />
          <div className="col-sm-12 d-flex justify-content-center mt-2 border-top border-black border-5">
            <img
              src={promocion}
              alt={promocion}
              className="img-fluid w-100 my-3 d-sm-none"
            />
            <img
              src={promocion}
              alt={promocion}
              className="img-fluid w-50 my-3 d-none d-sm-flex"
            />
          </div>
        </div>
      </Dashboard>
    </React.Fragment>
  );
}
