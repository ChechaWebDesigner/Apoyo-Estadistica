import { DesviacionEstandar } from "../../Modules/DesviacionEstandarSimple.js";
import { UI } from "../../Modules/UI.js";

const datos = document.getElementById("datos");
const ui = new UI();
const calcular = document.getElementById("btnCalcular");

calcular.addEventListener("click", (e) => {
  let elementosX = datos.value;

    const nuevoCalculo = new DesviacionEstandar(elementosX);

    ui.mostrarRespuesta(nuevoCalculo.mensajeFinal());
});


const limpiar = document.getElementById("limpiar");

limpiar.addEventListener("click", () => {
  ui.limpiarRespuesta();
  document.getElementById("datos").value = "";
});

