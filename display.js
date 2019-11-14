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
	if (turn == 0){
		pASymbol = "b";
		pBSymbol = "a";
	} else if (turn == 2){
		pASymbol = "a";
		pBSymbol = "b";
	}
	for (x = 0; x <= 3; x++){
		for (y = 0; y <= 3; y++){

			if (checkLocation(x, y, pB.location)){
				boardU[x][y] = pBSymbol;
			}
			else if (checkLocation(x, y, pA.location)){
				boardU[x][y] = pASymbol;
			}
			else if ((x == c1[0]) && (y == c1[1])){
				boardU[x][y] = "coin1";
			}
			else if ((x == c2[0]) && (y == c2[1])){
				boardU[x][y] = "coin2";
			} else {
				boardU[x][y] = "blank";
			}
		}
	}
	return boardU
}

function overlap(pieceList, board, turn){
	testPiece = [];
	Object.assign(testPiece, pieceList[turn]);
	console.log(pieceList.length);
	pieces = [];
	for(i = 0; i < pieceList.length; i ++){
		if (!(i == turn)){
			tempArray = [];
			Object.assign(tempArray, pieceList[i]);
			pieces.push(tempArray);
		}
	}
	if (turn % 2 == 0){
		try {
			if (pieces[1].selectedCoin == 0){
				pieces[1].location.splice(0, 1);
			} else {
				pieces[1].location.splice(1, 1);
			}
		}
		catch(err){
			if (pieces[2].selectedCoin == 0){
				pieces[2].location.splice(0, 1);
			} else {
				pieces[2].location.splice(1, 1);
			}
		}
	}
	console.log(pieces.length);
	for(i = 0; i < pieces.length; i++){
		for(a = 0; a < pieces[i].location.length; a++){
			for(b = 0; b < testPiece.location.length; b++){
				if (pieces[i].location[a][0] == testPiece.location[b][0] && pieces[i].location[a][1] == testPiece.location[b][1]){
					return false;
				}
			}
		}
	}
	return true;
}