let gameBoard = {
    board: [0,0,0,0,0,0,0,0,0],
    players : [{name : 'ali', sign : 'X', score : 0},{name : 'mmd', sign : 'O', score : 0}],
    turn : 0,
    toggleTurn : function(){
        this.turn =  this.turn == 0 ? 1 : 0;
    },
    makeChange : function(i) {
        if (this.board[i] == 0) {
            this.board[i] = this.players[this.turn].sign;
            if (this.checkWin() != false) {
                console.log(`${this.checkWin()} Wins`)
                this.checkWin() == 'X' ? this.players[0].score++ : this.players[1].score++
                this.reset()
            } else if (this.checkWin() == false && this.checkTie()) {
                console.log('Tie')
                this.reset()
            }
            console.log(`${this.board[0]}|${this.board[1]}|${this.board[2]}`)
            console.log(`${this.board[3]}|${this.board[4]}|${this.board[5]}`)
            console.log(`${this.board[6]}|${this.board[7]}|${this.board[8]}`)
            this.toggleTurn()
        }
    },
    checkWin : function(){
        if (this.board[0] == this.board[1] && this.board[1] == this.board[2] && this.board[0] != 0) {
            return this.board[0];
        } else if (this.board[3] == this.board[4] && this.board[4] == this.board[5] && this.board[3] != 0) {
            return this.board[3];
        } else if (this.board[6] == this.board[7] && this.board[7] == this.board[8] && this.board[6] != 0) {
            return this.board[6];
        } else if (this.board[0] == this.board[3] && this.board[3] == this.board[6] && this.board[0] != 0) {
            return this.board[0];
        } else if (this.board[1] == this.board[4] && this.board[4] == this.board[7] && this.board[1] != 0) {
            return this.board[1];
        } else if (this.board[2] == this.board[5] && this.board[5] == this.board[8] && this.board[2] != 0) {
            return this.board[2];
        } else if (this.board[0] == this.board[4] && this.board[4] == this.board[8] && this.board[0] != 0) {
            return this.board[0];
        } else if (this.board[2] == this.board[4] && this.board[4] == this.board[6] && this.board[2] != 0) {
            return this.board[2];
        } else {
            return false;
        }
    },
    checkTie : function(){
        try{
            this.board.forEach(place => {
                if (place == 0) {
                    throw new Error("board not comlited")
                }
            });
        } catch (error) {
            return false;
        }
        return true
    },
    reset : function(){
        this.board = [0,0,0,0,0,0,0,0,0];
        this.turn = 0;
    }
};
