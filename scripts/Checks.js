function Checks(){

	this.checkOverlap = function(locationA, locationB){
		for (a = 0; a < locationA.length; a++){
			for (b = 0; b < locationB.length; b++){
				if (locationA[a][0] == locationB[b][0] && locationA[a][1] == locationB[b][1]){
					return true;
				}
			}
		}
		return false;
	}

	this.setCheckChars = function(chars){
		this.checkChars = chars;
	}

	this.isEmpty = function(char){
		for (i in this.checkChars){
			if ((this.checkChars[i] == char)){
				return true;
			}
		}
		return false;
	}
}