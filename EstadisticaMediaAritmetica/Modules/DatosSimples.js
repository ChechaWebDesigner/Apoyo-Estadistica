export class DatosSimples {
  constructor(valores) {
    this.valores = valores;
  }

  convertirArray() {
    return this.valores.split(",");
  }

  convertirANumero() {
    return this.convertirArray().map((element) => parseFloat(element));
  }

  ordenarArray() {
    return this.convertirANumero().sort((a, b) => (a > b ? 1 : -1));
  }

  encontrandoN() {
    return this.convertirArray().length;
  }

  encontrandoSumatoriaX() {
    return this.ordenarArray().reduce((acu, act) => acu + act, 0);
  }

  encontrandoMedia() {
    return this.encontrandoSumatoriaX() / this.encontrandoN();
  }

  mensajeFinal() {
    console.log(`Los elementos son: `);
    console.log(this.ordenarArray());

    console.log(`La sumatoria de X es: ${this.encontrandoSumatoriaX()}`);

    return this.encontrandoMedia().toFixed(2);
  }
}
