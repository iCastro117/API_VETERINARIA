const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  clave: { type: String, required: true },
  rol: { type: String, enum: ["admin", "veterinario"], default: "veterinario" }
});

// Encriptar clave antes de guardar
userSchema.pre("save", async function(next) {
  if (!this.isModified("clave")) return next();
  const salt = await bcrypt.genSalt(10);
  this.clave = await bcrypt.hash(this.clave, salt);
  next();
});

// Método para comparar claves
userSchema.methods.compareClave = function(clave) {
  return bcrypt.compare(clave, this.clave);
};

module.exports = mongoose.model("User", userSchema);