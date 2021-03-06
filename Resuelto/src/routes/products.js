// ************ Require's ************
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
// ************ Controller Require ************
const productsController = require("../controllers/productsController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/products"));
  },
  filename: (req, file, cb) => {
    const newFile = "subida-" + Date.now() + path.extname(file.originalname);
    cb(null, newFile);
  },
});

const upload = multer({ storage });
/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create/", productsController.create);
router.post("/", upload.single("imagenProducto"), productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/:id/", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/:id/edit", productsController.edit);
router.put(
  "/:id/update",
  upload.single("imagenDelProducto"),
  productsController.update
);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);

module.exports = router;
