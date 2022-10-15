const router = require("express").Router();
const moviesServices = require('./movies.services');
//? Este es el prefijo: /api/v1/movies

router.get("/", moviesServices.getAllMovies);
router.get("/:id", moviesServices.getMovieById);
router.post("/", moviesServices.postMovie);

module.exports = router;
