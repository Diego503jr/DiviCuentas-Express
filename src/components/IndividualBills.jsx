import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function IndividualBills() {
  const auth = useAuth();

  return (
    <React.Fragment>
      <div className="col-sm-7 d-flex flex-column align-items-center border-4 border-black border-bottom my-2">
        <h1 className="col-sm-7 d-flex justify-content-center">
          {auth.customer1}
        </h1>
        <div className="container">
          <div className="row d-flex justify-content-center mb-3">
            <div className="col-sm-5 d-flex justify-content-between">
              <div className="fs-4">Soda</div>
              <div className="fs-4">$ 0.70</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mb-3">
            <div className="col-sm-5 d-flex justify-content-between">
              <div className="fs-4">Papas</div>
              <div className="fs-4">$ 1.40</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mb-3">
            <div className="col-sm-5 d-flex justify-content-between">
              <div className="fs-4">Tacos</div>
              <div className="fs-4">$ 3.40</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mb-3">
            <div className="col-sm-4 d-flex justify-content-between">
              <div className="fs-4 fw-bolder">Total</div>
              <div className="fs-4 fw-bolder">$ 3.40</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-7 d-flex flex-column align-items-center border-4 border-black border-bottom my-2">
        <h1 className="col-sm-7 d-flex justify-content-center">
          {auth.customer2}
        </h1>
        <div className="container">
          <div className="row d-flex justify-content-center mb-3">
            <div className="col-sm-5 d-flex justify-content-between">
              <div className="fs-4">Soda</div>
              <div className="fs-4">$ 0.70</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mb-3">
            <div className="col-sm-5 d-flex justify-content-between">
              <div className="fs-4">Papas</div>
              <div className="fs-4">$ 1.40</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mb-3">
            <div className="col-sm-5 d-flex justify-content-between">
              <div className="fs-4">Tacos</div>
              <div className="fs-4">$ 3.40</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mb-3">
            <div className="col-sm-4 d-flex justify-content-between">
              <div className="fs-4 fw-bolder">Total</div>
              <div className="fs-4 fw-bolder">$ 3.40</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
