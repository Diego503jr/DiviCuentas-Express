import tacosImg from "../assets/Tacos.png";
import pizzaImg from "../assets/Pizza.jpg";
import hamburguesaImg from "../assets/Hamburguesa1.png";
import papasFritasImg from "../assets/papas Fritas.png";
import refrescoImg from "../assets/refresco.jpg";
import gaseosaImg from "../assets/gaseosa.jpg";

export let comida = [];

let tacos = {
  title: "Orden de tacos",
  price: "3.50",
  image: tacosImg,
};
let pizza = {
  title: "Porción de pizza",
  price: "1.00",
  image: pizzaImg,
};
let hamburguesa = {
  title: "Hamburguesa sencilla",
  price: "2.30",
  image: hamburguesaImg,
};
let papasFritas = {
  title: "Orden de tacos",
  price: "3.99",
  image: papasFritasImg,
};
let refresco = {
  title: "Refresco natural",
  price: "1.50",
  image: refrescoImg,
};
let gaseosa = {
  title: "Gaseosa de sabores",
  price: "1.25",
  image: gaseosaImg,
};
comida.push(tacos, pizza, hamburguesa, papasFritas, refresco, gaseosa);
