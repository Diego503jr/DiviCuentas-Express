import React from "react";
import "./components.css";

export default function Check({ ...props }) {
  return (
    <label className="mx-4 d-flex flex-column align-items-center">
      <input
        style={{ cursor: "pointer" }}
        className={`form-check-input border-dark`}
        type="checkbox"
        {...props}
      />
    </label>
  );
}
