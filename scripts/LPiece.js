//L Piece object, contains 4 coordinates for each part of the piece
function LPiece(location){
	DefaultPiece.call(this, location);
	LPiece.prototype = Object.create(DefaultPiece.prototype);

	this.rotation = 0;
	this.flip = false;
	

	this.actionR = function(){ // Rotate function explained in Grid Rotate function

		for (i = 0; i < this.location.length; i ++){ // Check if rotation is valid
			gridRotated = this.gridRotate(this.location[1][0], this.location[1][1], this.location[i][0], this.location[i][1]);
			if (!(this.location[i][0] + gridRotated[0] <= 3 && this.location[i][0] + gridRotated[0] >= 0 && 
				this.location[i][1] + gridRotated[1] <= 3 && this.location[i][1] + gridRotated[1] >= 0)){
				return;
			}
		}

		for (i = 0; i <this.location.length; i ++){ //Apply rotation
			gridRotated = this.gridRotate(this.location[1][0], this.location[1][1], this.location[i][0], this.location[i][1]);
			this.location[i][0] += gridRotated[0];
			this.location[i][1] += gridRotated[1];
		}
	}

	this.flip = function(){ // Flip function explained in Grid Flip function

		for (i = 0; i < this.location.length; i++){ // Check if flip is valid
			gridFlipped = this.gridFlip(this.location[1][0], this.location[i][0]);
			if(!(this.location[i][0] + gridFlipped <= 3 && this.location[i][0] + gridFlipped >= 0)){
				return new Error("Can't apply flip");
			}
		}

		for (i = 0; i < this.location.length; i++){ // Apply flip
			this.location[i][0] += this.gridFlip(this.location[1][0], this.location[i][0]);
		}
	}

	this.gridFlip = function (anchorX, flipX){
		//If the Coordinate is on the right of the anchor, it should go left 2 spaces.  
		//If it's on the left, it should go right 2 spaces.
		relCheck = flipX - anchorX;
		if (relCheck == -1){
			return(2);
		} else if (relCheck == 0){
			return(0);
		} else if (relCheck == 1){
			return(-2);
		}
	}

	this.gridRotate = function (anchorX, anchorY, rotateX, rotateY){
		//Corners and edges should seperately rotate clockwise
		//So the top left corner should go to the top right corner, top right corner to bottom right corner, etc.
		//Same idea for the edges
		//The function takes an anchor point and returns how to rotate the point around the anchor
		relCords = [rotateX - anchorX, rotateY - anchorY];
		if (relCords[0] == -1 && relCords[1] == -1){
			return([2, 0]);
		} else if (relCords[0] == -1 && relCords[1] == 0){
			return([1, -1]);
		} else if (relCords[0] == -1 && relCords[1] == 1){
			return([0, -2]);
		} else if (relCords[0] == 0 && relCords[1] == -1){
			return([1, 1]);
		} else if (relCords[0] == 0 && relCords[1] == 0){
			return([0, 0]);
		} else if (relCords[0] == 0 && relCords[1] == 1){
			return([-1, -1]);
		} else if (relCords[0] == 1 && relCords[1] == -1){
			return([0, 2]);
		} else if (relCords[0] == 1 && relCords[1] == 0){
			return([-1, 1]);
		} else if (relCords[0] == 1 && relCords[1] == 1){
			return([-2, 0]);
		}
	}
}

