const Venta = require('../models/venta');
const Cliente = require('../models/cliente');
const Presupuesto = require('../models/presupuesto');

// Obtener todas las ventas
async function getAllVentas(req, res) {
    try {
        const ventas = await Venta.find().populate('cliente').populate('presupuesto');
        res.json(ventas);
    } catch (error) {
        res.json({ message: error });
    }
}

// Crear una venta
async function createVenta(req, res) {
    const { clienteId, presupuestoId, nombreComprador, telefonoComprador, correoComprador, direccionNuevaCasa } = req.body;

    try {
        const newVenta = new Venta({
            cliente: clienteId,
            presupuesto: presupuestoId,
            nombreComprador,
            telefonoComprador,
            correoComprador,
            direccionNuevaCasa
        });
        const savedVenta = await newVenta.save();

        res.status(201).json(savedVenta);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Obtener una venta
async function getVenta(req, res) {
    const { id } = req.params;

    try {
        const venta = await Venta.findById(id).populate('cliente').populate('presupuesto');
        res.json(venta);
    } catch (error) {
        res.json({ message: error });
    }
}

// Actualizar una venta
async function updateVenta(req, res) {
    const { id } = req.params;
    const { nombreComprador, telefonoComprador, correoComprador, direccionNuevaCasa } = req.body;

    try {
        const updatedVenta = await Venta.updateOne({ _id: id }, {
            $set: {
                nombreComprador,
                telefonoComprador,
                correoComprador,
                direccionNuevaCasa
            }
        });
        res.json(updatedVenta);
    } catch (error) {
        res.json({ message: error });
    }
}

// Eliminar una venta
async function deleteVenta(req, res) {
    const { id } = req.params;

    try {
        const removedVenta = await Venta.deleteOne({ _id: id });
        res.json(removedVenta);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    getAllVentas,
    createVenta,
    getVenta,
    updateVenta,
    deleteVenta
};
