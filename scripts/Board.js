function Board(){

	this.reset = function(){
		this.playerA = new LPiece([[1,2], [1,1], [1,0], [2,0]]);
		this.playerB = new LPiece([[2,1], [2,2], [2,3], [1,3]]);
		this.coins = new Coins([0, 3], [3, 0]);
		this.pieceList = [this.playerA, this.coins, this.playerB, this.coins];
		this.turn = 0;
		this.surface = [["blank", "blank", "blank", "coin"],
						["a", "a", "a", "b"],
						["a", "b", "b", "b"],
						["coin",  "blank", "blanks", "blank"]];
		this.shadowPiece = [[1,2], [1,1], [1,0], [2,0]];
	}

	this.update = function(){
		for (x = 0; x <= 3; x++){
			for (y = 0; y <= 3; y++){
				//Different cases depending on turn to have correct overlap 
				if (this.turn == 2){ // Player A turn
					if (checkOverlap([[x, y]], this.playerB.location)){
						this.surface[x][y] = "b";
					}
					else if (checkOverlap([[x, y]], this.playerA.location)){
						this.surface[x][y] = "a";
					}
					else if (checkOverlap([[x, y]], this.coins.location)){
						this.surface[x][y] = "coin";
					} else {
						this.surface[x][y] = "blank";
					}
				} else if (this.turn == 0) { // Player B turn

					if (checkOverlap([[x, y]], this.playerA.location)){
						this.surface[x][y] = "a";
					} else if (checkOverlap([[x, y]], this.playerB.location)){
						this.surface[x][y] = "b";
					} else if (checkOverlap([[x, y]], this.coins.location)){
						this.surface[x][y] = "coin";
					} else {
						this.surface[x][y] = "blank";
					}
				} else { // Coin turn

					if (checkOverlap([[x, y]], this.coins.location)){
						this.surface[x][y] = "coin";
					} else if (checkOverlap([[x, y]], this.playerA.location)){
						this.surface[x][y] = "a";
					} else if (checkOverlap([[x, y]], this.playerB.location)){
						this.surface[x][y] = "b";
					} else {
						this.surface[x][y] = "blank";
					} 
				}
			}
		}
	}

	this.nextTurn = function(){
		//Check if valid, increment turn

		if (this.turn == 0 && !(checkOverlap(this.playerA.location, this.playerB.location) 
								|| checkOverlap(this.playerA.location, this.coins.location))
								&& this.checkShadow())
		{
			this.turn = 1;
			return ("Coin");
		} else if (this.turn == 2 && !(checkOverlap(this.playerB.location, this.playerA.location)
									|| checkOverlap(this.playerB.location, this.coins.location))
									&& this.checkShadow())
		{
			this.turn = 3;
			return ("Coin");
		} else if ((this.turn == 1 || this.turn == 3) &&  !(checkOverlap([this.coins.location[this.coins.selectedCoin]], this.playerA.location)
														||  checkOverlap([this.coins.location[this.coins.selectedCoin]], this.playerB.location)
														||  checkOverlap([this.coins.location[this.coins.selectedCoin]], [this.coins.location[this.coins.otherCoin]])))
		{
			this.coins.confirm();
			if (this.turn == 1){
				this.turn = 2;
				this.updateShadow();
				return ("B");
			} else {
				this.turn = 0;
				this.updateShadow();
				return ("A");
			}
		} else {
			return ("Invalid");
		}

	}

	this.updateShadow = function(){
		if (this.turn == 0){
			for (i in this.playerA.location){
				for (j in this.playerA.location[i]){
					this.shadowPiece[i][j] = this.playerA.location[i][j];
				}
			}
		} else if (this.turn == 2) {
			for (i in this.playerB.location){
				for (j in this.playerB.location[i]){
					this.shadowPiece[i][j] = this.playerB.location[i][j];
				}
			}
		}
	}

	this.checkShadow = function(){
		if (this.turn == 0){
			for (i in this.shadowPiece){
				console.log(this.shadowPiece[i]);
				if (!(this.shadowPiece[i][0] == this.playerA.location[i][0] && this.shadowPiece[i][1] == this.playerA.location[i][1])){
					return true;
				}
			}
		} else if (this.turn == 2){
			for (i in this.shadowPiece){
				if (!(this.shadowPiece[i][0] == this.playerB.location[i][0] && this.shadowPiece[i][1] == this.playerB.location[i][1])){
					return true;
				}
			}
		}
		return false;
	}
}