require("dotenv").config(); // Esto debe estar al principio
console.log("MONGO_URI:", process.env.MONGO_URI); // 👈 Agrega esto si no está


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/product", require("./routes/product"));

// Conexión a MongoDB


console.log("MONGO_URI:", process.env.MONGO_URI); // Agrega esto para debug

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión:", err));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:3000`); // Aquí lo forzamos a mostrar 3000
});


/*
PS C:\Users\USUARIO.DESKTOP-64OMC89\Music\API_VETERINARIA\api-veterinaria> cd "C:\Users\USUARIO.DESKTOP-64OMC89\Music\API_VETERINARIA"
>>
PS C:\Users\USUARIO.DESKTOP-64OMC89\Music\API_VETERINARIA> dir
>>


    Directorio: C:\Users\USUARIO.DESKTOP-64OMC89\Music\API_VETERINARIA


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----      11/04/2025  2:04 p. m.                node_modules
d-----      11/04/2025  2:03 p. m.                src
-a----      11/04/2025  2:08 p. m.            130 .env
-a----      11/04/2025  1:42 p. m.              0 .gitignore
-a----      11/04/2025  2:04 p. m.          69623 package-lock.json
-a----      11/04/2025  2:04 p. m.            529 package.json


PS C:\Users\USUARIO.DESKTOP-64OMC89\Music\API_VETERINARIA> npm run dev
>>

> api-veterinaria@1.0.0 dev
> nodemon src/index.js

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
MONGO_URI: mongodb+srv://iCastro117:Cascam117@cluster0.4hwh3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
MONGO_URI: mongodb+srv://iCastro117:Cascam117@cluster0.4hwh3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
🚀 Servidor en http://localhost:3000
✅ Conectado a MongoDB
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
[nodemon] restarting due to changes...
MONGO_URI: mongodb+srv://iCastro117:Cascam117@cluster0.4hwh3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
[nodemon] starting `node src/index.js`
MONGO_URI: mongodb+srv://iCastro117:Cascam117@cluster0.4hwh3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
MONGO_URI: mongodb+srv://iCastro117:Cascam117@cluster0.4hwh3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
🚀 Servidor en http://localhost:3000
✅ Conectado a MongoDB

/*
npm init -y
npm install express mongoose dotenv bcrypt jsonwebtoken cors express-validator


npm install express-validator
npm install cors
npm install --save-dev nodemon

*/
