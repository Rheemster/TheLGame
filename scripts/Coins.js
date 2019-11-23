//Coin object, contains coordinates for both coins keeps track of the currently selected coin

function Coins(coin0, coin1){
	this.location = [coin0, coin1];
	this.selectedCoin = 0;
	this.otherCoin = 1;
	this.tempLocation = [this.location[0][0], this.location[0][1]];
	this.actionR = function(){
		if (this.selectedCoin == 0){
			this.location[0][0] = this.tempLocation[0];
			this.location[0][1] = this.tempLocation[1];
			this.tempLocation[0] = this.location[1][0];
			this.tempLocation[1] = this.location[1][1];
			this.otherCoin = 0;
			this.selectedCoin = 1;
		} else {
			this.location[1][0] = this.tempLocation[0];
			this.location[1][1] = this.tempLocation[1];
			this.tempLocation[0] = this.location[0][0];
			this.tempLocation[1] = this.location[0][1];
			this.otherCoin = 1;
			this.selectedCoin = 0;
		}
	}
	this.confirm = function(){
		this.tempLocation[0] = this.location[this.selectedCoin][0];
		this.tempLocation[1] = this.location[this.selectedCoin][1];
	}
	this.move = function(direction){
		switch(direction){
			
			case "left":
				if (this.location[this.selectedCoin][0] - 1 >= 0){
					this.location[this.selectedCoin][0] -= 1;
				}
				break;
			case "up":
				if (this.location[this.selectedCoin][1] - 1 >= 0){
					this.location[this.selectedCoin][1] -= 1;
				}
				break;
			case "right":
				if (this.location[this.selectedCoin][0] + 1 <= 3){
					this.location[this.selectedCoin][0] += 1;
				}
				break;
			case "down":
				if (this.location[this.selectedCoin][1] + 1 <= 3){
					this.location[this.selectedCoin][1] += 1;
				}
				break;
			
		}
	}
	this.flip = function(){
		return;
	}
}