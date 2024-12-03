require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database');
const autosRoutes = require('./src/routes/autosRoutes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get("/", (req, res) => {
    res.send("API funcionando correctamente");
});

// Middleware
app.use(express.json());
app.use('/api/autos', autosRoutes);
app.use('/api/auth', authRoutes);

// Conexión a la base de datos
connectDB();

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});