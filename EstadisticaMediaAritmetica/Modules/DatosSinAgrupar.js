import { DatosSimples } from "./DatosSimples.js";

export class DatosSinAgrupar extends DatosSimples {
  constructor(valores, frecuencias) {
    super(valores);
    this.frecuencias = frecuencias;
  }

  convertirArray() {
    const array = [];

    this.valores.forEach((element, i) => {
      array[i] = {
        x: parseFloat(element.value),
        frecuencia: parseFloat(this.frecuencias[i].value),
      };
    });

    return array;
  }

  encontrandoN() {
    return this.convertirArray().reduce((acu, act) => acu + act.frecuencia, 0);
  }

  encontrandofx() {
    const array = this.convertirArray();

    array.forEach((element) => (element.fx = element.x * element.frecuencia));

    return array;
  }

  encontrandoSumatoriaX() {
    return this.encontrandofx().reduce((acu, act) => acu + act.fx, 0);
  }

  encontrandoMediaDirecta() {
    return this.encontrandoSumatoriaX() / this.encontrandoN();
  }

  encontrandoXs() {
    const array = this.convertirArray().sort((a, b) =>
      a.frecuencia > b.frecuencia ? 1 : -1
    );

    return array[array.length - 1];
  }

  encontrandoD() {
    const Xs = this.encontrandoXs();
    const array = this.convertirArray();

    array.forEach((element) => {
      element.d = element.x - Xs.x;
    });

    return array;
  }

  encontrandoFd() {
    const array = this.encontrandoD();

    array.forEach((element) => {
      element.fd = element.frecuencia * element.d;
    });

    return array;
  }

  encontrandoSumatoriaFd() {
    return this.encontrandoFd().reduce((acu, act) => acu + act.fd, 0);
  }

  encontrandoMediaIndirecta() {
    return (
      this.encontrandoXs().x +
      this.encontrandoSumatoriaFd() / this.encontrandoN()
    );
  }

  mensajeFinal() {
    console.log(`El array directo es: `);
    console.log(this.encontrandofx());

    console.log(`El array indirecto es: `);
    console.log(this.encontrandoFd());

    console.log(`El valor de N es ${this.encontrandoN()}`);

    return `El valor de la media directa es ${this.encontrandoMediaDirecta().toFixed(
      2
    )} y el valor de la media indirecta es ${this.encontrandoMediaIndirecta().toFixed(
      2
    )}`;
  }
}
