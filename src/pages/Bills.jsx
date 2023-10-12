import React from "react";
import Dashboard from "../components/Dashboard";
import IndividualBills from "../components/IndividualBills";
import { useForm } from "../hooks/useForm";
import Loader from "../components/Loader";

export default function Bills() {
  const { handlePayment, loading } = useForm();
  const name1 = JSON.parse(localStorage.getItem("cliente1"));
  const name2 = JSON.parse(localStorage.getItem("cliente2"));

  const payCliente1 = JSON.parse(localStorage.getItem("comidaCliente1"));
  const payCliente2 = JSON.parse(localStorage.getItem("comidaCliente2"));

  const totalCliente1 = payCliente1.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  const totalCliente2 = payCliente2.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  const totalCombinado = totalCliente1 + totalCliente2;

  return (
    <React.Fragment>
      <Loader visible={loading} />
      <Dashboard>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 d-flex justify-content-center">
            <h1 className="my-4">Factura</h1>
          </div>
          <div className="col-sm-7 border-bottom border-4 border-black my-2"></div>
          <h1 className="col-sm-7 d-flex justify-content-center">{name1}</h1>
          {payCliente1.map((item) => (
            <IndividualBills
              key={item.id}
              nameFood={item.title}
              priceFood={parseFloat(item.price).toFixed(2)}
            />
          ))}
          <div className="col-sm-7 fw-bold fs-5 my-2">
            Total 1° persona: $ {totalCliente1.toFixed(2)}
          </div>
          <h1 className="col-sm-7 d-flex justify-content-center border-4 border-black border-top">
            {name2}
          </h1>
          {payCliente2.map((item) => (
            <IndividualBills
              key={item.id}
              nameFood={item.title}
              priceFood={parseFloat(item.price).toFixed(2)}
            />
          ))}
          <div className="col-sm-7 fw-bold fs-5 mt-2">
            Total 2° persona: $ {totalCliente2.toFixed(2)}
          </div>
          <div className="col-sm-7 d-flex justify-content-center border-4 border-black border-top my-2">
            <h1 className="mx-3 mt-3">Total a pagar: </h1>
            <h1 className="mx-3 mt-3">$ {totalCombinado.toFixed(2)}</h1>
          </div>

          <div className="col-sm-7 d-flex justify-content-center my-2">
            <button className="btn btn-primary" onClick={handlePayment}>
              <div className="fs-5 mx-4">Pagar</div>
            </button>
          </div>
        </div>
      </Dashboard>
    </React.Fragment>
  );
}
