import { MediaNormal } from "./Media.js";

export class DesviacionMedia extends MediaNormal {
  constructor(valores) {
    super(valores);
  }

  encontrandoMedia() {
    return super.encontrandoSumatoriaX() / super.encontrandoN();
  }

  encontrarValorAbsolutoD() {
    const media = this.encontrandoMedia().toFixed(2);

    const elementos = super.ordenarArray();

    const arrayConD = [];

    elementos.forEach((element, i) => {
      arrayConD[i] = {
        x: element,
        d: element - media,
      };
    });

    arrayConD.forEach((element) => {
      element.d = element.d > 0 ? element.d : element.d * -1;
      element.d = element.d.toFixed(2);
      element.d = parseFloat(element.d)
    });

    return arrayConD;
  }

  encontrandoSumatoriaD() {
    return this.encontrarValorAbsolutoD().reduce((acu, act) => acu + act.d, 0);
  }

  encontrandoDM() {
    return this.encontrandoSumatoriaD() / super.encontrandoN();
  }

  mensajeFinal() {
    console.log(this.encontrarValorAbsolutoD());
    console.log(`N es igual a: ${super.encontrandoN()}`);
    console.log(
      `La sumatoria de los elementos X es: ${super.encontrandoSumatoriaX()}`
    );

    console.log(
      `La sumatoria de los elementos d es ${this.encontrandoSumatoriaD().toFixed(2)}`
    );

    console.log(`La media es ${this.encontrandoMedia().toFixed(2)}`);

    return `La desviacion media es: ${this.encontrandoDM().toFixed(2)}`;
  }
}
