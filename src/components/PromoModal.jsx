import React from "react";

export default function PromoModal() {
  function enviarEmail() {
    const email = document.getElementById("emailInput").value;
    const asunto = "Contacto desde DiviCuentas Express";
    const cuerpo = document.getElementById("cuerpoInput").value;

    var link =
      "mailto:innovacionesgastrotech@gmail.com?subject=" +
      encodeURIComponent(asunto) +
      "&body=" +
      encodeURIComponent(cuerpo) +
      "&cc=" +
      email;
    window.location.href = link;
  }
  return (
    <div
      className="modal fade"
      id="promoModal"
      tabIndex="-1"
      aria-labelledby="promoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
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
            Estimado Usuario,
            <hr />
            <p>
              Es un placer para nosotros en Innovaciones Gastrotech recibir su
              contacto. Apreciamos sinceramente su interés en nuestros servicios
              especializados en tecnología.
            </p>
            <p>
              Para expresar nuestro agradecimiento, nos gustaría ofrecerle un
              cupón con un descuento especial en su próxima compra
              <strong> El cuál lo recibirá por email</strong>. Este cupón le
              permitirá disfrutar de nuestras innovadoras soluciones a un precio
              aún más conveniente.
            </p>
            <p>
              Estamos seguros de que quedará encantado con la calidad y
              eficiencia de nuestras tecnologías, diseñadas para optimizar su
              experiencia en el ámbito gastronómico y tecnologico.
            </p>
            <p>
              Quedamos a su disposición para cualquier consulta adicional o
              asistencia que pueda necesitar. Esperamos tener el privilegio de
              servirle.
            </p>
            Atentamente,
            <hr />
            <strong>Innovaciones gastrotech</strong>
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
              style={{ backgroundColor: "blue" }}
              type="button"
              className="btn text-white"
              data-bs-dismiss="modal"
              onClick={(e) => {
                e.preventDefault();
                enviarEmail();
              }}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
