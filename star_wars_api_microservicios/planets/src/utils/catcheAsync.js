//manejador de errores
module.exports = (fn) => (req, res, next) =>
    fn(req, res).catch((err) => next(err));



