var isSafe = function( board, colToTry ) { 
  var curRow = board.length; 
  for( var i = 0; i < curRow; i++ ) { 
    var positionDiff = Math.abs( board[i] - colToTry ); 
    if( positionDiff === 0 || positionDiff === curRow - i ){ 
      return false; 
    } 
  } 
  return true; 
} 

var placeQueen = function( board, colToTry ) { 
  board.push(colToTry); 
}; 

var removeQueen = function( board ) { 
  board.pop();  
}; 

var qnSolver = function(board, gameSize, curRow){ 
  if( curRow >= gameSize ) {
    console.log(board);   
    return true; 
  } 
  
  for( var colToTry = 0; colToTry < gameSize; colToTry++ ){ 
    if( isSafe( board, colToTry ) ){ 
      placeQueen( board, colToTry )   
      if( qnSolver( board, gameSize, curRow + 1 ) ){ 
        return true; 
      } 
      removeQueen( board ); 
    } 
  }
  return false; 
};

var mainFn = function(N){ 
  var board = []; 
  qnSolver([], N, 0); 
};  

var solution = [0,6,4,7,1,3,5,2]; 
var partial = [0,6,4,7,1,3,5]; 

var res = mainFn(8); 
console.log(res); 

// for(var i = 0; i < 8; i++){ 
 // console.log("idx: " + i + " isSafe: " + isSafe( partial, i)); 
// }

