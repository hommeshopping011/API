const Visita = require('../models/visita');

// Obtener todas las visitas
async function getAllVisitas(req, res) {
    try {
        const visitas = await Visita.find().populate('cliente');
        res.json(visitas);
    } catch (error) {
        res.json({ message: error });
    }
}

// Crear una visita
async function createVisita(req, res) {
    const { clienteId, fecha, hora, lugar } = req.body;

    try {
        const newVisita = new Visita({ cliente: clienteId, fecha, hora, lugar });
        const savedVisita = await newVisita.save();

        res.status(201).json(savedVisita);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Obtener una visita
async function getVisita(req, res) {
    const { id } = req.params;

    try {
        const visita = await Visita.findById(id).populate('cliente');
        res.json(visita);
    } catch (error) {
        res.json({ message: error });
    }
}

// Actualizar una visita
async function updateVisita(req, res) {
    const { id } = req.params;
    const { fecha, hora, lugar } = req.body;

    try {
        const updatedVisita = await Visita.updateOne({ _id: id }, { $set: { fecha, hora, lugar } });
        res.json(updatedVisita);
    } catch (error) {
        res.json({ message: error });
    }
}

// Eliminar una visita
async function deleteVisita(req, res) {
    const { id } = req.params;

    try {
        const removedVisita = await Visita.deleteOne({ _id: id });
        res.json(removedVisita);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    getAllVisitas,
    createVisita,
    getVisita,
    updateVisita,
    deleteVisita
};
