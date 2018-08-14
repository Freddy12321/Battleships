const RoomManager = require('./rooms');
const Path = require('path');
const Express = require('express');
const BodyParser = require('body-parser');
const PORT = 3000;
const rooms = new RoomManager();

const app = Express();
app.post('/:game', BodyParser.json(), (req, res) => {
	const { body, params } = req;
	const { game } = params;
	const output = rooms.manage(game, body);
	res.json(output);
});
app.use('/', Express.static(Path.resolve(__dirname, './public')));
app.listen(3000);
console.log('Server listening on port %s', PORT);
