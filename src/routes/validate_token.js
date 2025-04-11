const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["access_token"];
  if (!token) return res.status(403).json({ error: "Token no proporcionado" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Token inválido" });
    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;
