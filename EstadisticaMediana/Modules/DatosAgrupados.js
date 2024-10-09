import { ValoresSinAgrupar } from "./DatosSinAgrupar.js";

export class ValoresAgrupados extends ValoresSinAgrupar {
  constructor(datosLi, datosLs, frecuencias, datos) {
    super(datos, frecuencias);
    this.datosLi = datosLi;
    this.datosLs = datosLs;

    this.datosLiConvertidos = [];
    this.datosLsConvertidos = [];
  }

  transformToArrayLiDatas() {
    this.datosLi.forEach((elem, i) => {
      this.datosLiConvertidos[i] = elem.value;
    });
  }

  transformToArrayLsDatas() {
    this.datosLs.forEach((elem, i) => {
      this.datosLsConvertidos[i] = elem.value;
    });
  }

  transformToNumberLiDatas() {
    this.datosLiConvertidos = this.datosLiConvertidos.map((element) =>
      parseFloat(element)
    );
  }

  transformToNumberLsDatas() {
    this.datosLsConvertidos = this.datosLsConvertidos.map((element) =>
      parseFloat(element)
    );
  }

  calculateLiUses(position) {
    return this.datosLiConvertidos[position] - 0.5;
  }

  calculateF(position) {
    return this.frecuenciasConvertidas[position];
  }

  calculateFa(P) {
    return this.frecuenciaAbsoluta.find((element) => element >= P);
  }

  calculateFaUsar(P) {
    return this.frecuenciaAbsoluta[this.encontrarPosicionAUsar(P) - 1];
  }

  encontrarPosicionAUsar(P) {
    return this.frecuenciaAbsoluta.indexOf(this.calculateFa(P));
  }

  calculateIncrement() {
    return this.datosLiConvertidos[1] - this.datosLiConvertidos[0];
  }

  CalcularMd() {
    //Transformo todo a array

    this.transformToArrayLiDatas();
    this.transformToArrayLsDatas();
    this.transformToArrayFrecuencias();

    // Transformando a numeros

    this.transformToNumberLiDatas();
    this.transformToNumberLsDatas();
    this.transformToNumberFrecuencias();

    // Encotnramos la frecuencia absoluta

    this.encontrarFa();

    const P = this.encontarP();

    const position = this.encontrarPosicionAUsar(P);

    //Mostrando en consola la posicion

    const Md = (
      this.calculateLiUses(position) +
      ((this.encontrarN() / 2 - this.calculateFaUsar(P)) /
        this.calculateF(position)) *
        this.calculateIncrement()
    );

    if (isNaN(Md)) return "Ingrese Valores";
      else return Md;
  }

  mensajeConsola() {
    console.log(`Los elementos son:`)
    console.log(this.datosLiConvertidos)
    console.log(this.datosLsConvertidos)

    console.log(`El incremento es: ${this.calculateIncrement()}`)
  }
}
