const mongoose = require('mongoose');

const presupuestoSchema = new mongoose.Schema({
    visita: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Visita',
        required: true
    },
    tipo: {
        type: String,
        enum: ['contado', '10años', '25años'],
        required: true
    },
    cantidad: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Presupuesto', presupuestoSchema);