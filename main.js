var globalPress = document.getElementById("globalPress");

var playerA = new lPiece([[1, 2], [1, 1], [1, 0], [2, 0]]);
var playerB = new lPiece([[2, 1], [2, 2], [2, 3], [1, 3]]);
var coins = new coins([0, 3], [3, 0]);
var pieceList = [playerA, coins, playerB, coins];
var turn = 0;
var board = [["blank", "a", "a", "coin1"],
			["blank", "a", "b", "blank"],
			["blank", "a", "b", "blank"],
			["coin2", "b", "b", "blank"]];



function main(){
	display(board);
}

main();

document.addEventListener("keydown", keyPressed, false);

function keyPressed(event) {
	switch(event.keyCode){
		case 87:
			pieceList[turn].move("up");
			break;
		case 65:
			pieceList[turn].move("left");
			break;
		case 83:
			pieceList[turn].move("down");
			break;
		case 68:
			pieceList[turn].move("right");
			break;
		case 82:
			console.log("R");
			if (!(turn % 2 == 0)){
				coins.toggle();
			}
			break;
		case 70:
			console.log("F");
			break;
		case 13:
			console.log("Enter");
			console.log(pieceList.length);
			if (overlap(pieceList, board, turn)){
				if (turn == 3){
					turn = 0;
				} else {
					turn ++;
				}
				if ((turn % 2) == 0){
					document.getElementById("goal").innerHTML = "Move your L. If you can't move, you lose.";
					document.getElementById("controls").innerHTML = "F to flip horizontally, R to rotate clockwise, WASD to move, ENTER to confirm.";
				} else {
					document.getElementById("goal").innerHTML = "You may choose to move a coin.";
					document.getElementById("controls").innerHTML = "R to toggle selected coin, WASD to move, ENTER to confirm.";
				}
			} else {
				document.getElementById("goal").innerHTML = "Move to a valid space!";
			}
			console.log(pieceList.length);
	}
	if (turn == 0){
		board = updateBoard(playerB, playerA, coins.location[0], coins.location[1], board, turn);
	}
	else {
		board = updateBoard(playerA, playerB, coins.location[0], coins.location[1], board, turn);
	}
	display(board);
}