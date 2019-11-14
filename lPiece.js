function lPiece(location){
	this.location = location;
	this.rotation = 0;
	this.flip = false;
	this.move = function(direction){
		switch(direction){
			case "up":
				for(i = 0; i < this.location.length; i++){
					if ((this.location[i][1] - 1) < 0) {
						console.log("Can't move up!");
						return;
					}
				}
				for(i = 0; i < this.location.length; i++){
					this.location[i][1] -= 1;
				}
				console.log("Moved up.")
				return;

			case "left":
				for(i = 0; i < this.location.length; i++){
					if ((this.location[i][0] - 1) < 0) {
						console.log("Can't move left!");
						return;
					}
				}
				for(i = 0; i < this.location.length; i++){
					this.location[i][0] -= 1;
				}
				console.log("Moved left.")
				return;

			case "down":
				for(i = 0; i < this.location.length; i++){
					if ((this.location[i][1] + 1) > 3) {
						console.log("Can't move down!");
						return;
					}
				}
				for(i = 0; i < this.location.length; i++){
					this.location[i][1] += 1;
				}
				console.log("Moved down.")
				return;

			case "right":
				for(i = 0; i < this.location.length; i++){
					if ((this.location[i][0] + 1) > 3) {
						console.log("Can't move right!");
						return;
					}
				}
				for(i = 0; i < this.location.length; i++){
					this.location[i][0] += 1;
				}
				console.log("Moved right.")
				return;
		}
	}

	this.rotate
}