class TicTacToe {
    constructor() {
		this.player = 'x';
		this.field = [[null, null, null],[null, null, null],[null, null, null]];
		this.fieldLeft = 9;
		this.winner = null;
    }

    getCurrentPlayerSymbol() {
		return(this.player);
    }

    nextTurn(rowIndex, columnIndex) {
		if (this.field[rowIndex][columnIndex] == null)
		{
			if (this.fieldLeft > 0)
				this.fieldLeft--;
			
			this.field[rowIndex][columnIndex] = this.player;
			if ((this.field[rowIndex][0] == this.field[rowIndex][1])&&(this.field[rowIndex][1]) == (this.field[rowIndex][2]))
				this.winner = this.player;
			else if ((this.field[0][columnIndex] == this.field[1][columnIndex])&&(this.field[1][columnIndex] == this.field[2][columnIndex]))
				this.winner = this.player;
			else if ((this.field[1][1] != null)&&(((this.field[0][0] == this.field[1][1])&&(this.field[1][1] == this.field[2][2]))||((this.field[0][2] == this.field[1][1])&&(this.field[1][1] == this.field[2][0]))))
				this.winner = this.player;
			
			this.player = (this.player == 'o') ? 'x' : 'o';
		}
    }

    isFinished() {
		return (this.winner != null || this.fieldLeft == 0);
    }

    getWinner() {
		return (this.winner);
    }

    noMoreTurns() {
		return (this.fieldLeft == 0);
    }

    isDraw() {
		return (this.winner == null && this.fieldLeft == 0);
    }

    getFieldValue(rowIndex, colIndex) {
		return (this.field[rowIndex][colIndex]);
    }
}

module.exports = TicTacToe;
