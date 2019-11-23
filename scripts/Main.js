var board = new Board();
var display = new Display();

board.reset();
display.draw(board.surface, "gameBoard");

function analytics(){

}

function settings(){

}

document.addEventListener("keydown", keyPressed, false);
function keyPressed(event) {
	switch(event.keyCode){

		case 87: //Key W
			board.pieceList[board.turn].move("up");
			break;
		case 38: //Arrow up
			board.pieceList[board.turn].move("up");
			break;
		case 65: //Key A
			board.pieceList[board.turn].move("left");
			break;
		case 37: //Arrow left
			board.pieceList[board.turn].move("left");
			break;
		case 83: //Key S
			board.pieceList[board.turn].move("down");
			break;
		case 40: //Arrow down
			board.pieceList[board.turn].move("down");
			break;
		case 68: //Key D
			board.pieceList[board.turn].move("right");
			break;
		case 39: //Arrow right
			board.pieceList[board.turn].move("right");
			break;

		case 82: //Key R
			board.pieceList[board.turn].actionR(); //Rotate or flip
			break;

		case 70: //Key F
			board.pieceList[board.turn].flip();
			break;

		case 13:
			//Enter key: next turn - prevent overlap and change hint message
			textCase = board.nextTurn();
			if (textCase == "A"){
				document.getElementById("goal").style.color = "#3b93ff";
				document.getElementById("goal").innerHTML     = "Move your L. If you can't move, you lose.";
				document.getElementById("controls").innerHTML = "F to flip horizontally, R to rotate clockwise, WASD or ARROW KEYS to move, ENTER to confirm.";
			} else if (textCase == "B"){
				document.getElementById("goal").style.color = "#ff4a26";
				document.getElementById("goal").innerHTML     = "Move your L. If you can't move, you lose.";
				document.getElementById("controls").innerHTML = "F to flip horizontally, R to rotate clockwise, WASD or ARROW KEYS to move, ENTER to confirm.";
			} else if (textCase == "Coin"){
				document.getElementById("goal").innerHTML 	  = "You may choose to move a coin.";
				document.getElementById("controls").innerHTML = "R to toggle selected coin, WASD or ARROW KEYS to move, ENTER to confirm.";

			} else if (textCase == "Invalid"){
				document.getElementById("goal").innerHTML 	  = "Move to a valid space!";
			}
			break;

		case 80:
			//Q key: reset
			board.reset();
			break;
	}

	//Update then display the board every time a key is pressed

	board.update();
	display.draw(board.surface, "gameBoard");
}