const express = require("express");
const router = express.Router();
const visitaController = require("../controllers/visitaControlller");

router.get("/visitas", visitaController.getAllVisitas);
router.post("/visitas", visitaController.createVisita);
router.get("/visitas/:id", visitaController.getVisita);
router.put("/visitas/:id", visitaController.updateVisita);
router.delete("/visitas/:id", visitaController.deleteVisita);


module.exports = router;
