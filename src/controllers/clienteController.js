const Cliente = require('../models/cliente');

// Get all users
async function getAllClientes(req, res) {
    try{
        const cliente = await Cliente.find();
        res.json(cliente);
    }catch (error){
        res.json({ message: error });
    }
}

async function createCliente(req, res) {
    const { nombre, edad, direccion, telefono } = req.body;
    
    try {
        const newCliente = new Cliente({ nombre, edad, direccion, telefono });
        const savedCliente = await newCliente.save();

        res.status(201).json(savedCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Get a user

async function getCliente(req, res) {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findById(id);
        res.json(cliente);
    } catch (error) {
        res.json({ message: error });
    }
}

// Update a user

async function updateCliente(req, res) {
    const { id } = req.params;
    const { nombre, edad, direccion, telefono } = req.body;
    try {
        const updatedCliente = await Cliente.updateOne( { _id: id }, { $set: { nombre, edad, direccion, telefono } });
        res.json(updatedCliente);
    } catch (error) {
        res.json({ message: error });
    }
}

// delete a user
async function deleteCliente(req, res) {
    const { id } = req.params;
    try {
        const removedCliente = await Cliente.deleteOne( { _id: id });
        res.json(removedCliente);
    } catch (error) {
        res.json({ message: error });
    }   
}


module.exports = {
    getAllClientes,
    createCliente,
    getCliente,
    updateCliente,
    deleteCliente
}