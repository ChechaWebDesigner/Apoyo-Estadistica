import { limpiarTxt } from "./../../../EstadisticaMediana/Funciones/limpiartxt.js";
import { UI } from "./../../Modules/UI.js";
import { DatosAgrupados } from "../../Modules/DatosAgrupados.js";

const buttonAdd = document.getElementById("agregar");
const containerInputs = document.querySelector(".contenedor-2");

let fileNumber = 1;

buttonAdd.addEventListener("click", () => {
  const fragment = document.createDocumentFragment();
  const container = document.createElement("div"); //El contenedor donde metere los inputs

  const item1 = document.createElement("div"); //Creo los input para cada uno
  const item2 = document.createElement("div"); //Creo los input para cada uno
  const item3 = document.createElement("div"); //Creo los input para cada uno
  const deleter = document.createElement("div"); //Creo los input para cada uno
  const lineDivisor = document.createElement("div");

  item1.classList.add("col-2");
  item2.classList.add("col-2");
  item3.classList.add("col-5");
  lineDivisor.classList.add("Divisor-Line");
  lineDivisor.classList.add("col-1");
  deleter.classList.add("deleter");
  container.classList.add("container-jr");

  const inputLi = document.createElement("input");
  const inputLs = document.createElement("input");
  const inputF = document.createElement("input");

  if (fileNumber === 1) {
    const remove = document.createElement("button");
    remove.classList.add("eliminar");
    remove.textContent = "-";
    deleter.appendChild(remove);
  }

  inputLi.setAttribute("type", "text");
  inputLs.setAttribute("type", "text");
  inputF.setAttribute("type", "text");
  container.setAttribute("value", fileNumber);

  inputLi.classList.add("valoresLi");
  inputLs.classList.add("valoresLs");
  inputF.classList.add("frecuencias");

  item1.appendChild(inputLi);
  item2.appendChild(inputLs);
  item3.appendChild(inputF);

  lineDivisor.innerHTML = "-";

  fragment.appendChild(item1);
  fragment.appendChild(lineDivisor);
  fragment.appendChild(item2);
  fragment.appendChild(item3);
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

// Determinando opcion a elegir

const opciones = document.querySelectorAll(".opcion");
let opcionElegida = null;

opciones.forEach((element) => {
  element.addEventListener("click", () => {
    opcionElegida = element.value;
  });
});

// Instanciando objeto UI

const ui = new UI();

// Btn Calcular

const calcular = document.getElementById("btnCalcular");

calcular.addEventListener("click", () => {
  const respuesta = new DatosAgrupados(
    document.querySelectorAll(".valoresLi"),
    document.querySelectorAll(".valoresLs"),
    document.querySelectorAll(".frecuencias")
  );

  if (opcionElegida == 1) {
    for (let i = 1; i < 4 ; i++) {
    ui.mostrarRespuesta(respuesta.encontrandoRespuesta(i, 4), i, "Cuartil");
    }
  } else if (opcionElegida == 2) {
    for (let i = 1; i < 10; i++) {
      ui.mostrarRespuesta(respuesta.encontrandoRespuesta(i, 10), i, "Decil");
    }
  } else if (opcionElegida == 3) {
    for (let i = 1; i < 100; i++) {
      ui.mostrarRespuesta(respuesta.encontrandoRespuesta(i, 100), i, "Centil");
    }
  } else {
    alert("Seleccione un aopcion");
  }

  //   console.log(answer)
});

// Btn Limpiar

const limpiar = document.getElementById("limpiar");

limpiar.addEventListener("click", () => {
  const elementos = document.querySelectorAll(".container-jr");

  ui.limpiarResultado();

  limpiarTxt(document.querySelectorAll(".valoresLi"));
  limpiarTxt(document.querySelectorAll(".valoresLs"));
  limpiarTxt(document.querySelectorAll(".frecuencias"));

  elementos.forEach((elem) => {
    elem.remove();
  });

  fileNumber = 1;
});