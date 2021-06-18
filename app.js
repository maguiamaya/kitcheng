const express = require("express");
const port = 3030;
const path = require("path"); // ayuda a construir rutas absolutas (las relativas se construyen a mano)
const views = path.join(__dirname, "views");

const app = express();
// estas 2 lineas siempre van!
//req ---> request(requerimiento)     res----> response (respuesta)
app.use(express.static("public")); // donde van a estar todos los recursos estaticos q vbamos a usar en el proyecto

app.get("/", (req, res)=> res.sendFile(path.join(views, "home.html"))) //primer parametro la url: ruta raiz : localhost:3000




app.listen(port, () => console.log("servidor funcionando en el puerto " + port))