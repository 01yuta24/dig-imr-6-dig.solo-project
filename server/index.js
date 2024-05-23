/** メインでサーバーを起動する場所 */
const PORT = process.env.PORT || 3000; // default port to 3000

/***Express アプリ***/
const { createDbModels } = require('../db/index.js');
const { createServer } = require('./server.js');
const app = createServer(createDbModels);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
