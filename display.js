var canvas = document.getElementById("gameBoard");
var boardCtx = canvas.getContext("2d");
boardCtx.lineWidth = 5;

function display(boardD){
	for (i = 0; i <= 3; i++){
		for (j = 0; j <= 3; j++){
			boardCtx.lineWidth = 10;
			boardCtx.fillStyle = "#e3e3e3";
			boardCtx.strokeStyle = "#e3e3e3";
			boardCtx.fillRect(i * (canvas.width / 4), j * (canvas.height / 4), canvas.width/4, canvas.height/4)
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
	for (i = 0; i < list.length; i++){
		if (list[i][1] == x && list[i][0] == y){
			return true;
		}
	}
	return false;
}

function updateBoard(pA, pB, c1, c2, boardU, turn){
	/*if (turn == 0){
		pASymbol = "b";
		pBSymbol = "a";
	} else if (turn == 2){
		pASymbol = "a";
		pBSymbol = "b";
	}*/
	for (x = 0; x <= 3; x++){
		for (y = 0; y <= 3; y++){
			if (turn == 0){
				if (checkLocation(x, y, pB.location)){
					boardU[x][y] = "a";
				}
				else if (checkLocation(x, y, pA.location)){
					boardU[x][y] = "b";
				}
				else if ((x == c1[0]) && (y == c1[1])){
				boardU[x][y] = "coin1";
				}
				else if ((x == c2[0]) && (y == c2[1])){
					boardU[x][y] = "coin2";
				} else {
					boardU[x][y] = "blank";
				}
			} else if (turn == 2) {

				if (checkLocation(x, y, pA.location)){
					boardU[x][y] = "b";
				} else if (checkLocation(x, y, pB.location)){
					boardU[x][y] = "a";
				} else if ((x == c1[0]) && (y == c1[1])){
				boardU[x][y] = "coin1";
				} else if ((x == c2[0]) && (y == c2[1])){
					boardU[x][y] = "coin2";
				} else {
					boardU[x][y] = "blank";
				}
			} else {

				if ((x == c1[0]) && (y == c1[1])){
					boardU[x][y] = "coin1";
				} else if ((x == c2[0]) && (y == c2[1])){
					boardU[x][y] = "coin2";
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
	return boardU
}

function overlap(turn){
	switch (turn){
		case 0:
			for (i = 0; i < pieceList.length; i ++){
				if (i !== 0){
					for (a = 0; a < pieceList[0].location.length; a ++){
						for (b = 0; b < pieceList[i].location.length; b++){
							if (pieceList[0].location[a][0] == pieceList[i].location[b][0] && pieceList[0].location[a][1] == pieceList[i].location[b][1]){
								return false;
							}
						}
					}
				}
			}
			break;
		case 1:
			break;
		case 2:
			for (i = 0; i < pieceList.length; i ++){
				if (i !== 2){
					for (a = 0; a < pieceList[2].location.length; a ++){
						for (b = 0; b < pieceList[i].location.length; b++){
							console.log("Piece list index : ", i)
							console.log("Piece list location : ", pieceList[i].location[a]);
							console.log("Checking coordinate : ", pieceList[2].location[b]);
							if (pieceList[2].location[a][0] == pieceList[i].location[b][0] && pieceList[2].location[a][1] == pieceList[i].location[b][1]){
								return false;
							}
						}
					}
				}
			}
		case 3:
			break;
	}
	return true;
}