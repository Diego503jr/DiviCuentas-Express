import React from "react";

export default function Div({ children, empty }) {
  return empty ? (
    <div
      style={{ backgroundColor: "#040100" }}
      className="w-100 col-12 h-25"
    ></div>
  ) : (
    <div
      style={{ backgroundColor: "#FFA500" }}
      className="text-white fw-bold text-uppercase col-sm-12 fs-2 d-flex justify-content-center"
    >
      {children}
    </div>
  );
}
