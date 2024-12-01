const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// Usuario y contraseña predeterminados
const adminCredentials = {
    email: 'admin@example.com',
    password: 'admin',
};

// Ruta de login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email !== adminCredentials.email || password !== adminCredentials.password) {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
});

module.exports = router;
