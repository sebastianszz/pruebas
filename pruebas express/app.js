const express = require("express");
const path = require("path");
//' Importaciones
const rutasProductos = require("./routes/productos.js");
const rutasMain = require("./routes/main.js");
//!
const app = express();
//' localhost
const port = 3000;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
//' Static
const publicPath = path.join(__dirname, "public/");
app.use(express.static(publicPath));
//' Puertos
app.get("/", rutasMain);
app.get("/about", rutasMain);
//! Productos
app.get("/productos", rutasProductos);
