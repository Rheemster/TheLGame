function checkOverlap (locationA, locationB){
	for (a = 0; a < locationA.length; a++){
		for (b = 0; b < locationB.length; b++){
			if (locationA[a][0] == locationB[b][0] && locationA[a][1] == locationB[b][1]){
				return true;
			}
		}
	}
	return false;
}