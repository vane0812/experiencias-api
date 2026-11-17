const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema({
  cargo: {
    type: String,
    required: true
  },
  empresa: {
    type: String,
    required: true
  },
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaFin: {
    type: Date,
    default: null
  },
  descripcion: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model(
  'Experiencia',
  experienciaSchema
);