var canvas = document.getElementById("gameBoard");
var boardCtx = canvas.getContext("2d");
boardCtx.lineWidth = 5;

function display(boardD){

	//Clear the canvas
	boardCtx.clearRect(0, 0, canvas.width, canvas.height);
	for (i = 0; i <= 3; i++){
		for (j = 0; j <= 3; j++){
			//Dictate what color each circle should be
			switch (boardD[j][i]){
				case "blank":
					boardCtx.lineWidth = 12;
					boardCtx.fillStyle = "#e3e3e3";
					boardCtx.strokeStyle = "#e3e3e3";
					break;
				case "a":
					boardCtx.lineWidth = 5;
					boardCtx.fillStyle = "#abd1ff";
					boardCtx.strokeStyle = "#3b93ff";
					break;
				case "b":
					boardCtx.lineWidth = 5;
					boardCtx.fillStyle = "#ff8e78";
					boardCtx.strokeStyle = "#ff4a26";
					break;
				case "coin1":
					boardCtx.lineWidth = 10;
					boardCtx.fillStyle = "#e3e3e3";
					boardCtx.strokeStyle = "black";
					break;
				case "coin2":
					boardCtx.lineWidth = 10;
					boardCtx.fillStyle = "#e3e3e3";
					boardCtx.strokeStyle = "black";
					break;


			}
			//Draw each circle
			boardCtx.beginPath();
			boardCtx.arc(((i * (canvas.width / 4)) + canvas.width / 8), ((j * (canvas.height / 4)) + canvas.height / 8), (canvas.width / 8) * (3/4), 0, Math.PI * 2, true);
			boardCtx.fill();
			boardCtx.beginPath();
			boardCtx.arc(((i * (canvas.width / 4)) + canvas.width / 8), ((j * (canvas.height / 4)) + canvas.height / 8), (canvas.width / 8) * (3/4), 0, Math.PI * 2, true);
			boardCtx.stroke();
		}
	}
}

function checkLocation (x, y, list){
	//Supplementary function to see if a list contains a specific coordinate
	for (i = 0; i < list.length; i++){
		if (list[i][1] == x && list[i][0] == y){
			return true;
		}
	}
	return false;
}

function updateBoard(pA, pB, c1, c2, boardU, turn){

	for (x = 0; x <= 3; x++){
		for (y = 0; y <= 3; y++){

			//Different cases depending on turn to have correct overlap 
			if (turn == 0){ // Player A turn
				if (checkLocation(x, y, pB.location)){
					boardU[x][y] = "a";
				}
				else if (checkLocation(x, y, pA.location)){
					boardU[x][y] = "b";
				}
				else if ((x == c1[0]) && (y == c1[1])){
					boardU[x][y] = "coin2";
				}
				else if ((x == c2[0]) && (y == c2[1])){
					boardU[x][y] = "coin1";
				} else {
					boardU[x][y] = "blank";
				}
			} else if (turn == 2) { // Player B turn

				if (checkLocation(x, y, pA.location)){
					boardU[x][y] = "b";
				} else if (checkLocation(x, y, pB.location)){
					boardU[x][y] = "a";
				} else if ((x == c1[0]) && (y == c1[1])){
					boardU[x][y] = "coin2";
				} else if ((x == c2[0]) && (y == c2[1])){
					boardU[x][y] = "coin1";
				} else {
					boardU[x][y] = "blank";
				}
			} else { // Coin turn

				if ((x == c1[0]) && (y == c1[1])){
					boardU[x][y] = "coin2";
				} else if ((x == c2[0]) && (y == c2[1])){
					boardU[x][y] = "coin1";
				} else if (checkLocation(x, y, pA.location)){
					boardU[x][y] = "b";
				} else if (checkLocation(x, y, pB.location)){
					boardU[x][y] = "a";
				} else {
					boardU[x][y] = "blank";
				} 
			}

			
		}
	}

	return boardU;
}

function overlap(turn){
	if (turn == 3){
		turn = 1;
	}
	//Function to prevent overlapping pieces on turn pass
	switch (turn){
		case 0: // Player A turn
			for (i = 0; i < pieceList.length; i ++){
				if (i !== 0){
					for (a = 0; a < pieceList[0].location.length; a ++){
						for (b = 0; b < pieceList[i].location.length; b++){
							if ((i == 1 || i == 3) && (pieceList[0].location[a][0] == pieceList[i].location[b][1] && pieceList[0].location[a][1] == pieceList[i].location[b][0])){
								return false;
							} else if ((i == 2) && pieceList[0].location[a][0] == pieceList[i].location[b][0] && pieceList[0].location[a][1] == pieceList[i].location[b][1]){
								return false;
							}
						}
					}
				}
			}
			break;
		case 1: // Coin turn
			checkCoin = pieceList[turn].location[pieceList[turn].selectedCoin];
			for (a = 0; a < pieceList[0].location.length; a++){
				if (checkCoin[0] == pieceList[0].location[a][1] && checkCoin[1] == pieceList[0].location[a][0]){
					return false;
				}
			}
			for (a = 0; a < pieceList[2].location.length; a++){
				if (checkCoin[0] == pieceList[2].location[a][1] && checkCoin[1] == pieceList[2].location[a][0]){
					return false;
				}
			}
			if (checkCoin[0] == pieceList[turn].location[pieceList[turn].otherCoin][0] && checkCoin[1] == pieceList[turn].location[pieceList[turn].otherCoin][1]){
				return false;
			}
			break;
		case 2: // Player B turn
			for (i = 0; i < pieceList.length; i ++){
				if (i !== 2){
					for (a = 0; a < pieceList[2].location.length; a ++){
						for (b = 0; b < pieceList[i].location.length; b++){
							if ((i == 1 || i == 3) && (pieceList[2].location[a][0] == pieceList[i].location[b][1] && pieceList[2].location[a][1] == pieceList[i].location[b][0])){
								return false;
							}else if ((i == 0) && pieceList[2].location[a][0] == pieceList[i].location[b][0] && pieceList[2].location[a][1] == pieceList[i].location[b][1]){
								return false;
							}
						}
					}
				}
			}
			break;
	}
	return true;
}