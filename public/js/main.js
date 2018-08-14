class Board {
	constructor() {
		this.board = [];
		console.log('Board ready!');
	}
}

class Game {
	constructor() {
		this.board = new Board();
		console.log('Game ready!');
	}
}

(function() {
	const game = new Game();
})();
