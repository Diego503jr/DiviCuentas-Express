import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";

const initialForm = {
  name1: "",
  name2: "",
};

const validationForm = (form) => {
  let errors = {};

  if (!form.name1.trim()) {
    errors.name1 = "Campo vacío";
  } else if (!form.name2.trim()) {
    errors.name2 = "Campo vacío";
  }

  return errors;
};

export const AcceptModal = () => {
  const { form, loading, handleOnBlur, handleOnChange, handleGetData } =
    useForm(initialForm, validationForm);
  return (
    <React.Fragment>
      <Loader visible={loading} />
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-body-secondary">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Ingrese el nombre o apellido
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div style={{ backgroundColor: "#f5f5dc" }} className="modal-body">
              <div className="mb-3 mt-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Nombre 1° persona
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name1"
                  name="name1"
                  value={form.name1}
                  onChange={handleOnChange}
                  onBlur={handleOnBlur}
                  placeholder="Nombre"
                />
                {/* {errors.name1 && (
                <div className="text-danger">{errors.name1}</div>
              )} */}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Nombre 2° persona
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name2"
                  name="name2"
                  value={form.name2}
                  onChange={handleOnChange}
                  onBlur={handleOnBlur}
                  placeholder="Nombre"
                />
                {/* {errors.name2 && (
                <div className="text-danger">{errors.name2}</div>
              )} */}
              </div>
            </div>
            <div className="modal-footer bg-body-secondary">
              <button
                style={{ backgroundColor: "red" }}
                type="button"
                className="btn text-white"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                onClick={handleGetData}
                style={{ backgroundColor: "green" }}
                type="button"
                className="btn text-white"
                data-bs-dismiss="modal"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
