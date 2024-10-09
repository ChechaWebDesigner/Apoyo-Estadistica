import { DatosSinAgrupar } from "./DatosSinAgrupar.js";

export class DatosAgrupados extends DatosSinAgrupar {
  constructor(valores, valoresLs, frecuencias) {
    super(valores, frecuencias);
    this.valoresLs = valoresLs;
  }

  encontrandoArrayFinal() {
    const arrayFinal = [];
    this.valores.forEach((element, i) => {
      arrayFinal[i] = {
        Li: parseFloat(element.value),
        Ls: parseFloat(this.valoresLs[i].value),
        frecuencia: parseInt(this.frecuencias[i].value),
      };
    });
    return arrayFinal;
  }

  encontrandoRespuesta(NoElemento, tipoDivisor) {
    const elementos = this.calculandoFaDeCadaElemento();

    // Encontrando el incremento

    elementos.forEach((element, i) => {
      if (i === elementos.length - 1) {
        const valorSumar = element.Li - elementos[i - 1].Ls;
        element.i = element.Ls - element.Li + valorSumar;
      } else {
        const valorSumar = elementos[i + 1].Li - element.Ls;
        element.i = element.Ls - element.Li + valorSumar;
      }
    });

    // Encontrando Lri

    elementos.forEach((element, i) => {
      if (i === elementos.length - 1) {
        const valorRestar = (element.Li - elementos[i - 1].Ls) / 2;
        element.Lri = element.Li - valorRestar;
      } else {
        const valorRestar = (elementos[i + 1].Li - element.Ls) / 2;
        element.Lri = element.Li - valorRestar;
      }
    });

    //Encontrandeo Faa

    elementos.forEach((element, i) => {
      if (i === 0) {
        element.faa = 0;
      } else {
        element.faa = elementos[i - 1].Fa;
      }
    });

    const N = elementos[elementos.length - 1].Fa;

    const P = Math.ceil((N * NoElemento) / tipoDivisor);

    const elemento = elementos.find((element) => element.Fa >= P);
    // console.log(elemento)
    return elemento.Lri + ((P - elemento.faa) / elemento.frecuencia) * elemento.i;
  }
}
