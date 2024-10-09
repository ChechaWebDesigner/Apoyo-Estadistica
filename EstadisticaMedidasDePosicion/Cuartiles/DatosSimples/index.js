import { DatosSimples } from "../../Modules/DatosSimples.js";
import { UI } from "../../Modules/UI.js";

const ui = new UI();

// Btn Calcular

const btnCalcular = document.getElementById("btnCalcularSimple");

btnCalcular.addEventListener("click", () => {
  const datos = new DatosSimples(document.getElementById("valorSimples").value);

    ui.limpiarResultado();

  ui.mostrarRespuesta(datos.calculandoCuartil(1, 4), 1);
  ui.mostrarRespuesta(datos.calculandoCuartil(2, 4), 2);
  ui.mostrarRespuesta(datos.calculandoCuartil(3, 4), 3);


});

// Btn Limpiar

const btnLimpiar = document.getElementById("limpiar");

btnLimpiar.addEventListener("click", () => {
  ui.limpiarResultado();
  document.getElementById("valorSimples").value = "";
});

