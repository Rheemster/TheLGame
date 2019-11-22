var playerA = new lPiece([[1,2], [1,1], [1,0], [2,0]]); // Coordinates of Player A's starting location
var playerB = new lPiece([[2,1], [2,2], [2,3], [1,3]]);
var coins = new coins([0, 3], [3, 0]); // Coordinates of Coin starting locations
var pieceList = [playerA, coins, playerB, coins]; // List of pieces, easily referencable by the turn variable
var turn = 0;
var board = [["blank", "a", "a", "coin1"],
			["blank", "a", "b", "blank"],
			["blank", "a", "b", "blank"],
			["coin2", "b", "b", "blank"]]; // Starting board, used to display things
var tempCoins = [[3,0], [0,3]];

display(board);

document.addEventListener("keydown", keyPressed, false);
function keyPressed(event) {
	switch(event.keyCode){

		case 87:
			//Key W
			pieceList[turn].move("up");
			break;
		case 38:
			//Arrow up
			pieceList[turn].move("up");
			break;
		case 65:
			//Key A
			pieceList[turn].move("left");
			break;
		case 37:
			//Arrow left
			pieceList[turn].move("left");
			break;
		case 83:
			//Key S
			pieceList[turn].move("down");
			break;
		case 40:
			//Arrow down
			pieceList[turn].move("down");
			break;
		case 68:
			//Key D
			pieceList[turn].move("right");
			break;
		case 39:
			//Arrow right
			pieceList[turn].move("right");
			break;

		case 82:
			//Key R: switch selected coin or rotate L piece
			if (!(turn % 2 == 0)){
				coins.toggle();
			} else {
				pieceList[turn].rotate();
			}
			break;
		case 70:
			//Key F: flip L piece
			if (turn % 2 == 0){
				pieceList[turn].flip();
			}
			break;
		case 13:
			//Enter key: next turn - prevent overlap and change hint message
			if (overlap(turn)){
				if (turn == 3){
					turn = 0;
				} else {
					turn ++;
				}
				if ((turn % 2) == 0){
					document.getElementById("goal").innerHTML = "Move your L. If you can't move, you lose.";
					document.getElementById("controls").innerHTML = "F to flip horizontally, R to rotate clockwise, WASD or ARROW KEYS to move, ENTER to confirm.";
				} else {
					coins.confirm();
					document.getElementById("goal").innerHTML = "You may choose to move a coin.";
					document.getElementById("controls").innerHTML = "R to toggle selected coin, WASD or ARROW KEYS to move, ENTER to confirm.";
				}
			} else {
				document.getElementById("goal").innerHTML = "Move to a valid space!";
			}
	}

	//Update then display the board every time a key is pressed

	board = updateBoard(playerB, playerA, coins.location[0], coins.location[1], board, turn);
	display(board);
}