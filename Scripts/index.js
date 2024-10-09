import { informacion } from "./datos.js";

const contenedorEnlaces = document.querySelector(".enlaces");
const fragmento = document.createDocumentFragment();
informacion.forEach((element) => {
  // Elementos necesarios
  const div = document.createElement("div");
  const nombre = document.createElement("h3");
  const enlace = document.createElement("a");
  const imagen = document.createElement("img");

  // Modificando el a
  enlace.setAttribute("href", `${element.pagina}`);

  //   Modificando la imagen
  imagen.setAttribute("src", `${element.imagen}`);

  //   Modificando el nombre
  nombre.textContent = element.nombre;

  //   Introduciendo todo
  enlace.append(nombre);
  enlace.append(imagen);

  fragmento.append(enlace);
});

contenedorEnlaces.append(fragmento);
