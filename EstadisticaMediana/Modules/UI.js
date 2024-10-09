export class UI {
  resultados = document.querySelector(".resultados");
  insertarDatos = document.querySelector(".datos");
  mensaje = document.querySelector(".mensaje");
  datos = document.getElementById("valorSimples");

  constructor() {}

  showAnswer(answer) {
    this.resultados.style.display = "block";
    this.insertarDatos.innerHTML += this.datos.value;
    this.mensaje.innerHTML += `<b>Es</b>: ${answer}`;
    this.datos.value = "";
  }

  clearAnswer() {
    this.insertarDatos.innerHTML = "";
    this.mensaje.innerHTML = "";
    this.resultados.style.display = "none";
  }

  showAnswer2(answer){
    this.resultados.style.display = "block";
    this.mensaje.innerHTML += `<b>Es</b>: ${answer}`;
  }
}
