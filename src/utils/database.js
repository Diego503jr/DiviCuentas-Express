import tacosImg from "../assets/Tacos.png";
import pizzaImg from "../assets/Pizza.jpg";
import hamburguesaImg from "../assets/Hamburguesa1.png";
import papasFritasImg from "../assets/papasFritas.png";
import refrescoImg from "../assets/refresco.jpg";
import gaseosaImg from "../assets/gaseosa.jpg";

export let comida = [];

let tacos = {
  id: 0,
  title: "Orden de tacos",
  price: "3.50",
  image: tacosImg,
};
let pizza = {
  id: 1,
  title: "Porción de pizza",
  price: "1.50",
  image: pizzaImg,
};
let hamburguesa = {
  id: 2,
  title: "Hamburguesa sencilla",
  price: "2.25",
  image: hamburguesaImg,
};
let papasFritas = {
  id: 3,
  title: "Papas fritas",
  price: "3.99",
  image: papasFritasImg,
};
let refresco = {
  id: 4,
  title: "Refresco natural",
  price: "1.00",
  image: refrescoImg,
};
let gaseosa = {
  id: 5,
  title: "Gaseosa de sabores",
  price: "1.25",
  image: gaseosaImg,
};
comida.push(tacos, pizza, hamburguesa, papasFritas, refresco, gaseosa);
