import React from "react";

export default function Option({
  img1,
  title1,
  txt1,
  onClick1,
  dataBsToggle,
  dataBsTarget,
}) {
  return (
    <div className="d-flex flex-wrap col-sm-6 mt-3 mb-4">
      <div className="container">
        <div className="row">
          <div
            style={{ color: "#040100" }}
            className="col-sm-12 d-flex flex-column align-items-center mt-3"
          >
            <img src={img1} alt={img1} className="img-fluid w-25" />
            <h3 className="fs-5 fw-bold">{title1}</h3>
            <p className="fw-normal">{txt1}</p>
            <button
              style={{ backgroundColor: "#E22717", cursor: "pointer" }}
              className="btn rounded-5 text-white fs-6"
              onClick={onClick1}
              data-bs-toggle={dataBsToggle}
              data-bs-target={dataBsTarget}
            >
              Seleccionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
