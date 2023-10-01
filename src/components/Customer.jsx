import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function Customer() {
  const auth = useAuth();

  return (
    <div className="row">
      <div className="col-sm-5 text-black">
        <i
          style={{ color: "green", fontSize: "3rem" }}
          className="bi bi-person-fill"
        ></i>
        {auth.customer1}
      </div>

      <div className="col-sm-5 text-black">
        <i
          style={{ color: "blue", fontSize: "3rem" }}
          className="bi bi-person-fill"
        ></i>
        {auth.customer2}
      </div>
    </div>
  );
}
