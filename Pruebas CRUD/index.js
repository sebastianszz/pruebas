//! Definicion de variables
const url = "https://jsonplaceholder.typicode.com/users";
let contenedor = document.getElementById("products-tbody");
let resultados = "";

const modalArticle = new bootstrap.Modal(
  document.getElementById("modalArticle")
);
let formArticulo = document.querySelector("products-form-create");
let img = document.getElementById("inputGroupFile04");
let namee = document.getElementById("name");
let description = document.getElementById("description");
let price = document.getElementById("price");
let stock = document.getElementById("stock");

let opcion = "";

//! SE BORRA EL FORMULARIO
btnCreate.addEventListener("click", () => {
  img.value = "";
  namee.value = "";
  description.value = "";
  price.value = "";
  stock.value = "";
  modalArticle.show();
  opcion = "crear";
});

//! Funcion para mostrar los resultados
let mostrar = (articulos) => {
  articulos.forEach((articulo) => {
    console.log(articulo);
    resultados += `
  <tr>
    <td>${articulo.id}</td>
    <td>${articulo.name}</td>
    <td>${articulo.price}</td>
    <td>${articulo.stock}</td>
    <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
  </tr>
  `;
  });
  contenedor.innerHTML = resultados;
};

//! Procedimiento Mostrar
fetch(url)
  .then((response) => response.json())
  .then((data) => mostrar(data))
  .catch((error) => console.log(error));
