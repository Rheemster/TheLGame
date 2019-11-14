function coins(coin0, coin1){
	this.location = [coin0, coin1];
	this.selectedCoin = 0;
	this.toggle = function(){
		if (this.selectedCoin == 0){
			this.selectedCoin = 1;
		} else {
			this.selectedCoin = 0;
		}
	}
	this.move = function(direction){
		switch(direction){
			case "up":
				if (this.location[this.selectedCoin][0] - 1 >= 0){
					this.location[this.selectedCoin][0] -= 1;
				}
				break;
			case "left":
				if (this.location[this.selectedCoin][1] - 1 >= 0){
					this.location[this.selectedCoin][1] -= 1;
				}
				break;
			case "down":
				if (this.location[this.selectedCoin][0] + 1 <= 3){
					this.location[this.selectedCoin][0] += 1;
				}
				break;
			case "right":
				if (this.location[this.selectedCoin][1] + 1 <= 3){
					this.location[this.selectedCoin][1] += 1;
				}
				break;
		}
	}
}