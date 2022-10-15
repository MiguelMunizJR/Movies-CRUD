const Movies = require("../models/movies.models");
const UUID = require("uuid");

const getAllMovies = async () => {
  //* Traer todas las peliculas con 'findAll()' Express.
  //! En SQL es equivalente a: SELECT * FROM MOVIES;
  const data = await Movies.findAll();
  return data;
};

const createMovie = async (data) => {
  //* Con 'Movies.Create()' se pueden agregar elementos a la API.
  //! En SQL es equivalente a: INSERT INTO MOVIES (id, name, genre, duration, release_date) VALUES (UUID.v4(), data.name, data.genre, data.duration, data.release_date);
  const newMovie = await Movies.create({
    id: UUID.v4(),
    name: data.name,
    genre: data.genre,
    duration: data.duration,
    releaseDate: data.releaseDate,
  });
  return newMovie;
};

//?  createMovie({
//?   name: "Godzilla vs Kong",
//?   genre: "Science Fiction",
//?   duration: 113,
//?   releaseDate: "2021-03-24",
//? });

const getMovieById = async (id) => {
  //* Con 'Movies.findOne()' nos retorna el valor filtrado.
  //! En SQL es equivalente a: SELECT * FROM MOVIES WHERE ID = ID;
  const data = await Movies.findOne({
    where: {
      id: id,
    },
  });
  //! Si el where no encuentra nada retorna NULL
  return data;
};

const editMovies = async (id, data) => {
  const response = await Movies.update(data, {
    where: {
      id,
    },
  });
  //! Si el where no encuentra nada retorna NULL
  return response;
};

//* Ejemplo de ejecucion:
//? editMovies('20bb285c-567f-4630-9a63-0e9ad1c8fba4', {
//?  duration: 140
//? });

const deleteMovie = async (id) => {
  const data = await Movies.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  editMovies,
  deleteMovie,
};
