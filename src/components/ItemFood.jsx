import React from "react";
import Check from "./Check";

export default function ItemFood({
  img1,
  id,
  title1,
  description1,
  txt1,
  id1,
  id2,
  value1,
  value2,
  onChange1,
  onChange2,
  name1,
  name2,
  checked1,
  checked2,
}) {
  return (
    <div id={id} className="d-flex flex-wrap col-sm-4 mt-3 mb-4">
      <div className="container">
        <div className="row">
          <div
            style={{ color: "#040100" }}
            className="col-sm-12 d-flex flex-column align-items-center mt-3"
          >
            <img src={img1} alt={img1} className="img-fluid w-25" />
            <h3 className="fs-5 fw-bold">{title1}</h3>
            <i className="fs-6">{description1}</i>
            <p className="fw-normal">{txt1}</p>
            <div className="d-flex">
              <Check
                id={id1}
                name={name1}
                value={value1}
                onChange={onChange1}
                checked={checked1}
              />
              <Check
                id={id2}
                name={name2}
                value={value2}
                onChange={onChange2}
                checked={checked2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
