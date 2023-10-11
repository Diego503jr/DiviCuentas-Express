import React from "react";

export default function Customer() {
  const name1 = JSON.parse(localStorage.getItem("cliente1"));
  const name2 = JSON.parse(localStorage.getItem("cliente2"));

  return (
    <div className="col-sm-12 d-flex justify-content-lg-end justify-content-center ">
      <div className="mx-4 d-flex flex-column text-black">
        <i
          style={{ color: "green", fontSize: "3rem" }}
          className="bi bi-person-fill"
        ></i>
        {name1}
      </div>

      <div className="mx-4 d-flex flex-column text-black">
        <i
          style={{ color: "blue", fontSize: "3rem" }}
          className="bi bi-person-fill"
        ></i>
        {name2}
      </div>
    </div>
  );
}
