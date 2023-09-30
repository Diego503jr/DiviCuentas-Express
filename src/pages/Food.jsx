import React from "react";
import Dashboard from "../components/Dashboard";
import Buttons from "../components/Buttons";
import Option from "../components/Option";
import { useNavigate } from "react-router-dom";
import { comida } from "../utils/database";
import Customer from "../components/Customer";

export default function Food() {
  const navigate = useNavigate();

  return (
    <Dashboard>
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-6">
              <Buttons
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/menu");
                }}
              />
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
              <Customer />
            </div>
          </div>
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
              navigate("/bills");
            }}
            className="btn btn-success w-25 fs-5 fw-bold"
          >
            Confirmar
          </button>
        </div>
      </div>
    </Dashboard>
  );
}
