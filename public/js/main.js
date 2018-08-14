class Board {
	constructor() {
		this.board = [];
		console.log('Board ready!');
	}
	renderBoard() {

	}
}

class Game {
	constructor() {
		this.game = null;
		this.playerName = null;
		this.board = new Board();
		console.log('Game ready!');
	}
	isJoined() {
		return !this.game;
	}
	send(action, data, callback) {
		const { playerName } = this;
		const body = { playerName, action, data };
		const url = `${window.location.origin}/${this.game}/state`;
		$.getJSON(url, body, (res) => {
			callback(res);
		});
	}
	showJoinRoomScreen() {
		// show the join room screen, which should be a form with two inputs: one for game name and player name.
		// set this.game and this.playerName with the values from the join room screen form.
		// call this.send('JOIN', { playerName: this.playerName }) when the form is submitted;
		// when you get a response, call this.showBoard();
	}
	showBoard() {
		// show the board. At this point,
	}

}

(function() {
	const game = new Game();
	if (!game.isJoined()) {
		this.game.showJoinRoomScreen();
	}
})();
