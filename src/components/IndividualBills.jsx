import React from "react";

export default function IndividualBills({ nameFood, priceFood }) {
  return (
    <React.Fragment>
      <div className="col-sm-7 d-flex flex-column align-items-center my-2">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 d-flex justify-content-between">
              <div className="fs-4">{nameFood}</div>
              <div className="fs-4">$ {priceFood}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
