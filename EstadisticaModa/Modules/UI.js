export class UI {
  contenedorResultados = document.querySelector(".resultados");
  contenedorRespuesta = document.querySelector(".mensaje");
  datos = document.querySelector(".datos");
  tipoModa = document.querySelector(".tipoModa");

  constructor() {}

  recorrerRespuesta(respuesta) {
    respuesta.forEach((element) => {
      this.contenedorRespuesta.innerHTML += `${element.datoX} <br>`;
    });
  }

  recorrerRespuestaMocMoi(respuesta) {
    respuesta.forEach((element, i) => {
      this.contenedorRespuesta.innerHTML += `${
        i + 1
      }. La moda cruda del dato con limite inferior ${
        element.Li
      } y limite superior ${element.Ls} es: ${
        element.Moc.toFixed(2)
      } y la moda interpolada es ${element.Moi.toFixed(2)}<br>`;
    });
    console.log(respuesta)
  }

  mostrarResultado(respuesta) {
    if (respuesta.length == 1) {
      this.recorrerRespuesta(respuesta);
    } else if (respuesta.length == 2) {
      this.tipoModa.innerHTML = "bimodal";
      this.recorrerRespuesta(respuesta);
    } else if (respuesta.length === 3) {
      this.tipoModa.innerHTML = "trimodal";
      this.recorrerRespuesta(respuesta);
    } else {
      this.tipoModa.innerHTML = "plurimodal";
      this.recorrerRespuesta(respuesta);
    }
    this.contenedorResultados.style.display = "block";
  }

  mostrarResultadoMocYMoi(respuesta) {
    if (respuesta.length == 1) {
      this.recorrerRespuestaMocMoi(respuesta);
    } else if (respuesta.length == 2) {
      this.tipoModa.innerHTML = "bimodal";
      this.recorrerRespuestaMocMoi(respuesta);
    } else if (respuesta.length === 3) {
      this.tipoModa.innerHTML = "trimodal";
      this.recorrerRespuestaMocMoi(respuesta);
    } else {
      this.tipoModa.innerHTML = "plurimodal";
      this.recorrerRespuestaMocMoi(respuesta);
    }
    this.contenedorResultados.style.display = "block";
  }

  limpiarResultado() {
    this.contenedorResultados.style.display = "none";
    this.contenedorRespuesta.innerHTML = "";
    this.datos.innerHTML = "";
    this.tipoModa.innerHTML = "";
  }
}
