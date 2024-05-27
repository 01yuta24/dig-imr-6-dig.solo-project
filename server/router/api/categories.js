const router = require('express').Router();

/***items***/
// このmoduleは、/server/router/api/index.js を経由して /server/server.js で利用されています。
module.exports = (db) => {
    router.get('/', async (req, res) => {
        const category = await db().categories.get();
        res.send(category);
    });

    router.delete('/', async (req, res) => {
        console.log('deleteを受け取りました');
        await db().categories.delete();
        res.send('deleteしました');
    });

    return router;
};
