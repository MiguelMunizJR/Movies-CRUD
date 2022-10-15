const moviesControllers = require("./movies.controller");

const getAllMovies = (req, res) => {
  moviesControllers
    .getAllMovies()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const postMovie = (req, res) => {
  //* Obtenemos propiedades de nuestro objeto de controllers.
  const data = req.body;
  //* Comprobamos que todos los campos esten completados correctamente.
  if (data.name && data.genre && data.duration && data.releaseDate) {
    moviesControllers
      .createMovie(data)
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        res.status(400).json({ message: err.data });
      });
  }
};

const getMovieById = (req, res) => {
  //* Obtenemos el id desde el parametro 'params'.
  const id = req.params.id;

  moviesControllers
    .getMovieById(id)
    .then((response) => {
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

//? Modificacion parcial:
const patchMovie = (req, res) => {
  const id = req.params.id;
  //* Es importante solo desestructurar los datos que queremos que modifiquen,
  //* elementos importantes o privados no son desestructurados
  const { name, genre, duration, releaseDate } = req.body;

  moviesControllers
    .editMovies(id, { name, genre, duration, releaseDate })
    .then((response) => {
      //* response es un arreglo
      if (response[0]) {
        res.status(200).json({
          message: `Movie with the id: ${id}, edited succesfully`,
        });
      } else {
        res.status(400).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const deleteMovie = (req, res) => {
  const id = req.params.id;

  moviesControllers
    .deleteMovie(id)
    .then((response) => {
      if (response) {
        res.status(204).json({
          message: `Movie with the id: ${id}, deleted succesfully`,
        });
      } else {
        res.status(400).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(404).json({
        message: err.message,
      });
    });
};

module.exports = {
  getAllMovies,
  getMovieById,
  postMovie,
  patchMovie,
  deleteMovie,
};
