import React from "react";

export default function DesarrolloModal() {
  return (
    <div
      className="modal fade"
      id="endesarrollo"
      tabindex="-1"
      aria-labelledby="endesarrolloLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-body-secondary">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              DiviCuentas Express
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Esta opción aún no esta disponible. :'C
          </div>
          <div className="modal-footer bg-body-secondary">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
