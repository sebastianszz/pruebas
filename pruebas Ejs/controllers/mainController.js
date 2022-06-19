const about = {
  title: "Esto es un titulo",
  description: "esto es una descripcion",
  history: "Esto es una historia",
  menu: "Menu Disponible",
};
const listaMenu = [
  {
    id: 1,
    title: "Esto es un titulo",
    description: "esto es una descripcion",
    price: "U$ 65.50",
  },
  {
    id: 2,
    title: "Carpaccio fresco",
    description: "Entrada Carpaccio de salmón con cítricos",
    price: "U$S 65.50",
  },
  {
    id: 3,
    title: "Risotto de berenjena",
    description: "Risotto de berenjena y queso de cabra",
    price: "U$S 47.00",
  },
  {
    id: 4,
    title: "Milanesa napolitana",
    description: "Con pure de tomate y queso",
    price: "$ 500",
  },
];
const mainController = {
  index: (req, res) => {
    res.render("index", { about: about, menu: listaMenu });
  },
  detail: (req, res) => {
    let plato = listaMenu.find((plato) => plato.id == req.params.menuId);
    console.log(plato);
    res.render("detalleMenu", { plato: plato });
  },
};

module.exports = mainController;
