const express = require('express');
const { getAutos, getAutoById, createAuto, updateAuto, deleteAuto } = require('../controllers/autosController');
const verifyToken = require('../middlewares/authMiddleware');
const router = express.Router();

// Rutas de autos
router.get('/', getAutos);
router.get('/:id', getAutoById);
router.post('/agregar', verifyToken, createAuto);
router.put('/:id', verifyToken, updateAuto);
router.delete('/:id', verifyToken, deleteAuto);

module.exports = router;
