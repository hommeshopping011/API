const express = require("express");
const router = express.Router();
const ventaController = require("../controllers/ventaController");

router.get("/ventas", ventaController.getAllVentas);
router.post("/ventas", ventaController.createVenta);
router.get("/ventas/:id", ventaController.getVenta);
router.put("/ventas/:id", ventaController.updateVenta);
router.delete("/ventas/:id", ventaController.deleteVenta);


module.exports = router;
