var player1 = prompt("Player-1: Name? (#RED)");
var player2 = prompt("Player-2: Name? (#YELLOW)");
player1 += " (#RED)";
player2 += " (#YELLOW)";
var player = 1;

var board = [
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0]
]

$("#reset").click(function () {
	for(var i = 0; i < 5; i++){
		for(var j = 0; j < 6; j++){
			board[i][j] = 0;
		} 
	}
	$('.col0').css('background', '#f4f4f2');
	$('.col1').css('background', '#f4f4f2');
	$('.col2').css('background', '#f4f4f2');
	$('.col3').css('background', '#f4f4f2');
	$('.col4').css('background', '#f4f4f2');
	$('.col5').css('background', '#f4f4f2');
	$('.col6').css('background', '#f4f4f2');
	$('.cell_blank').css('background', 'white');

});


//For Debug Purpose - Print the board state;
var print = function(){
	for(var i = 0; i < 4; i++){
		console.log("ROW: " + i);
		for(var j = 0; j < 4; j++){
			console.log(board[i][j]);
		}

	}
}


//For every chal - check if there is a winner;
var winnerChecker = function(row, col, play){
	console.log("Winer Checking for " + row + " " + col + " " + play);
	var name;
	if(play == 1){
		name = player1;
	}
	else if(play == 2){
		name = player2;
	}
	
	for(i = 0; i < 4; i++){
		if(board[i+0][col] == play && board[i+1][col] == play && board[i+2][col] == play && board[i+3][col] == play){
			alert("Winner is " + name);
		}
	}
	for(i = 0; i < 4; i++){
		if(board[row][i+0] == play && board[row][i+1] == play && board[row][i+2] == play && board[row][i+3] == play){
			alert("Winner is " + name);
		}
	}
}



//Runner
$('.col0').on('click', function(){
	console.log("clicked");
	for(var i = 6; i >= 0; i--){
		if(board[i][0] == 0){
			console.log(player);
			if(player == 1){
				$('.col0').eq(i).css('background', '#ff0000');
				board[i][0] = 1;
				winnerChecker(i,0, player);
				player = 2;
			}
			else if(player == 2){
				$('.col0').eq(i).css('background', '#faff00');
				board[i][0] = 2;
				winnerChecker(i,0, player);
				player = 1;
			}
			break;			
		}
	}
	print();
});

$('.col1').on('click', function(){
	console.log("clicked");
	for(var i = 6; i >= 0; i--){
		if(board[i][1] == 0){
			console.log(player);
			if(player == 1){
				$('.col1').eq(i).css('background', '#ff0000');
				board[i][1] = 1;
				winnerChecker(i,1, player);
				player = 2;
			}
			else if(player == 2){
				$('.col1').eq(i).css('background', '#faff00');
				board[i][1] = 2;
				winnerChecker(i,1, player);
				player = 1;
			}
			break;			
		}
	}
	print();
});

$('.col2').on('click', function(){
	console.log("clicked");
	for(var i = 6; i >= 0; i--){
		if(board[i][2] == 0){
			console.log(player);
			if(player == 1){
				$('.col2').eq(i).css('background', '#ff0000');
				board[i][2] = 1;
				winnerChecker(i,2, player);
				player = 2;
			}
			else if(player == 2){
				$('.col2').eq(i).css('background', '#faff00');
				board[i][2] = 2;
				winnerChecker(i,2, player);
				player = 1;
			}
			break;			
		}
	}
	print();
});

$('.col3').on('click', function(){
	console.log("clicked");
	for(var i = 6; i >= 0; i--){
		if(board[i][3] == 0){
			console.log(player);
			if(player == 1){
				$('.col3').eq(i).css('background', '#ff0000');
				board[i][3] = 1;
				winnerChecker(i,3, player);
				player = 2;
			}
			else if(player == 2){
				$('.col3').eq(i).css('background', '#faff00');
				board[i][3] = 2;
				winnerChecker(i,3, player);
				player = 1;
			}
			break;			
		}
	}
	print();
});

$('.col4').on('click', function(){
	console.log("clicked");
	for(var i = 6; i >= 0; i--){
		if(board[i][4] == 0){
			console.log(player);
			if(player == 1){
				$('.col4').eq(i).css('background', '#ff0000');
				board[i][4] = 1;
				winnerChecker(i,4, player);
				player = 2;
			}
			else if(player == 2){
				$('.col4').eq(i).css('background', '#faff00');
				board[i][4] = 2;
				winnerChecker(i,4, player);
				player = 1;
			}
			break;			
		}
	}
	print();
});

$('.col5').on('click', function(){
	console.log("clicked");
	for(var i = 6; i >= 0; i--){
		if(board[i][5] == 0){
			console.log(player);
			if(player == 1){
				$('.col5').eq(i).css('background', '#ff0000');
				board[i][5] = 1;
				winnerChecker(i,5, player);
				player = 2;
			}
			else if(player == 2){
				$('.col5').eq(i).css('background', '#faff00');
				board[i][5] = 2;
				winnerChecker(i,5, player);
				player = 1;
			}
			break;			
		}
	}
	print();
});

$('.col6').on('click', function(){
	console.log("clicked");
	for(var i = 6; i >= 0; i--){
		if(board[i][6] == 0){
			console.log(player);
			if(player == 1){
				$('.col6').eq(i).css('background', '#ff0000');
				board[i][6] = 1;
				winnerChecker(i,6, player);
				player = 2;
			}
			else if(player == 2){
				$('.col6').eq(i).css('background', '#faff00');
				board[i][6] = 2;
				winnerChecker(i,6, player);
				player = 1;
			}
			break;			
		}
	}
	print();
});


//blank_cell//
var color = "#ff0000";

$('.cell_blank').hover(function() {
	/* Stuff to do when the mouse enters the element */
	if(player == 1){
	color = "#ff0000";
	}else{
		color = "#faff00";
	}
	$(this).css("background", color);
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$(this).css("background", "white");
});