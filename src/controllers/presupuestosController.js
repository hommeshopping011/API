const Presupuesto = require('../models/presupuesto');
const Visita = require('../models/visita');

// Obtener todos los presupuestos
async function getAllPresupuestos(req, res) {
    try {
        const presupuestos = await Presupuesto.find().populate('visita');
        res.json(presupuestos);
    } catch (error) {
        res.json({ message: error });
    }
}

// Crear un presupuesto
async function createPresupuesto(req, res) {
    const { visitaId, tipo, cantidad } = req.body;

    try {
        const newPresupuesto = new Presupuesto({ visita: visitaId, tipo, cantidad });
        const savedPresupuesto = await newPresupuesto.save();

        res.status(201).json(savedPresupuesto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Obtener un presupuesto
async function getPresupuesto(req, res) {
    const { id } = req.params;

    try {
        const presupuesto = await Presupuesto.findById(id).populate('visita');
        res.json(presupuesto);
    } catch (error) {
        res.json({ message: error });
    }
}

// Actualizar un presupuesto
async function updatePresupuesto(req, res) {
    const { id } = req.params;
    const { tipo } = req.body;

    try {
        const updatedPresupuesto = await Presupuesto.updateOne({ _id: id }, { $set: { tipo } });
        res.json(updatedPresupuesto);
    } catch (error) {
        res.json({ message: error });
    }
}

// Eliminar un presupuesto
async function deletePresupuesto(req, res) {
    const { id } = req.params;

    try {
        const removedPresupuesto = await Presupuesto.deleteOne({ _id: id });
        res.json(removedPresupuesto);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    getAllPresupuestos,
    createPresupuesto,
    getPresupuesto,
    updatePresupuesto,
    deletePresupuesto
};
