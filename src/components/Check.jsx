import React from "react";
import "./components.css";

export default function Check({ text, id, person, ...props }) {
  return (
    <label className="mx-4 d-flex flex-column align-items-center">
      <input
        className={`form-check-input border-dark`}
        type="checkbox"
        id={id}
        {...props}
      />
    </label>
  );
}
