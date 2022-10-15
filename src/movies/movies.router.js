const router = require("express").Router();
const moviesServices = require('./movies.services');
//? Este es el prefijo: /api/v1/movies

router.get("/", moviesServices.getAllMovies);
router.post("/", moviesServices.postMovie);
router.put("/", );

router.get("/:id", moviesServices.getMovieById);
router.patch("/:id", moviesServices.patchMovie);
router.delete("/:id", moviesServices.deleteMovie);

module.exports = router;