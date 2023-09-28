import React from "react";
import Dashboard from "../components/Dashboard";
import amigos from "../assets/Amigos.jpg";
import individual from "../assets/Individual.avif";
import duo from "../assets/Pareja.jpg";
import trio from "../assets/Trio.jpg";
import personalizado from "../assets/Personalizado.png";
import Div from "../components/Div";
import Option from "../components/Option";
import promocion from "../assets/promocion.jpg";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

export default function Home() {
  const navigate = useNavigate();

  const handleOptionUnAvailable = (e) => {
    e.preventDefault();
    alert("Esta opción aún no esta disponible");
  };

  return (
    <React.Fragment>
      <Modal
        onClick={(e) => {
          e.preventDefault();
          navigate("/menu");
        }}
      />
      <Dashboard>
        <div className="row">
          <div
            style={{ color: "#040100" }}
            className="col-sm-6 d-flex flex-column justify-content-center align-items-center"
          >
            <h1
              style={{ fontSize: "3.7rem", color: "#040100" }}
              className="fw-bold lh-1"
            >
              Saborea innovacción, paga sin complicación
            </h1>
            <h2 className="fs-2 fw-bolder mt-5">Misión</h2>
            <p className="">
              Nuestra misión es revolucionar la industria restaurantera a través
              de la innovación tecnológica. Trabajamos para proporcionar a los
              usuarios una plataforma única e interactiva que les permita
              explorar, realizar pedidos y disfrutar de los sabores en los
              mejores restaurantes, todo ello en línea.
            </p>
          </div>
          <div className="col-sm-6">
            <img src={amigos} alt={amigos} className="img-fluid" />
          </div>
          <Div>En Cuanto quisieras dividir</Div>
          <Option
            img1={individual}
            title1="Individual"
            txt1="Uno es mejor que ninguno"
            onClick1={handleOptionUnAvailable}
          />
          <Option img1={duo} title1="Pareja" txt1="Con compañia cae bien" />
          <Option
            img1={trio}
            title1="Trios"
            txt1="Los tres mosqueteros"
            onClick1={handleOptionUnAvailable}
          />
          <Option
            img1={personalizado}
            title1="Personalizado"
            txt1="Si somos varios es mejor"
            onClick1={handleOptionUnAvailable}
          />
          <div className="col-sm-12 d-flex justify-content-center mt-2 border-top border-black border-5">
            <img
              src={promocion}
              alt={promocion}
              className="img-fluid w-50 my-3"
            />
          </div>
        </div>
      </Dashboard>
    </React.Fragment>
  );
}
