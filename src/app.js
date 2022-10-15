const express = require("express");
const DB = require("./utils/database");
const initModels = require("./models/initModels");
const config = require('./config');
const moviesRouter = require('./movies/movies.router');

const app = express();

app.use(express.json());
app.use('/movies', moviesRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "All done loco!" });
});

DB.authenticate()
  //? Accion informativa de si la informacion de conexion a la DB es correcta.
  .then(() => console.log("DB Authentication Succesfully!"))
  .catch((err) => console.log(err));

DB.sync()
  //? Sincroniza los modelos con las tablas de la DB.
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

//? Inicializamos el modelo inicial.
initModels();

app.listen(config.port, () => {
  console.log(`Server started at config.port ${config.port}, done!`);
});
