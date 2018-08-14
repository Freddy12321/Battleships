const Path = require('path');
const Express = require('express');
const PORT = 3000;
const app = Express();
app.use('/', Express.static(Path.resolve(__dirname, './public')));
app.listen(3000);
console.log('Server listening on port %s', PORT);
