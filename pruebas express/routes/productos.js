const express = require("express");
const productosController = require("../controllers/productosController.js");
const router = express.Router();

router.get("/:idProducto", productosController.detalle);

router.get(
  "/:idProducto/comentarios/:idComentario?",
  productosController.detalleComentario
);

module.exports = router;
