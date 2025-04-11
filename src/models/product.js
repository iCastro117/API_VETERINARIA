const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  categoria: { type: String, enum: ["medicina", "alimento", "accesorio"], required: true },
  fechaVencimiento: { type: Date },
  proveedor: { type: String },
  imagen: { type: String },
  activo: { type: Boolean, default: true },
  codigo: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("Product", productSchema);
