import React from "react";

export default function Customer() {
  const name1 = JSON.parse(localStorage.getItem("first"));
  const name2 = JSON.parse(localStorage.getItem("second"));

  return (
    <div className="row">
      <div className="col-sm-5 text-black">
        <i
          style={{ color: "green", fontSize: "3rem" }}
          className="bi bi-person-fill"
        ></i>
        {name1}
      </div>
      <div className="col-sm-5 text-black">
        <i
          style={{ color: "blue", fontSize: "3rem" }}
          className="bi bi-person-fill"
        ></i>
        {name2}
      </div>
    </div>
  );
}
