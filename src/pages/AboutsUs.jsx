import React from "react";
import Dashboard from "../components/Dashboard";
import fotoDIego from "../assets/diegoCV.jpg";
import fotoSarai from "../assets/saraiCV.jpg";
import fotoUlises from "../assets/ulisesCV.jpg";
import fotoCalos from "../assets/CalosCV.jpg";

export default function AboutsUs() {
  return (
    <Dashboard>
      <div className="row my-3">
        <h1>Acerca de nosotros</h1>
        <div className="col-sm-12 ">
          <hr />
          <div className="mx-md-5 my-5">
            <h3>Acerca de la idea</h3>
            Esta idea de negocio es un servicio que cuenta con un menú digital e
            intuitivo, donde se da a conocer al cliente la existencia de los
            platillos que el establecimiento ofrezca y de manera inmediata el
            pedido realizado por el cliente es enviado a cocina para su
            preparación. El servicio consiste en automatizar, gestionar
            eficientemente los pedidos en restaurantes y facilitar la división
            de cuentas entre los comensales, desde dos a más personas. El
            servicio cuenta con un sistema web con una interfaz amigable, para
            que el personal pueda registrar los pedidos de manera eficaz y con
            información exacta. Así mismo para que los clientes realicen los
            pedidos en el sistema web desde sus dispositivos móviles, en este
            sistema se ha implementado una función de control del tiempo para
            los pedidos y una herramienta de división de cuentas, simplificando
            el proceso de pago individual, con el objetivo de mejorar la
            experiencia del cliente, aumentar la satisfacción general en el
            consumo gastronómico y optimizar la operatividad del restaurante. En
            un futuro se busca implementar una función de multilenguaje.
          </div>
          <hr />
        </div>
        <div className="col-sm-6 text-center">
          <h3>Nuestra misión</h3>
          <p className="mx-5">
            Nuestra misión es transformar la experiencia gastronómica a través
            de la innovación tecnológica. Nos esforzamos por ofrecer a nuestros
            usuarios una forma única e interactiva de explorar, ordenar y
            disfrutar los deliciosos platos en los mejores restaurantes.
          </p>
        </div>
        <div className="col-sm-6 text-center">
          <h3>Nuestra visión</h3>
          <p className="mx-5">
            Buscamos revolucionar la industria restaurantera a nivel nacional
            con una plataforma tecnológica innovadora que optimice la gestión de
            pedidos, la comunicación con los clientes y la eficiencia operativa.
            Queremos ser el socio preferido de los restaurantes y transformar la
            experiencia de comer en la era digital.
          </p>
        </div>
        <hr />
        <div className="col-sm-12">
          <h3>Fundadores :</h3>
        </div>
        <div className="col-sm-6 d-flex flex-column align-items-center mt-3">
          <img
            className="img-fluid w-50 rounded rounded-5"
            src={fotoDIego}
            alt={fotoDIego}
          />
          <p className="fs-5">
            Nombre: <strong>Diego Carías</strong>
          </p>
          <p className="fs-5">
            Rol: <strong>CEO</strong> <i>Director Ejecutivo</i>
          </p>
        </div>
        <div className="col-sm-6 d-flex flex-column align-items-center mt-3">
          <img
            className="img-fluid w-50 rounded rounded-5"
            src={fotoSarai}
            alt={fotoSarai}
          />
          <p className="fs-5">
            Nombre: <strong>Saraí Villalta</strong>
          </p>
          <p className="fs-5">
            Rol: <strong>CTO</strong> <i>Directora de Tecnología</i>
          </p>
        </div>
        <div className="col-sm-6 d-flex flex-column align-items-center mt-3">
          <img
            className="img-fluid w-50 rounded rounded-5"
            src={fotoUlises}
            alt={fotoUlises}
          />
          <p className="fs-5">
            Nombre: <strong>Ulises Rivera</strong>
          </p>
          <p className="fs-5">
            Rol: <strong>CMO</strong> <i>Director de Marketing</i>
          </p>
        </div>
        <div className="col-sm-6 d-flex flex-column align-items-center mt-3">
          <img
            className="img-fluid w-50 rounded rounded-5"
            src={fotoCalos}
            alt={fotoCalos}
          />
          <p className="fs-5">
            Nombre: <strong>Carlos Martínez</strong>
          </p>
          <p className="fs-5">
            Rol: <strong>COO</strong> <i>Director de operaciones</i>
          </p>
        </div>
        <hr />
      </div>
    </Dashboard>
  );
}
