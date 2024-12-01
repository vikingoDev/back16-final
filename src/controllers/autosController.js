const Auto = require('../models/autoModel');

// Obtener todos los autos
const getAutos = async (req, res) => {
    try {
        const autos = await Auto.find();
        res.status(200).json(autos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener autos' });
    }
};

// Obtener auto por ID
const getAutoById = async (req, res) => {
    try {
        const auto = await Auto.findById(req.params.id);
        if (!auto) return res.status(404).json({ message: 'Auto no encontrado' });
        res.status(200).json(auto);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar auto' });
    }
};

// Crear un auto
const createAuto = async (req, res) => {
    try {
        const nuevoAuto = new Auto(req.body);
        const autoGuardado = await nuevoAuto.save();
        res.status(201).json(autoGuardado);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear auto' });
    }
};

// Actualizar un auto
const updateAuto = async (req, res) => {
    try {
        const autoActualizado = await Auto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!autoActualizado) return res.status(404).json({ message: 'Auto no encontrado' });
        res.status(200).json(autoActualizado);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar auto' });
    }
};

// Eliminar un auto
const deleteAuto = async (req, res) => {
    try {
        const autoEliminado = await Auto.findByIdAndDelete(req.params.id);
        if (!autoEliminado) return res.status(404).json({ message: 'Auto no encontrado' });
        res.status(200).json({ message: 'Auto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar auto' });
    }
};

module.exports = { getAutos, getAutoById, createAuto, updateAuto, deleteAuto };
