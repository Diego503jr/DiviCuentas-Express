import React from "react";
import logotipo from "../assets/logopng.png";

export default function Navbar() {
  return (
    <nav className="col-sm-12 navbar navbar-expand-lg sticky-top bg-warning">
      <div className="container-fluid">
        <button className="navbar-brand btn">
          <img src={logotipo} alt={logotipo} className="img-flluid w-25" />
        </button>
      </div>
    </nav>
  );
}
