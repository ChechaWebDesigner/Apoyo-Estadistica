import { DMSinAgrupar } from "./DesviacionMediaSinAgrupar.js";

export class DESinAgrupar extends DMSinAgrupar {
  constructor(valores, frecuencias) {
    super(valores, frecuencias);
  }

  encontrandoD2() {
    const array = super.encontrandoD();

    array.forEach((element) => {
      element.d2 = parseFloat((element.d * element.d).toFixed(2));
    });
    return array;
  }

  encontrandoFD2() {
    const array = this.encontrandoD2();

    array.forEach((element) => {
      element.fd2 = parseFloat((element.f * element.d2).toFixed(2));
    });

    return array;
  }

  encontrandoSumatoriaFD2() {
    return this.encontrandoFD2().reduce((acu, act) => acu + act.fd2, 0);
  }

  encontrandoV() {
    return this.encontrandoSumatoriaFD2() / super.encontrandoN();
  }

  encontrandoS() {
    return Math.sqrt(this.encontrandoV());
  }

  mensajeFinal() {
    console.log(`El array Final es:`);
    console.log(this.encontrandoFD2());

    console.log(`El numero de elementos N es ${super.encontrandoN()}`);

    console.log(
      `La sumatoria de los elementos FX es ${super.encontrandoSumatoriaFx()}`
    );

    console.log(`La media es ${super.encontrandoMedia()}`);

    console.log(
      `La sumatoria de los elementos fd^2 es ${this.encontrandoSumatoriaFD2()}`
    );

    console.log(`V es: ${this.encontrandoV()}`);

    console.log(`S es: ${this.encontrandoS()}`);

    if (this.encontrandoS() > 3) return "No es confiable";
    else return "Es confiable";
  }
}
