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
        const item = await db().items.post(value);
        res.send('postが完了しました');
    });

    router.delete('/', async (req, res) => {
        await db().items.delete();
        res.send('deleteが完了しました');
    });

    return router;
};
