import React from "react";
import Dashboard from "../components/Dashboard";
import Buttons from "../components/Buttons";
import { useNavigate } from "react-router-dom";
import { comida } from "../utils/database";
import Customer from "../components/Customer";
import useForm from "../hooks/useForm";
import ItemFood from "../components/ItemFood";

const initialForm = {
  customerFood1: false,
  customerFood2: false,
};

const validationForm = (form) => {
  let errors = [];

  return errors;
};

export default function Food() {
  const navigate = useNavigate();
  const { form, handleOnChange, handleOnBlur, handleConfirm } = useForm(
    initialForm,
    validationForm
  );

  const id1 = JSON.parse(localStorage.getItem("clientes"));
  const id2 = JSON.parse(localStorage.getItem("clientes"));

  const idCust1 = id1[0];
  const idCust2 = id2[1];

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
        {comida.map((item, id) => (
          <ItemFood
            key={id}
            img1={item.image}
            title1={item.title}
            txt1={`$ ${item.price}`}
            name1="customerFood1"
            name2="customerFood2"
            value1="customerFood1"
            value2="customerFood2"
            id1="customerFood1"
            id2="customerFood2"
            onBlur1={handleOnBlur}
            onBlur2={handleOnBlur}
            onChange1={handleOnChange}
            onChange2={handleOnChange}
            cheked1={form.customerFood1}
            checked2={form.customerFood2}
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
