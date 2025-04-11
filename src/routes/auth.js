const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Registro
router.post("/signup", [
  body("nombre").notEmpty(),
  body("correo").isEmail(),
  body("clave").isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { nombre, correo, clave } = req.body;
    const user = new User({ nombre, correo, clave });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: "Error al registrar usuario" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { correo, clave } = req.body;
  const user = await User.findOne({ correo });
  if (!user || !(await user.compareClave(clave))) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
  res.json({ token });
});

module.exports = router;
