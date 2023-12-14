const express = require("express");
const router = express.Router();
const presupuestoController = require("../controllers/presupuestosController");

router.get("/presupuestos", presupuestoController.getAllPresupuestos);
router.post("/presupuestos", presupuestoController.createPresupuesto);
router.get("/presupuestos/:id", presupuestoController.getPresupuesto);
router.put("/presupuestos/:id", presupuestoController.updatePresupuesto);
router.delete("/presupuestos/:id", presupuestoController.deletePresupuesto);


module.exports = router;
