const GameState = require('./game');

module.exports = class RoomManager {
	constructor() {
		this.rooms = {};
	}
	manage(roomName, body) {
		if (!this.rooms[roomName]) {
			this.rooms[roomName] = new GameState();
		}
		const room = this.rooms[roomName];
		const { playerName, action, data } = body;
		return room.manage(playerName, action, data);
	}
}
