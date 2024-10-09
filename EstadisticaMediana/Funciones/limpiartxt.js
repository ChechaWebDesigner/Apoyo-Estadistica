export const limpiarTxt = (nodo) => {
  nodo.forEach((element) => {
    element.value = "";
  });
};
