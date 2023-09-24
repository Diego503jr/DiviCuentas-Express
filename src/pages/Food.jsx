import React from "react";
import Dashboard from "../components/Dashboard";
import Buttons from "../components/Buttons";
import Option from "../components/Option";
import { useNavigate } from "react-router-dom";
import { comida } from "../utils/database";

// let saveFood = JSON.parse(localStorage.getItem("comida"));

export default function Food() {
  const navigate = useNavigate();
  return (
    <Dashboard>
      <div className="row">
        <div className="col-sm-12">
          <Buttons
            onClick={(e) => {
              e.preventDefault();
              navigate("/menu");
            }}
          />
        </div>
        <div className="col-sm-12 d-flex justify-content-center">
          <h1 className="fs-1">Menú</h1>
        </div>
        {comida.map((item, index) => (
          <Option
            key={index}
            img1={item.image}
            title1={item.title}
            txt1={`$ ${item.price}`}
            food={true}
            text="Seleccione"
          />
        ))}
        <div className="col-sm-12 d-flex justify-content-center my-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              alert("Orden realizada");
            }}
            className="btn btn-success w-25"
          >
            Confirmar
          </button>
        </div>
      </div>
    </Dashboard>
  );
}
