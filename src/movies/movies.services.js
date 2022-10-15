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
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json({ message: err.data });
    });
};

module.exports = {
  getAllMovies,
  getMovieById,
  postMovie,
};