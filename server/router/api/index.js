const router = require('express').Router();
const quotesRouter = require('./items.js');

module.exports = (db) => {
    router.use('/items', quotesRouter(db));

    return router;
};
