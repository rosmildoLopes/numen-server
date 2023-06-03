const express = require("express"); // requiriendo express
const app = express();
const port = 3000;
//URN

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/saludo", (req, res) => {
  res.send("Hellooooooo!");
});

app.get("/listado", (req, res) => {
  res.json({
    objeto1: "soy un objeto",
    objeto2: "soy otro objeto",
  });
});

//params
//http://localhost:3000/listado/algo/juan
app.get("/listado/algo/:nombre/:apellido", (req, res) => {
  console.log(req.params);
  res.json({
    nombre: req.params.nombre,
    apellido: req.params.apellido,
  });
});

//querys
//http://localhost:3000/alumnos?alumno1=juan&alumno2=miguel&alumno3=ana
app.get("/alumnos/:profesor", (req /* request */, res /*response */) => {
  res.json({ profesor: req.params.profesor, alumnos: req.query });
});
//listen levantar un servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
