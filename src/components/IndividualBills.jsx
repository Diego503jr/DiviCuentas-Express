import React from "react";

export default function IndividualBills({ nameCustomer, nameFood, priceFood }) {
  return (
    <React.Fragment>
      <div className="col-sm-7 d-flex flex-column align-items-center border-4 border-black border-bottom my-2">
        <h1 className="col-sm-7 d-flex justify-content-center">
          {nameCustomer}
        </h1>
        <div className="container">
          <div className="row d-flex justify-content-center mb-3">
            <div className="col-sm-5 d-flex justify-content-between">
              <div className="fs-4">{nameFood}</div>
              <div className="fs-4">$ {priceFood}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
