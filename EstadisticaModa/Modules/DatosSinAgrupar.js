import { DatosSimples } from "./DatosSimples.js";

export class DatosSinAgrupar extends DatosSimples {

    /**
     * 
     * @param {node} valores Nodo de los valores X
     * @param {node} frecuencias Nodo de frecuencias
     */

  constructor(valores, frecuencias) {
    super(valores);
    this.frecuencias = frecuencias;
  }

  encontrandoArrayFinal() {
    const arrayFinal = [];
    this.valores.forEach((element, i) => {
      arrayFinal[i] = {
        datoX: element.value,
        frecuencia: parseInt(this.frecuencias[i].value),
      };
    });
    return arrayFinal;
  }

  
}
