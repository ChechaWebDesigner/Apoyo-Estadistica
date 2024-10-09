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

  encontrandoArrayFinal(){
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
          valores[i] === valores[i - 1] ? contadorRepeticion + 1: 1;
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

  encontrarValoresMasAltos(arrayFinal){

    const repeticiones = [];

    arrayFinal.forEach((element, i) => {
        repeticiones[i] = element.frecuencia;
    })

    repeticiones.sort((a, b) => (a > b ? 1 : -1))

    return repeticiones[repeticiones.length - 1];
  }

  calcularModa() {

    const arrayFinal = this.encontrandoArrayFinal()

    const maxRepeticion = this.encontrarValoresMasAltos(arrayFinal);

    const Modas = arrayFinal.filter(elem => elem.frecuencia === maxRepeticion)

    return Modas


  }
}
