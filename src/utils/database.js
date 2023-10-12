import tacosImg from "../assets/Tacos.png";
import pizzaImg from "../assets/Pizza.jpg";
import hamburguesaImg from "../assets/Hamburguesa1.png";
import papasFritasImg from "../assets/papasFritas.png";
import refrescoImg from "../assets/refresco.jpg";
import gaseosaImg from "../assets/gaseosa.jpg";

export let comida = [];

let tacos = {
  id: 0,
  title: "Tacos de birria",
  price: "3.50",
  description:
    "Deliciosos tacos de birria preparados con carne de res marinada en adobo y cocida a fuego lento. Acompañados de cebolla, cilantro y salsa.",
  image: tacosImg,
};
let pizza = {
  id: 1,
  title: "Pizza tradicional",
  description:
    "Una pizza clásica con salsa de tomate, queso mozzarella y peperoni. Horneada a la perfección.",
  price: "1.50",
  image: pizzaImg,
};
let hamburguesa = {
  id: 2,
  title: "Hamburguesa sencilla",
  description:
    "Una jugosa hamburguesa de carne de res con lechuga, tomate y mayonesa, servida en un pan suave y fresco.",
  price: "2.25",
  image: hamburguesaImg,
};
let papasFritas = {
  id: 3,
  title: "Papas fritas",
  description:
    "Crujientes y doradas, nuestras papas fritas son el acompañamiento perfecto para cualquier platillo.",
  price: "3.99",
  image: papasFritasImg,
};
let refresco = {
  id: 4,
  title: "Refresco de Horchata",
  description:
    "Una refrescante bebida de horchata, preparada con arroz, canela y vainilla. Dulce y deliciosa.",
  price: "1.00",
  image: refrescoImg,
};
let gaseosa = {
  id: 5,
  title: "Coca Cola",
  description:
    "La clásica Coca Cola, burbujeante y refrescante, perfecta para acompañar tus comidas favoritas.",
  price: "1.25",
  image: gaseosaImg,
};
comida.push(tacos, pizza, hamburguesa, papasFritas, refresco, gaseosa);
