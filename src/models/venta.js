const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    presupuesto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Presupuesto'
    },
    nombreComprador: {
        type: String,
        required: true
    },
    telefonoComprador: {
        type: String,
        required: true
    },
    correoComprador: {
        type: String,
        required: true
    },
    direccionNuevaCasa: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Venta', ventaSchema);
