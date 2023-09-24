import React from "react";
import Dashboard from "../components/Dashboard";
import Option from "../components/Option";
import desayuno from "../assets/desayuno.jpg";
import cena from "../assets/cena.jpg";
import postre from "../assets/postre.jpg";
import almuerzo from "../assets/almuerzo.jpg";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";

export default function Menu() {
  const navigate = useNavigate();
  const handleMenuUnAvailable = (e) => {
    e.preventDefault();
    alert("Esta opción aún no esta disponible");
  };
  return (
    <Dashboard>
      <div className="row">
        <div className="col-sm-12">
          <Buttons
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          />
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
          onClick1={handleMenuUnAvailable}
        />
        <Option
          img1={almuerzo}
          title1="Almuerzo"
          onClick1={(e) => {
            e.preventDefault();
            navigate("/food");
          }}
        />
        <Option img1={cena} title1="Cena" onClick1={handleMenuUnAvailable} />
        <Option
          img1={postre}
          title1="Postre"
          onClick1={handleMenuUnAvailable}
        />
      </div>
    </Dashboard>
  );
}
