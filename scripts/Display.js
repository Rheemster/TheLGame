function Display(){

	this.draw = function(board, canvasID){
		canvas = document.getElementById(canvasID);
		boardCtx = canvas.getContext("2d");
		boardCtx.lineWidth = 5;
		//Clear the canvas
		boardCtx.clearRect(0, 0, canvas.width, canvas.height);
		for (i = 0; i <= 3; i++){
			for (j = 0; j <= 3; j++){
				//Dictate what color each circle should be
				switch (board[i][j]){
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
					case "coin":
						boardCtx.lineWidth = 10;
						boardCtx.fillStyle = "#e3e3e3";
						boardCtx.strokeStyle = "black";
						break;

				}
				//Draw each circle
				boardCtx.beginPath();
				boardCtx.arc(((i * (canvas.width / 4)) + canvas.width / 8), ((j * (canvas.height / 4)) + canvas.height / 8), (canvas.width / 8) * (3/4), 0, Math.PI * 2, true);
				boardCtx.fill();
				boardCtx.beginPath();
				boardCtx.arc(((i * (canvas.width / 4)) + canvas.width / 8), ((j * (canvas.height / 4)) + canvas.height / 8), (canvas.width / 8) * (3/4), 0, Math.PI * 2, true);
				boardCtx.stroke();
			}
		}
	}
}