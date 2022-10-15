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
  const newMovie = Movies.create({
    id: UUID.v4(),
    name: data.name,
    genre: data.genre,
    duration: data.duration,
    releaseDate: data.releaseDate,
  });
  return newMovie;
};

createMovie({
  name: "Interestellar",
  genre: "Science Fiction/Adventure",
  duration: 160,
  releaseDate: "2014-01-10",
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
