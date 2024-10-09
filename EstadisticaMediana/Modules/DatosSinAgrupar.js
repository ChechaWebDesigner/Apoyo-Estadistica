import { ValoresSimples } from "./estadistica.js";

export class ValoresSinAgrupar extends ValoresSimples {
  constructor(datos, frecuencias) {
    super(datos);
    this.frecuencias = frecuencias;

    this.frecuenciaAbsoluta = [];
    this.datosConvertidos = [];
    this.frecuenciasConvertidas = [];
  }

  transformToArrayDatosX() {
    this.datos.forEach((elem, i) => {
      this.datosConvertidos[i] = elem.value;
    });
  }

  transformToNumberDatosX() {
    this.datosConvertidos = this.datosConvertidos.map((element) =>
      parseFloat(element)
    );
  }

  transformToArrayFrecuencias() {
    this.frecuencias.forEach((elem, i) => {
      this.frecuenciasConvertidas[i] = elem.value;
    });
  }

  transformToNumberFrecuencias() {
    this.frecuenciasConvertidas = this.frecuenciasConvertidas.map((element) =>
      parseFloat(element)
    );
  }

  encontrarFa() {
    this.frecuenciasConvertidas.forEach((elem, i) => {
      if (this.frecuenciaAbsoluta[i - 1] === undefined) {
        this.frecuenciaAbsoluta[i] = elem;
      } else {
        this.frecuenciaAbsoluta[i] = elem + this.frecuenciaAbsoluta[i - 1];
      }
    });
  }

  encontrarN() {
    return this.frecuenciasConvertidas.reduce(
      (actual, acumulado) => actual + acumulado,
      0
    );
  }

  encontarP() {
    return this.encontrarN() / 2;
  }

  calculateMd() {
    this.transformToArrayDatosX();
    this.transformToNumberDatosX();

    this.transformToArrayFrecuencias();
    this.transformToNumberFrecuencias();
    this.encontrarFa();

    const P = this.encontarP();

    if (this.frecuenciaAbsoluta.includes(P)) {
      const posicion = this.frecuenciaAbsoluta.indexOf(P);

      const valor1 = this.datosConvertidos[posicion];
      const valor2 = this.datosConvertidos[posicion + 1];

      const Md = (valor1 + valor2) / 2;
      
      if (isNaN(Md)) return "Ingrese Valores";
      else return Md;
    } else {
      const valorDelFa = this.frecuenciaAbsoluta.find((elem, index) => {
        if (elem > P) return index;
      });

      const posicion = this.frecuenciaAbsoluta.indexOf(valorDelFa);

      const Md = this.datosConvertidos[posicion];

      if (isNaN(Md)) return "Ingrese Valores";
      else return Md;
    }
  }
}
