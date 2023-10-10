import React from "react";
import Dashboard from "../components/Dashboard";
import Buttons from "../components/Buttons";
import { useNavigate } from "react-router-dom";
import { comida } from "../utils/database";
import Customer from "../components/Customer";
import useForm from "../hooks/useForm";
import ItemFood from "../components/ItemFood";

export default function Food() {
  const navigate = useNavigate();
  const {
    cliente1,
    cliente2,
    handleCheckbox1Change,
    handleCheckbox2Change,
    handleConfirm,
  } = useForm();

  // const id1 = JSON.parse(localStorage.getItem("clientes"));
  // const id2 = JSON.parse(localStorage.getItem("clientes"));

  // const idCust1 = id1.id;
  // const idCust2 = id2[1];

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
            <div className="col-sm-6 d-flex justify-content-center">
              <Customer />
            </div>
          </div>
        </div>
        <div className="col-sm-12 d-flex justify-content-center">
          <h1 className="fs-1">Menú</h1>
        </div>
        {comida.map((item, index) => (
          <ItemFood
            key={index}
            img1={item.image}
            title1={item.title}
            txt1={`$ ${item.price}`}
            name1={`cliente1_${item.id}`}
            name2={`cliente2:${item.id}`}
            value1={item}
            value2={item}
            id1={`cliente1:${item.id}`}
            id2={`cliente2:${item.id}`}
            onChange1={(e) => {
              handleCheckbox1Change(item, e.target.checked);
            }}
            onChange2={(e) => {
              handleCheckbox2Change(item, e.target.checked);
            }}
            checked1={cliente1.comida.includes(item)}
            checked2={cliente2.comida.includes(item)}
          />
        ))}
        <div className="col-sm-12 d-flex justify-content-center my-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleConfirm();
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
