

const { catcheAsync } = require("../utils")
//manejador de errores mejorados

module.exports = {
    getFilms: catcheAsync(require("./getFilms")),
    createFilm: catcheAsync(require("./createFilms")),
    getFilm: catcheAsync(require("./getFilm")),
    updateFilm: catcheAsync(require("./updateFilm")),
    deleteFilm: catcheAsync(require("./deleteFilm")),
};