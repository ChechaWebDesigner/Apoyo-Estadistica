import { ValoresSinAgrupar } from "../Modules/DatosSinAgrupar.js";
import { UI } from "../Modules/UI.js";
import { limpiarTxt } from "../Funciones/limpiartxt.js";

const buttonAdd = document.getElementById("agregar");
const containerInputs = document.querySelector(".contenedor-2");

let fileNumber = 1;

// Agregar Inputs

buttonAdd.addEventListener("click", () => {
  console.log(fileNumber);
  const fragment = document.createDocumentFragment();
  const container = document.createElement("div"); //El contenedor donde metere los inputs

  const item1 = document.createElement("div"); //Creo los input para cada uno
  const item2 = document.createElement("div"); //Creo los input para cada uno
  const deleter = document.createElement("div"); //Creo los input para cada uno

  item1.classList.add("item");
  item2.classList.add("item");
  deleter.classList.add("deleter");
  container.classList.add("container-jr");

  const inputX = document.createElement("input");
  const inputF = document.createElement("input");

  if (fileNumber === 1) {
    const remove = document.createElement("button");
    remove.classList.add("eliminar");
    remove.textContent = "-";
    deleter.appendChild(remove);
  }

  inputX.setAttribute("type", "text");
  inputF.setAttribute("type", "text");
  container.setAttribute("value", fileNumber);

  inputX.classList.add("valoresX");
  inputF.classList.add("frecuencias");

  item1.appendChild(inputX);
  item2.appendChild(inputF);

  fragment.appendChild(item1);
  fragment.appendChild(item2);
  fragment.appendChild(deleter);

  container.appendChild(fragment);
  containerInputs.appendChild(container);

  if (fileNumber === 1) {
    const eliminar = document.querySelector(".eliminar");
    eliminar.addEventListener("click", () => {
      let elements = document.querySelectorAll(".container-jr");
      containerInputs.removeChild(elements.item(elements.length - 1));
      fileNumber--;
    });
  }

  fileNumber++;
});

// Btn limpiar y calcular

const calcular = document.getElementById("btnCalcular");
const limpiar = document.getElementById("limpiar");

const ui = new UI();

calcular.addEventListener("click", () => {
  const valoresX = document.querySelectorAll(".valoresX");
  const frecuencias = document.querySelectorAll(".frecuencias");

  const estadistica = new ValoresSinAgrupar(valoresX, frecuencias);

  ui.clearAnswer();
  ui.showAnswer2(estadistica.calculateMd());
});

limpiar.addEventListener("click", () => {
  fileNumber = 1;

  const valoresX = document.querySelectorAll(".valoresX");
  const frecuencias = document.querySelectorAll(".frecuencias");
  let elements = document.querySelectorAll(".container-jr");

  ui.clearAnswer();

  elements.forEach((element) => {
    element.remove();
  });

  limpiarTxt(valoresX);
  limpiarTxt(frecuencias);
});
