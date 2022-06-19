const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// static
const publicPath = path.join(__dirname, "public/");
app.use(express.static(publicPath));

// Port
app.listen(port, () => {
  console.log(`Mercado Liebre app listening at http://localhost:${port}`);
});

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
