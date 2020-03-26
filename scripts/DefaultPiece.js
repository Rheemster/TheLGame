function DefaultPiece(location){
	this.location = location;

	this.move = function(direction){
		switch(direction){
			case "up":
				for(i = 0; i < this.location.length; i++){ // Iterate through pieces to check if they can move, stop if they can't
					if ((this.location[i][1] - 1) < 0) {
						return new Error("Can't move there.");
					}
				}
				for(i = 0; i < this.location.length; i++){ // Apply movement if checks are passed
					this.location[i][1] -= 1;
				}
				return;

			case "left":
				for(i = 0; i < this.location.length; i++){
					if ((this.location[i][0] - 1) < 0) {
						return new Error("Can't move there.");
					}
				}
				for(i = 0; i < this.location.length; i++){
					this.location[i][0] -= 1;
				}
				return;

			case "down":
				for(i = 0; i < this.location.length; i++){
					if ((this.location[i][1] + 1) > 3) {
						return new Error("Can't move there.");
					}
				}
				for(i = 0; i < this.location.length; i++){
					this.location[i][1] += 1;
				}
				return;

			case "right":
				for(i = 0; i < this.location.length; i++){
					if ((this.location[i][0] + 1) > 3) {
						return new Error("Can't move there.");
					}
				}
				for(i = 0; i < this.location.length; i++){
					this.location[i][0] += 1;
				}
				return;
		}
	}
}