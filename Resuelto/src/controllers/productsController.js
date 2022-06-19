const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    todosProductos = products;
    productos = [];
    // for (let i = 0; i < todosProductos.length; i++) {
    //   productos.push(todosProductos[i]);
    // }
    // todosProductos.forEach((producto) => {
    //   productos.push(producto);
    // });
    todosProductos.filter((producto) => {
      productos.push(producto);
    });
    res.render("products", { productos: productos });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    busquedaUsuario = req.params.id;
    todosProductos = products;

    let detailProduct = todosProductos.filter(
      (producto) => producto.id == busquedaUsuario
    );
    res.render("detail", { detailProduct: detailProduct });
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    todosProductos = products;

    let imagen = "default-image.png";
    if (req.file) {
      imagen = req.file.filename;
    }
    // if(!file){
    //   const error = new Error("Seleccione un archivo")
    //   error.httpStatusCode = 400
    //   return next(error)
    // }
    // return res.send(file)

    productos = {
      id: todosProductos[todosProductos.length - 1].id + 1,
      name: req.body.name,
      price: parseInt(req.body.price),
      discount: parseInt(req.body.discount),
      category: req.body.category,
      description: req.body.description,
      image: imagen,
    };

    todosProductos.push(productos);
    let nuevoProductoGuardar = JSON.stringify(todosProductos, null, 2);
    fs.writeFileSync(productsFilePath, nuevoProductoGuardar, "utf-8");
    res.redirect("/products");
  },

  // Update - Form to edit
  edit: (req, res) => {
    busquedaUsuario = req.params.id;
    todosProductos = products;

    let productToEdit = todosProductos.filter(
      (producto) => producto.id == busquedaUsuario
    );
    res.render("product-edit-form", { productToEdit: productToEdit });
  },
  // Update - Method to update
  update: (req, res) => {
    todosProductos = products;
    req.body.id = parseInt(req.params.id);

    let image;

    if (req.body.imagenDelProducto) {
      image = req.body.imagenDelProducto;
    }
    //! Creo una estructura de guardado
    productoEditado = {
      id: req.body.id,
      name: req.body.name,
      price: parseInt(req.body.price),
      discount: parseInt(req.body.discount),
      category: req.body.category,
      description: req.body.description,
    };
    console.log(req.body);
    //! Lo meto en el Json, haciendo una comprobacion de ID
    let productosUpdate = todosProductos.map((producto) => {
      if (producto.id == req.body.id) {
        producto = productoEditado;
        if (image != undefined) {
          return (producto.image = image);
        }
      }
      return producto;
    });
    console.log(productosUpdate);

    let actualizarProductos = JSON.stringify(productosUpdate, null, 2);

    fs.writeFileSync(productsFilePath, actualizarProductos, "utf-8");
    res.redirect(`/products/${req.body.id}`);
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    todosProductos = products;
    let borrarId = req.params.id;
    let borrandoProducto = todosProductos.filter(
      (producto) => producto.id != borrarId
    );
    let actualizarProductos = JSON.stringify(borrandoProducto, null, 2);
    //! Redirigo a la pagina de 'Detalle' del 'producto editado'
    fs.writeFileSync(productsFilePath, actualizarProductos, "utf-8");
    res.redirect("/products");
  },
};

// let comprobacion = todosProductos.find((producto) => {
//   let prueba = producto;
//   if (producto.id == borrarId) {
//     let ubicacion = todosProductos.indexOf(producto);
//     prueba.splice(ubicacion, 1);
//     return prueba;
//   }
// });

module.exports = controller;
