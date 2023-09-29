const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

router.get("/", controllers.getFilms);
router.get("/", controllers.getFilm);
router.post("/", middlewares.filmValidation, controllers.createFilm);
router.put("/:id", middlewares.filmValidation, controllers.updateFilm);
router.delete("/:id", controllers.deleteFilm);




router.post("/",middlewares.characterValidation, controllers.createFilm);

module.exports = router;