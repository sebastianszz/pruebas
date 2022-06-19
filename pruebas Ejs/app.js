const express = require("express");
const app = express();
const path = require("path");

//' Importaciones
const rutasMain = require("./routes/mainRoutes.js");

//' Ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//' localhost
const port = 3000;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

//' Static
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

//' Puertos
app.get("/", rutasMain);
app.get("/detail/:menuId", rutasMain);
