/** サーバーappの機能を決める場所 */

const createServer = (db) => {
    /***Express 設定***/
    const express = require('express');
    const app = express();

    /***ミドルウェア依存関係***/
    // const morgan = require('morgan'); //ロギング用ミドルウェア

    /***その他の依存関係***/
    const apiRouter = require('./router/api/index.js')(db);

    /***サーバにミドルウェアを追加。/api/のパスにマウントする ***/
    app.use('/api', [
        express.json(), // これでapplication/jsonリクエストボディのパースができるようになる。
        express.urlencoded({ extended: true }), //enables parsing of application/x-www-form-urlencoded data
        apiRouter,
    ]);

    // if (process.env.NODE_ENV !== 'test') {
    //     //morgan ミドルウェアの development モードを実行する（開発ログを詳細な色付きにする）
    //     if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
    // }

    /** test */
    app.get('/', (req, res) => {
        res.send('hello world');
    });

    return app;
};

module.exports = {
    createServer,
};