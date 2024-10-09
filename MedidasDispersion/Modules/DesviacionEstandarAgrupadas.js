import { DESinAgrupar } from "./DesviacionEstandarSinAgrupar.js";

export class DEAgrupados extends DESinAgrupar {
  constructor(valores, frecuencias, valoresLs) {
    super(valores, frecuencias);
    this.valoresLs = valoresLs;
  }

  convirtiendoValoresArray() {
    const array = [];

    this.valores.forEach((element, i) => {
      array[i] = {
        Li: parseFloat(element.value),
        Ls: parseFloat(this.valoresLs[i].value),
        f: parseFloat(this.frecuencias[i].value),
      };
    });

    return array;
  }

  encontrandoXi() {
    const array = this.convirtiendoValoresArray();

    array.forEach((element) => {
      element.Xi = (element.Li + element.Ls) / 2;
    });

    return array;
  }

  encontrandoFXi() {
    const array = this.encontrandoXi();

    array.forEach((element) => {
      element.fxi = element.f * element.Xi;
    });

    return array;
  }

  encontrandoSumatoriaFXi() {
    return this.encontrandoFXi().reduce((acu, act) => acu + act.fxi, 0);
  }

  encontrandoMedia() {
    return this.encontrandoSumatoriaFXi() / super.encontrandoN();
  }

  encontrandoD() {
    const array = this.encontrandoFXi();
    const media = this.encontrandoMedia();

    array.forEach((element) => {
      element.d = parseFloat((element.Xi - media).toFixed(2));
    });

    return array;
  }

  encontrandoD2() {
    const array = this.encontrandoD();

    array.forEach(
      (element) => (element.d2 = parseFloat((element.d * element.d).toFixed(2)))
    );

    return array;
  }

  mensajeFinal() {
    console.log(`El array Final es :`);
    console.log(super.encontrandoFD2());

    console.log(`La cantidad de elementos N es: ${super.encontrandoN()}`);

    console.log(`La sumatoria de fxi es ${this.encontrandoSumatoriaFXi()}`);

    console.log(`La sumatoria de fd2 es ${super.encontrandoSumatoriaFD2()}`);

    console.log(`La media es ${this.encontrandoMedia()}`);

    console.log(`V es ${super.encontrandoV()}`);

    console.log(`S es ${super.encontrandoS()}`);

    if (super.encontrandoS() < 3) return "Es confiable";
    else return "No es confiable";
  }
}
