const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

router.get("/", controllers.getCharacters);

router.get("/:id", controllers.getCharacter);

router.post("/", middlewares.characterValidation, controllers.createCharacter);

router.put("/:id", middlewares.characterValidation, controllers.putCharacter);

router.delete("/characters:id", controllers.deleteCharacter);

module.exports = router;