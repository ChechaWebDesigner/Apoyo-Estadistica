import { DatosSinAgrupar } from "./DatosSinAgrupar.js";

export class DatosAgrupados extends DatosSinAgrupar {
  /**
   *
   * @param {node} datosLi Nodo de datos Limite inferior
   * @param {node} datosLs Noido de datos Limite Superior
   * @param {null} valores Nulo, puesto que no nos servira
   * @param {node} frecuencias Nodo de las frecuencias
   */

  constructor(datosLi, datosLs, valores, frecuencias) {
    super(valores, frecuencias);
    this.datosLi = datosLi;
    this.datosLs = datosLs;
  }

  encontradoArraySemiFinal() {
    const semiArray = [];

    this.datosLi.forEach((element, i) => {
      semiArray[i] = {
        Li: parseFloat(element.value),
        Ls: parseFloat(this.datosLs[i].value),
        frecuencia: parseInt(this.frecuencias[i].value),
      };
    });

    // Encontrando el incremento

    semiArray.forEach((element, i) => {
      if (i === semiArray.length - 1) {
        const valorSumar = element.Li - semiArray[i - 1].Ls;
        element.i = element.Ls - element.Li + valorSumar;
      } else {
        const valorSumar = semiArray[i + 1].Li - element.Ls;
        element.i = element.Ls - element.Li + valorSumar;
      }
    });

    // Encontrando Lri

    semiArray.forEach((element, i) => {
      if (i === semiArray.length - 1) {
        const valorRestar = (element.Li - semiArray[i - 1].Ls) / 2;
        element.Lri = element.Li - valorRestar;
      } else {
        const valorRestar = (semiArray[i + 1].Li - element.Ls) / 2;
        element.Lri = element.Li - valorRestar;
      }
    });

    // Encontrar triangulo 1

    semiArray.forEach((element, i) => {
      if (semiArray[i - 1] == undefined) {
        element.triangulo1 = element.frecuencia - 0;
      } else {
        element.triangulo1 = element.frecuencia - semiArray[i - 1].frecuencia;
      }
    });

    // Encontrar triangulo 2

    semiArray.forEach((element, i) => {
      if (semiArray[i + 1] == undefined) {
        element.triangulo2 = element.frecuencia - 0;
      } else {
        element.triangulo2 = element.frecuencia - semiArray[i + 1].frecuencia;
      }
    });

    console.log(semiArray);

    return semiArray;
  }

  calcularArrayFinal() {
    const semiArray = this.encontradoArraySemiFinal();

    const valorMasAlto = super.encontrarValoresMasAltos(semiArray);

    //Esto aqui es para cuando sea moda de frecuencia distinta, voy a guardar el incremento para despues usarlo

    //El que dividira al triangulo 1

    semiArray.forEach((element, i) => {
      if (semiArray[i - 1] == undefined) {
        element.divisorTriangulo1 = element.i;
      } else {
        element.divisorTriangulo1 = semiArray[i - 1].i;
      }
    });

    //El que dividira al triangulo 2

    semiArray.forEach((element, i) => {
      if (semiArray[i + 1] == undefined) {
        element.divisorTriangulo2 = element.i;
      } else {
        element.divisorTriangulo2 = semiArray[i + 1].i;
      }
    });

    const arrayFinal = semiArray.filter(
      (element) => element.frecuencia === valorMasAlto
    );

    return arrayFinal;
  }

  calcularModaCruda() {
    const arrayFinal = this.calcularArrayFinal();

    arrayFinal.forEach((element) => {
      element.Moc = (element.Li + element.Ls) / 2;
    });

    return arrayFinal;
  }

  calculandoModaInterpolada() {
    const arrayFinal = this.calcularModaCruda();

    arrayFinal.forEach((element) => {
      element.Moi =
        element.Lri +
        (element.triangulo1 / (element.triangulo1 + element.triangulo2)) *
          element.i;
    });

    return arrayFinal;
  }

  calcularModaFrecuenciaDistinta() {
    const arrayFinal = this.calcularModaCruda();

    arrayFinal.forEach((element) => {
      const valorFinalTriangulo1 =
        element.triangulo1 / element.divisorTriangulo1;
      const valorFinalTriangulo2 =
        element.triangulo2 / element.divisorTriangulo2;
      element.Moi =
        element.Lri +
        (valorFinalTriangulo1 / (valorFinalTriangulo1 + valorFinalTriangulo2)) *
          element.i;
    });

    return arrayFinal;
  }
}
