export class UI {
  Resultados = document.querySelector(".resultados");
  Cuartil = document.querySelector(".Cuartil");
  constructor() {}

  mostrarRespuesta(respuesta, NoQ, tipo) {
    this.Cuartil.innerHTML += `El ${tipo} ${NoQ} es: ${respuesta.toFixed(2)} <br>`;
    this.Resultados.style.display = "block";
  }

  limpiarResultado() {
    this.Resultados.style.display = "none";
    this.Cuartil.innerHTML = "";
  }
}
