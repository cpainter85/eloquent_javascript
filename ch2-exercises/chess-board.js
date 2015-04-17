var size = 8, chessBoard = ''

for (var row = 1; row <= size; row++) {
  for (var space = 1; space <=size; space ++ ){
    if (row % 2 === 0)
      if (space % 2 === 0) {
        chessBoard += ' ';
      }
      else {
        chessBoard += '#';
      }
    else {
      if (space % 2 === 0) {
        chessBoard += '#';
      }
      else {
        chessBoard += ' ';
      }
    }
  }
  chessBoard += '\n'
}

console.log(chessBoard);
