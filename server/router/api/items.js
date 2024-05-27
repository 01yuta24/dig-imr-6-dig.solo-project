const router = require('express').Router();

/***items***/
// このmoduleは、/server/router/api/index.js を経由して /server/server.js で利用されています。
module.exports = (db) => {
    router.get('/', async (req, res) => {
        const item = await db().items.get();
        res.send(item);
    });

    router.post('/', async (req, res) => {
        const value = req.body;
        console.log('postを受け取りました。', value);
        await db().items.post(value);
        const item = await db().items.get();
        res.send(item);
    });

    router.delete('/', async (req, res) => {
        console.log('deleteを受け取りました');
        await db().items.delete();
        const item = await db().items.get();
        res.send(item);
    });

    return router;
};
