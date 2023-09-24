import React from "react";

export default function Check({ text, id, ...props }) {
  return (
    <div>
      <input
        className="form-check-input border-dark"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
    </div>
  );
}
