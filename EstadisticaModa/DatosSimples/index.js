import { DatosSimples } from "../Modules/DatosSimples.js";
import { UI } from "../Modules/UI.js";

const ui = new UI();

// Btn Calcular

const btnCalcular = document.getElementById("btnCalcularSimple");

btnCalcular.addEventListener("click", () => {
  const datos = new DatosSimples(document.getElementById("valorSimples").value);

  ui.limpiarResultado();

  ui.mostrarResultado(datos.calcularModa());
});

// Btn Limpiar

const btnLimpiar = document.getElementById("limpiar");

btnLimpiar.addEventListener("click", () => {
  ui.limpiarResultado();
  document.getElementById("valorSimples").value = "";
});
