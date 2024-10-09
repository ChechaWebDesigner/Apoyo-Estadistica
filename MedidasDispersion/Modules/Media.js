export class MediaNormal {
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
    return this.ordenarArray().length;
  }

  encontrandoSumatoriaX() {
    return this.ordenarArray().reduce(
      (acumulador, actual) => acumulador + actual,
      0
    );
  }

  encontrandoRango() {
    return (
      this.ordenarArray()[this.ordenarArray().length - 1] -
      this.ordenarArray()[0]
    );
  }

  encontrandoMedia() {
    return parseFloat(
      this.encontrandoSumatoriaX() / this.encontrandoN()
    ).toFixed(2);
  }

  encontrandoMediaFinal() {
    console.log(this.ordenarArray());
    console.log(`N es igual a: ${this.encontrandoN()}`);
    console.log(
      `La sumatoria de los elementos X es: ${this.encontrandoSumatoriaX()}`
    );
    const rango = this.encontrandoRango();

    const confibilidad = rango > 3 ? "No es confiable" : "Si es confiable";

    console.log(`El rango es ${rango}`);
    console.log(`La media es ${this.encontrandoMedia()}`);

    return confibilidad;
  }
}
