require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Experiencia = require('./Experiencia');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de experiencias profesionales funcionando');
});

// Conectar con MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');

    app.listen(process.env.PORT || 3000, () => {
      console.log('Servidor funcionando en el puerto 3000');
    });
  })
  .catch((error) => {
    console.error('Error de conexión:', error.message);
  });

// 1. CREAR una experiencia
app.post('/api/experiencias', async (req, res) => {
  try {
    const experiencia = await Experiencia.create(req.body);

    res.status(201).json({
      mensaje: 'Experiencia registrada correctamente',
      datos: experiencia
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'No se pudo registrar la experiencia',
      error: error.message
    });
  }
});

// 2. CONSULTAR todas las experiencias
app.get('/api/experiencias', async (req, res) => {
  try {
    const experiencias = await Experiencia.find();

    res.status(200).json(experiencias);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al consultar las experiencias'
    });
  }
});

// 3. CONSULTAR una experiencia por su ID
app.get('/api/experiencias/:id', async (req, res) => {
  try {
    const experiencia = await Experiencia.findById(req.params.id);

    if (!experiencia) {
      return res.status(404).json({
        mensaje: 'Experiencia no encontrada'
      });
    }

    res.status(200).json(experiencia);
  } catch (error) {
    res.status(400).json({
      mensaje: 'ID inválido'
    });
  }
});

// 4. ACTUALIZAR una experiencia
app.put('/api/experiencias/:id', async (req, res) => {
  try {
    const experiencia = await Experiencia.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!experiencia) {
      return res.status(404).json({
        mensaje: 'Experiencia no encontrada'
      });
    }

    res.status(200).json({
      mensaje: 'Experiencia actualizada correctamente',
      datos: experiencia
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'No se pudo actualizar la experiencia',
      error: error.message
    });
  }
});

// 5. ELIMINAR una experiencia
app.delete('/api/experiencias/:id', async (req, res) => {
  try {
    const experiencia = await Experiencia.findByIdAndDelete(
      req.params.id
    );

    if (!experiencia) {
      return res.status(404).json({
        mensaje: 'Experiencia no encontrada'
      });
    }

    res.status(200).json({
      mensaje: 'Experiencia eliminada correctamente'
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'No se pudo eliminar la experiencia'
    });
  }
});