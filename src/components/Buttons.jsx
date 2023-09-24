import React from "react";

export default function Buttons({ ...props }) {
  return (
    <button className="btn" {...props}>
      <i style={{ fontSize: "2rem" }} className="bi bi-arrow-left"></i>
    </button>
  );
}
