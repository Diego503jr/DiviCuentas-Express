import React from "react";
import Dashboard from "../components/Dashboard";
import Buttons from "../components/Buttons";
import { useNavigate } from "react-router-dom";
import { comida } from "../utils/database";
import Customer from "../components/Customer";
import { useForm } from "../hooks/useForm";
import ItemFood from "../components/ItemFood";
import Loader from "../components/Loader";

export default function Food() {
  const navigate = useNavigate();
  const {
    loading,
    errorName,
    cliente1,
    cliente2,
    handleCheckbox1Change,
    handleCheckbox2Change,
    handleConfirm,
  } = useForm();

  return (
    <React.Fragment>
      <Loader visible={loading} />
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
          <div className="col-sm-12 d-flex flex-column align-items-center">
            <h1 className="fs-1">Menú</h1>
            {errorName && <div className="text-danger">{errorName}</div>}
          </div>
          {comida.map((item, index) => (
            <ItemFood
              key={index}
              img1={item.image}
              title1={item.title}
              description1={item.description}
              txt1={`$ ${item.price}`}
              name1={`cliente1`}
              name2={`cliente2`}
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
              style={{ backgroundColor: "green" }}
              onClick={handleConfirm}
              className="btn fs-5 fw-bolder"
            >
              <div className="mx-4 text-white">Confirmar</div>
            </button>
          </div>
        </div>
      </Dashboard>
    </React.Fragment>
  );
}
