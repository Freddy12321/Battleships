# Multiplayer Battleships Clone
_In Zepto and Express_

* Consult http://zeptojs.com/ for the Zepto API.
* Consult https://expressjs.com/en/api.html for the Express API.

## Game Logic
* Player specifies a player name and a room name.
	* Server
* Player requests game state;
	* If game state === 'PLAYER_1_PLACE_SHIPS':
		* Player 1 must place remaining ships and press 'done'.
	* If game state === 'PLAYER_2_PLACE_SHIPS':
