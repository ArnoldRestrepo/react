// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react"; // Analogía de Create Element
import ReactDOM from "react-dom"; // Analogía de Append Child
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import BadgeNew from "./pages/BadgeNew.js";
import Badges from "./pages/Badges.js";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badges />, container);
