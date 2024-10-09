import { DatosSimples } from "./DatosSimples.js";

export class DatosSinAgrupar extends DatosSimples {
  constructor(valores, frecuencias) {
    super(valores);
    this.frecuencias = frecuencias;
  }

  encontrandoArrayFinal() {
    const arrayFinal = [];
    this.valores.forEach((element, i) => {
      arrayFinal[i] = {
        datoX: parseFloat(element.value),
        frecuencia: parseInt(this.frecuencias[i].value),
      };
    });
    return arrayFinal;
  }

  calculandoRespuesta(NoElemento, divisorQ) {
    const valores = super.calculandoFaDeCadaElemento();

    const N = valores[valores.length - 1].Fa;

    const P = Math.ceil((N * NoElemento) /  divisorQ);

    if (valores.some((element) => element.Fa === P)) {
      const indice = valores.findIndex((element) => element.Fa == P);
      console.log(indice, valores)
      return (valores[indice].datoX + valores[indice + 1].datoX) / 2;
    } else {
      const indice = valores.findIndex((element) => element.Fa > P);
      return valores[indice].datoX;
    }
  }
}
