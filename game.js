const STATES = {
	PLAYER_1_PLACE_SHIPS: 'PLAYER_1_PLACE_SHIPS',
	PLAYER_2_PLACE_SHIPS: 'PLAYER_2_PLACE_SHIPS',
	PLAYER_1_FIRE: 'PLAYER_1_FIRE',
	PLAYER_2_FIRE: 'PLAYER_2_FIRE',
};

const SHIP_TYPES = {
	NONE: 'NONE',
	ROWBOAT: 'ROWBOAT',
	GUNBOAT: 'GUNBOAT',
	BATTLESHIP: 'BATTLESHIP',
};

const ACTIONS = {
	JOIN: 'JOIN',
	PLACE_SHIP: 'PLACE_SHIP',
	FIRE: 'FIRE',
};

class Player {
	constructor(name) {
		this.name = name;
		this.board = Array(6 * 6).fill(SHIP_TYPES.NONE);
	}
}

module.exports = class GameState {
	constructor() {
		this.state = STATES.PLAYER_1_PLACE_SHIPS;
		this.players = [];
	}
	manage(playerName, action, data) {
		switch (action) {
			case ACTIONS.JOIN:
				break;
			case ACTIONS.PLACE_SHIP:
				break;
			case ACTIONS.FIRE:
				break;
			default:
				break;
		}
		return {
			state: this.state,
			board: this.getPlayer(playerName).board,
		};
	}
	getPlayer(playerName) {
		return this.players.find((p) => p.name === playerName);
	}
}
