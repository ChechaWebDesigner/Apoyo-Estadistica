import { ValoresSimples } from "../Modules/estadistica.js";
import { UI } from "../Modules/UI.js";

const nuevo = document.getElementById("limpiar");
const calcular = document.getElementById("btnCalcularSimple");

const ui = new UI();

calcular.addEventListener("click", () => {
  const datos = document.getElementById("valorSimples");

  const estadistica = new ValoresSimples(datos.value);
  ui.clearAnswer();
  ui.showAnswer(estadistica.calculateMD());
});

nuevo.addEventListener("click", () => {
  ui.clearAnswer();
});
