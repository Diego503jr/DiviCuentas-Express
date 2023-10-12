import React from "react";
import style from "./components.module.css";
import logo from "../assets/v1horizontal.png";

export default function Loader({ visible = false }) {
  return (
    visible && (
      <article
        className={`position-fixed h-100 w-100 ${style.loader} ${style.backgrounds}`}
        tabIndex="-3"
      >
        <div className="container-fluid d-flex justify-content-center h-100 w-100">
          <div className="row d-flex justify-content-center align-items-center w-100">
            <div
              className="col-sm-12 d-flex card bg-transparent border-0 flex-column justify-content-center align-items-center flex-column"
              role="alert"
            >
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-sm-5">
                    <img src={logo} alt={logo} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className=" d-flex align-items-center">
                <div class="spinner-grow text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-dark" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  );
}
