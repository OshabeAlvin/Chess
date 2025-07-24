const board = document.getElementById('chessboard');
let selectedPiece = null;

// Initial board setup with Unicode pieces
const initialBoard = [
  ['♜','♞','♝','♛','♚','♝','♞','♜'],
  ['♟','♟','♟','♟','♟','♟','♟','♟'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['♙','♙','♙','♙','♙','♙','♙','♙'],
  ['♖','♘','♗','♕','♔','♗','♘','♖']
];

function createBoard() {
  board.innerHTML = '';

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.className = 'square ' + ((row + col) % 2 === 0 ? 'white' : 'black');
      square.dataset.row = row;
      square.dataset.col = col;
      square.innerText = initialBoard[row][col];

      square.addEventListener('click', () => handleClick(square));

      board.appendChild(square);
    }
  }
}

function handleClick(square) {
  if (selectedPiece === null && square.innerText !== '') {
    // Select a piece
    selectedPiece = square;
    square.classList.add('highlight');
  } else if (selectedPiece) {
    // Move piece to new square
    square.innerText = selectedPiece.innerText;
    selectedPiece.innerText = '';
    selectedPiece.classList.remove('highlight');
    selectedPiece = null;
  }
}

createBoard();
