export class UI {
  resultadosContenedor = document.querySelector(".resultados");
  mensaje = document.querySelector(".mensaje")
  constructor() {}

  mostrarRespuesta(respuesta) {
    this.mensaje.innerHTML = "";
    this.resultadosContenedor.style.display = "block";
    this.mensaje.innerHTML += respuesta 
  }

  limpiarRespuesta() {
    this.resultadosContenedor.style.display = "none";
    this.mensaje.innerHTML = "";
  }
}
