import React from "react";
import Check from "./Check";

export default function Option({
  img1,
  title1,
  txt1,
  onClick1,
  food,
  text,
  id,
  ...props
}) {
  return (
    <label
      style={{ cursor: "pointer" }}
      className={`${food ? "col-sm-4 mt-1 mb-3" : "col-sm-6 mt-1 mb-3"}`}
    >
      <div className="container">
        <div className="row">
          <div
            style={{ color: "#040100" }}
            className="col-sm-12 d-flex flex-column align-items-center mt-3"
          >
            <img src={img1} alt={img1} className="img-fluid w-25" />
            <h3 className="fs-5 fw-bold">{title1}</h3>
            <p className="fw-normal">{txt1}</p>
            {food ? (
              <Check text={text} id={id} {...props} />
            ) : (
              <button
                style={{ backgroundColor: "#E22717" }}
                className="btn rounded-5 text-white fs-6"
                onClick={onClick1}
              >
                Seleccionar
              </button>
            )}
          </div>
        </div>
      </div>
    </label>
  );
}
