function Bot(){

	this.moveList = ['l', 'r', 'u', 'd', 'f', 'ro'];

	this.blueMove = function(){
		//Choose a random number between 1-6 moves
		for (i = 0; i <= (Math.random() * 5) + 1; i++){

			nextMove = this.moveList[Math.trunc(Math.random() * 5)];
			console.log(nextMove);
			board.update();
			display.draw(board.surface, "gameBoard");
			switch (nextMove){
				case 'l':
					try {
						board.playerA.move("left");
						break;
					} finally {break}
				case 'r':
					try {
						board.playerA.move("right");
						break;
					} finally {break}
				case 'u':
					try {
						board.playerA.move("up");
						break;
					} finally {break}

				case 'd':
					try {
						board.playerA.move("down");
						break;
					} finally {break}
				case 'f':
					try {
						board.playerA.flip();
						break;
					} finally {break}
				case 'ro':
					try {
						board.playerA.actionR();
						break;
					} finally {break}
			}
		}

		//Move randomly until it works
		while (!board.blueCheck()){
			console.log("fix move");
			board.update();
			display.draw(board.surface, "gameBoard");
			nextMove = this.moveList[Math.trunc(Math.random() * 5)];
			console.log(nextMove);
			switch (nextMove){
				case 'l':
					try {
						board.playerA.move("left");
						break;
					} finally {break}
				case 'r':
					try {
						board.playerA.move("right");
						break;
					} finally {break}
				case 'u':
					try {
						board.playerA.move("up");
						break;
					} finally {break}

				case 'd':
					try {
						board.playerA.move("down");
						break;
					} finally {break}
				case 'f':
					try {
						board.playerA.flip();
						break;
					} finally {break}
				case 'ro':
					try {
						board.playerA.actionR();
						break;
					} finally {break}
			}
		}
	}

	this.orangeMove = function(){

		//The Orange bot has different strategy since it doesn't randomize its moves first

		//Move randomly until it works
		while (!board.orangeCheck()){
			console.log("fix move");
			switch (this.moveList[Math.trunc(Math.random() * 5)]){
				case 'l':
					try {
						board.playerB.move("left");
						break;
					} finally {}
				case 'r':
					try {
						board.playerB.move("right");
						break;
					} finally {}
				case 'u':
					try {
						board.playerB.move("up");
						break;
					} finally {}

				case 'd':
					try {
						board.playerB.move("down");
						break;
					} finally {}
				case 'f':
					try {
						board.playerB.flip();
						break;
					} finally {}
				case 'ro':
					try {
						board.playerB.actionR();
						break;
					} finally {}
			}
		}
	}

	this.coinMove = function(){

		//Choose a random coin to move
		if (Math.random() > 0.5){
			activeCoin = 0;
		} else {
			activeCoin = 1;
		}

		//Choose random coordinates
		xList =[0, 1, 2, 3];
		yList =[0, 1, 2, 3];
		shuffleArray(xList);
		shuffleArray(yList);

		console.log(xList, yList);
		for (x in xList){
			for (y in yList){
				console.log(xList[x], yList[y]);
				if (board.surface[xList[x]][yList[y]] == "blank"){
					console.log("found", xList[x], yList[y]);
					board.coins.location[activeCoin][0] = xList[x];
					board.coins.location[activeCoin][1] = yList[y];
					return
				}
			}
		}
	}
	
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
