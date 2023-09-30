import React from "react";
import Dashboard from "../components/Dashboard";
import IndividualBills from "../components/IndividualBills";

export default function Bills() {
  return (
    <Dashboard>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 d-flex justify-content-center">
          <h1 className="my-4">Factura</h1>
        </div>
        <div className="col-sm-7 border-bottom border-4 border-black my-2"></div>
        <IndividualBills />
        <div className="col-sm-12 d-flex justify-content-center my-5">
          <h1 className="mx-3">Total a pagar: </h1>
          <h1 className="mx-3">$ 10.20</h1>
        </div>
      </div>
    </Dashboard>
  );
}
