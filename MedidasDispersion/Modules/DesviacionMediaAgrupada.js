import { DMSinAgrupar } from "./DesviacionMediaSinAgrupar.js";

export class DMAgrupada extends DMSinAgrupar {
  constructor(valores, valoresLs, frecuencias) {
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
      const d = element.Xi - media;

      element.d = d > 0 ? d : d * -1;
    });

    return array;
  }

  encontrandofd() {
    const array = this.encontrandoD();

    array.forEach((element) => {
      element.fd = element.f * element.d;
    });

    return array;
  }

  encontrandoSumatoriafd() {
    return this.encontrandofd().reduce((acu, act) => acu + act.fd, 0);
  }

  encontrandoDM() {
    return this.encontrandoSumatoriafd() / super.encontrandoN();
  }

  mensajeFinal() {
    console.log(`Los elementos son:`);
    console.log(this.encontrandoFD());

    console.log(`La sumatoria de fd es: ${this.encontrandoSumatoriafd()}`);

    return this.encontrandoDM();
  }
}
