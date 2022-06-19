const productosController = {
  listado: function () {},
  crear: function () {},
  borrar: function () {},
  detalle: function (req, res) {
    res.send("Bienvenidos al detalle del producto " + req.params.idProducto);
  },
  detalleComentario: function (req, res) {
    if (req.params.idComentario == undefined) {
      res.send(
        "Bienvenidos a los comentarios del producto " + req.params.idProducto
      );
    } else {
      res.send(
        "Bienvenidos a los comentarios del producto " +
          req.params.idProducto +
          " y estas enfocado en el comentario " +
          req.params.idComentario
      );
    }
  },
};

module.exports = productosController;
