export class ValoresSimples {
  /**
   *
   * @param {string} datos cadena de texto
   */
  constructor(datos) {
    this.datos = datos;
  }

  transformToArray() {
    return this.datos.split(",");
  }

  transformValuesToNumber() {
    return this.transformToArray().map((value) => parseFloat(value));
  }

  orderValues() {
    return this.transformValuesToNumber().sort((a, b) => (a > b ? 1 : -1));
  }

  calculateMD() {
    const arrayFinal = this.orderValues();
    const largoDatos = arrayFinal.length;

    if (largoDatos % 2 === 0) {
      const P = (largoDatos + 1) / 2;

      const anteriorP = Math.trunc(P);
      const despuesP = Math.round(P);

      const Md = (arrayFinal[anteriorP - 1] + arrayFinal[despuesP - 1]) / 2;

      console.log(isNaN(Md))

      if (isNaN(Md)) return "Ingrese Valores";
      else return Md;
    } else {
      const posicion = (largoDatos + 1) / 2;

      if (arrayFinal[0] !== arrayFinal[0]) return "Ingrese valores" //El operador sirve porque los NaN jamas son iguales, porque
      //Si yo pongo 2 !== 2, me dice false pq si son iguales
      else return arrayFinal[posicion - 1];
    }
  }
}
