import { MediaNormal } from "./Media.js";

export class DesviacionEstandar extends MediaNormal {
  constructor(valores) {
    super(valores);
  }

  encontrandoD() {
    const array = super.ordenarArray();
    const media = super.encontrandoMedia();

    const arrayFinal = [];

    array.forEach((element, i) => {
      arrayFinal[i] = {
        x: element,
        d: element - media,
      };
    });

    return arrayFinal;
  }

  encontrandoD2() {
    const array = this.encontrandoD();
    array.forEach((element) => {
      element.d2 = parseFloat((element.d * element.d).toFixed(2));
    });

    return array;
  }

  encontrandoSumatoriaD() {
    return this.encontrandoD2().reduce((acu, act) => acu + act.d2, 0);
  }

  encontrandoV() {
    return this.encontrandoSumatoriaD() / super.encontrandoN();
  }

  encontrandoS() {
    return Math.sqrt(this.encontrandoV());
  }

  mensajeFinal() {
    console.log(`El array es: `);
    console.log(this.encontrandoD2());

    console.log(
      `La sumatoria de los elementos x es ${super.encontrandoSumatoriaX()}`
    );

    console.log(`La media es: ${super.encontrandoMedia()}`);

    console.log(`V es; ${this.encontrandoV()}`);

    console.log(`S es: ${this.encontrandoS()}`);

    if (this.encontrandoS() > 3) return `No es confiable`;
    else return `Sí es confiable`;
  }
}
