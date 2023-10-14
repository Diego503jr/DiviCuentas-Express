import React from "react";
import style from "./components.module.css";

export default function Check({ person, ...props }) {
  return (
    <label className="mx-4 d-flex flex-column align-items-center">
      <input
        style={{ cursor: "pointer" }}
        className={`form-check-input border-dark ${
          person === 1 ? style.check1 : style.check2
        }`}
        type="checkbox"
        {...props}
      />
    </label>
  );
}
