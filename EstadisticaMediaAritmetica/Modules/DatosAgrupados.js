import { DatosSinAgrupar } from "./DatosSinAgrupar.js";

export class DatosAgrupados extends DatosSinAgrupar {
  constructor(valores, frecuencia, valoresLs) {
    super(valores, frecuencia);
    this.valoresLs = valoresLs;
  }

  convertirArray() {
    const array = [];

    this.valores.forEach((element, i) => {
      array[i] = {
        Li: parseFloat(element.value),
        Ls: parseFloat(this.valoresLs[i].value),
        frecuencia: parseFloat(this.frecuencias[i].value),
      };
    });

    return array;
  }

  encontrandoXi() {
    const array = this.convertirArray();

    array.forEach((element) => {
      element.Xi = parseFloat((element.Li + element.Ls) / 2);
    });

    return array;
  }

  encontrandoFxi() {
    const array = this.encontrandoXi();

    array.forEach((element) => {
      element.Fxi = parseFloat(element.frecuencia * element.Xi);
    });

    return array;
  }

  encontrandoSumatoriaFxi() {
    return this.encontrandoFxi().reduce((acu, act) => acu + act.Fxi, 0);
  }

  encontrandoMediaDirecta() {
    return this.encontrandoSumatoriaFxi() / super.encontrandoN();
  }

  encontrandoXs() {
    const array = this.convertirArray().sort((a, b) =>
      a.frecuencia > b.frecuencia ? 1 : -1
    );

    return (array[array.length - 1].Li + array[array.length - 1].Ls) / 2;
  }

  encontrandoD() {
    const array = this.encontrandoFxi();
    const Xs = this.encontrandoXs();

    const indexElementXs = array.findIndex((element) => element.Xi === Xs);

    const arrayPart1 = array.slice(0, indexElementXs);
    arrayPart1.reverse();
    arrayPart1.forEach((element, i) => {
      element.d = i * -1 - 1;
    });
    arrayPart1.reverse();

    const arrayPart2 = array.slice(indexElementXs + 1);
    arrayPart2.forEach((element, i) => {
      element.d = i + 1;
    });

    const elementXs = array[indexElementXs];
    elementXs.d = 0;

    arrayPart1.push(elementXs);
    arrayPart1.push(arrayPart2);

    return arrayPart1.flat(1);
  }

  encontrandoFd() {
    const array = this.encontrandoD();

    array.forEach((element) => {
      element.fd = parseFloat(element.frecuencia * element.d);
    });

    return array;
  }

  encontrandoSumatoriaFd() {
    return this.encontrandoFd().reduce((acu, act) => acu + act.fd, 0);
  }

  encontrandoIntervalo() {
    const array = this.convertirArray();

    return array[1].Li - array[0].Li;
  }

  encontrandoMediaIndirecta() {
    return (
      this.encontrandoXs() +
      (this.encontrandoSumatoriaFd() / super.encontrandoN()) *
        this.encontrandoIntervalo()
    );
  }

  mensajeFinal() {
    console.log(`El array es: `);
    console.log(this.encontrandoFd());

    console.log(`La cantidad de elementos N es: ${super.encontrandoN()}`);

    console.log(`La sumatoria de fxi es: ${this.encontrandoSumatoriaFxi()}`);

    console.log(`La sumatoria de fd es: ${this.encontrandoSumatoriaFd()}`);

    return `La media directa es: ${this.encontrandoMediaDirecta().toFixed(2)}, mientras que la media indirecta es ${this.encontrandoMediaIndirecta().toFixed(2)}`;
  }
}
