export class UI {
  contenedor = document.querySelector(".resultados");
  miniContenedor = document.querySelector(".resultadoMedia");
  constructor() {}

  mostrarRespuesta(respuesta) {
    this.limpiarRespuesta();
    this.contenedor.style.display = "block"
    this.miniContenedor.innerHTML = respuesta;
  }

  limpiarRespuesta() {
    this.contenedor.style.display = "none"
    this.miniContenedor.innerHTML = "";
  }
}
