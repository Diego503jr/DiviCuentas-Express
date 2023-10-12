import React from "react";
import Dashboard from "../components/Dashboard";
import Option from "../components/Option";
import desayuno from "../assets/desayuno.jpg";
import cena from "../assets/cena.jpg";
import postre from "../assets/postre.jpg";
import almuerzo from "../assets/almuerzo.jpg";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";
import Customer from "../components/Customer";
import DesarrolloModal from "../components/DesarrolloModal";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <DesarrolloModal />
      <Dashboard>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-6">
                <Buttons
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                />
              </div>
              <div className="col-sm-6 d-flex justify-content-center">
                <Customer />
              </div>
            </div>
          </div>
          <div
            style={{ color: "#040100" }}
            className="col-sm-12 d-flex justify-content-center"
          >
            <h1 className="fs-1 fw-bold">Carta</h1>
          </div>
          <Option
            img1={desayuno}
            title1="Desayuno"
            dataBsTarget="#endesarrollo"
            dataBsToggle="modal"
          />
          <Option
            img1={almuerzo}
            title1="Almuerzo"
            onClick1={(e) => {
              e.preventDefault();
              navigate("/food");
            }}
          />
          <Option
            img1={cena}
            title1="Cena"
            dataBsTarget="#endesarrollo"
            dataBsToggle="modal"
          />
          <Option
            img1={postre}
            title1="Postre"
            dataBsTarget="#endesarrollo"
            dataBsToggle="modal"
          />
        </div>
      </Dashboard>
    </React.Fragment>
  );
}
