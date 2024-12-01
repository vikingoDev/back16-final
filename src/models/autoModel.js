const mongoose = require('mongoose');

const autoSchema = new mongoose.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    anio: { type: Number, required: true },
    cilindrada: { type: String, required: true },
    combustible: { type: String, required: true },
    transmision: { type: String, enum: ['Manual', 'Automática'], required: true },
    precio: { type: Number, required: true },
});

module.exports = mongoose.model('Auto', autoSchema);
