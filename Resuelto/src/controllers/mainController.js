const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    let listProduct = products;
    let productos = [];
    for (let i = 0; i < listProduct.length; i++) {
      if (listProduct[i].category == "visited") {
        productos.push(listProduct[i]);
      }
    }
    let productosOferts = [];
    for (let i = 0; i < listProduct.length; i++) {
      if (listProduct[i].discount > 0) {
        productosOferts.push(listProduct[i]);
      }
    }
    res.render("index.ejs", {
      productos: productos,
      productosOferts: productosOferts,
    });
  },
  search: (req, res) => {
    let busquedaDelUsuario = req.query.keywords;

    let productos = [];

    for (let i = 0; i < products.length; i++) {
      if (products[i].name.includes(busquedaDelUsuario)) {
        productos.push(products[i]);
      }
    }
    res.render("results", {
      productos: productos,
      busquedaDelUsuario: busquedaDelUsuario,
    });
  },
};

module.exports = controller;
