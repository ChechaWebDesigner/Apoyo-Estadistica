export class DatosSimples {
  constructor(valores) {
    this.valores = valores;
  }

  transformarToArray() {
    return this.valores.split(",");
  }

  transformarANumero() {
    return this.transformarToArray().map((value) => parseFloat(value));
  }

  ordenarValores() {
    return this.transformarANumero().sort((a, b) => (a > b ? 1 : -1));
  }

  encontrandoArrayFinal() {
    const valores = this.ordenarValores();
    const valoresUnicos = []; //Es donde almacenare los valores temrinados
    let posicion = 0; //La posicion en cada iteracion, y al no repetirse, por cambia obviamente
    let contadorRepeticion = 0;

    const duracion = valores.length; //Es el largo del array

    //En este for estoy ingresando dentro de valoresUnicos, los objetos en donde estara cada valor y su numero de repeticion
    //Por eso podemos encontrar el primer if, en donde evaluamos si es igual, luego en el else, encontramos un valor de contador
    //repeticion, debido a que es necesario saber que valor tendra en ese momento, podemos ver que si es true la condicion, se le suma
    //un uno, esto se debe a que el valor de contador seria 2, 3, osea uno menor al real, y por ello es necesario sumarle 1

    for (let i = 0; i < duracion; i++) {
      if (valores[i] === valores[i + 1]) {
        contadorRepeticion++;
        valoresUnicos[posicion] = {
          datoX: valores[i],
          frecuencia: contadorRepeticion,
        };
      } else {
        contadorRepeticion =
          valores[i] === valores[i - 1] ? contadorRepeticion + 1 : 1;
        valoresUnicos[posicion] = {
          datoX: valores[i],
          frecuencia: contadorRepeticion,
        };
        posicion++;

        contadorRepeticion = 0;
      }
    }

    return valoresUnicos;
  }

  calculandoFaDeCadaElemento() {
    const valores = this.encontrandoArrayFinal();

    valores.forEach((element, i) => {
      if (valores[i - 1] == undefined) {
        element.Fa = element.frecuencia;
      } else {
        element.Fa = element.frecuencia + valores[i - 1].Fa;
      }
    });

    return valores;
  }

  calculandoCuartil(Quartil, divisorQ) {
    const valores = this.calculandoFaDeCadaElemento();
   
    const N = valores.length;
    console.log(N)
    const P = (N * Quartil) / divisorQ;
    console.log(P)
    if (Math.ceil(P) > P) {
      const indice = valores.findIndex((element) => element.Fa == Math.ceil(P));
      console.log("aqui")
      return valores[indice].datoX;
    } else {
      const indice = valores.findIndex((element) => element.Fa == Math.ceil(P));
      console.log((valores[indice].datoX + valores[indice + 1].datoX) / 2)
      return (valores[indice].datoX + valores[indice + 1].datoX) / 2;
    }
  }


}

