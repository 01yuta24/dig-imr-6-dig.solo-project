const router = require('express').Router();
const itemsRouter = require('./items.js');
const categoriesRouter = require('./categories.js');

module.exports = (db) => {
    router.use('/items', itemsRouter(db));
    router.use('/categories', categoriesRouter(db));

    return router;
};
