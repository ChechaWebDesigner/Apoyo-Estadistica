import { DesviacionMedia } from "./DesviacionMedia.js";

export class DMSinAgrupar extends DesviacionMedia {
  constructor(valores, frecuencias) {
    super(valores);
    this.frecuencias = frecuencias;
  }

  convirtiendoValoresArray() {
    const array = [];

    this.valores.forEach((element, i) => {
      array[i] = {
        x: parseFloat(element.value),
        f: parseFloat(this.frecuencias[i].value),
      };
    });

    return array;
  }

  encontrandoFx() {
    const array = this.convirtiendoValoresArray();

    array.forEach((element, i) => {
      element.fx = element.x * element.f;
    });

    return array;
  }

  encontrandoSumatoriaFx() {
    return this.encontrandoFx().reduce((acu, act) => acu + act.fx, 0);
  }

  encontrandoN() {
    return this.convirtiendoValoresArray().reduce((acu, act) => acu + act.f, 0);
  }

  encontrandoMedia() {
    return this.encontrandoSumatoriaFx() / this.encontrandoN();
  }

  encontrandoD() {
    const media = this.encontrandoMedia();
    const array = this.encontrandoFx();

    array.forEach((element) => {
      const dPrueba = parseFloat((element.x - media).toFixed(2));

      const d = dPrueba > 0 ? dPrueba : dPrueba * -1;

      element.d = d;
    });

    return array;
  }

  encontrandoFD() {
    const array = this.encontrandoD();

    array.forEach((element, i) => {
      element.fd = element.f * element.d;
    });

    return array;
  }

  encontrandoSumatoriaFD() {
    return this.encontrandoFD().reduce((acu, act) => acu + act.fd, 0);
  }

  encontrandoDM() {
    return this.encontrandoSumatoriaFD() / this.encontrandoN();
  }
}
