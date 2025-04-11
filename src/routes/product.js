const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const verifyToken = require("./validate_token");

// Crear producto
router.post("/", verifyToken, async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: "Error al crear producto" });
  }
});

// Obtener todos los productos
router.get("/", verifyToken, async (req, res) => {
  const productos = await Product.find();
  res.json(productos);
});

// Obtener producto por ID
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch (err) {
    res.status(400).json({ error: "ID inválido" });
  }
});

// Actualizar producto
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const producto = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch (err) {
    res.status(400).json({ error: "Error al actualizar producto" });
  }
});

// Eliminar producto
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const producto = await Product.findByIdAndDelete(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (err) {
    res.status(400).json({ error: "Error al eliminar producto" });
  }
});

module.exports = router;
