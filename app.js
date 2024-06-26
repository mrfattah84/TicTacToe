function gameBoard(px,po) {
    let board = [0,0,0,0,0,0,0,0,0];
    let players = [{name : px, sign : 'X', score : 0},{name : po, sign : 'O', score : 0}];
    let turn = 0;
    const toggleTurn = function(){
        turn =  turn == 0 ? 1 : 0;
    };
    const makeChange = function(i) {
        if (board[i] == 0) {
            board[i] = players[turn].sign;
            toggleTurn();
            if (checkWin() != false) {
                alert(`${checkWin()} Wins`);
                checkWin() == 'X' ? players[0].score++ : players[1].score++;
                reset();
            } else if (checkWin() == false && checkTie()) {
                alert('Tie');
                reset();
            }
            console.log(`${board[0]}|${board[1]}|${board[2]}`)
            console.log(`${board[3]}|${board[4]}|${board[5]}`)
            console.log(`${board[6]}|${board[7]}|${board[8]}`)
        }
    };
    const checkWin = function(){
        if (board[0] == board[1] && board[1] == board[2] && board[0] != 0) {
            return board[0];
        } else if (board[3] == board[4] && board[4] == board[5] && board[3] != 0) {
            return board[3];
        } else if (board[6] == board[7] && board[7] == board[8] && board[6] != 0) {
            return board[6];
        } else if (board[0] == board[3] && board[3] == board[6] && board[0] != 0) {
            return board[0];
        } else if (board[1] == board[4] && board[4] == board[7] && board[1] != 0) {
            return board[1];
        } else if (board[2] == board[5] && board[5] == board[8] && board[2] != 0) {
            return board[2];
        } else if (board[0] == board[4] && board[4] == board[8] && board[0] != 0) {
            return board[0];
        } else if (board[2] == board[4] && board[4] == board[6] && board[2] != 0) {
            return board[2];
        } else {
            return false;
        }
    };
    const checkTie = function(){
        try{
            board.forEach(place => {
                if (place == 0) {
                    throw new Error("board not comlited")
                }
            });
        } catch (error) {
            return false;
        }
        return true
    };
    const reset = function(){
        for (let i = 0; i < board.length; i++) {
            board[i] = 0;
        }
        turn = 0;
    };

    return {reset, makeChange, board, players, turn}
};

(function(){
    document.querySelector('dialog').showModal();
    document.querySelector('form').addEventListener('submit', () => {
        const px = document.getElementById('px').value;
        const po = document.getElementById('po').value;
        let game = gameBoard(px, po);
        const Cells = document.querySelectorAll('.gameCell');
        scoreBoard = document.querySelectorAll('.score');
        const loader = function(){
            Cells.forEach(Cell => {
                Cell.innerHTML = game.board[Cell.id] != 0 ? game.board[Cell.id] : '';
            });
            scoreBoard[0].innerHTML = `${px} : ${game.players[0].score}`;
            scoreBoard[1].innerHTML = `${po} : ${game.players[1].score}`;
        }
        loader();
        document.querySelector('.gameBoard').addEventListener('click', (e) => {
            game.makeChange(e.target.id);
            loader();
        })
        
        document.querySelector('.reset').addEventListener('click', () => {
            game.reset();
            loader();
        })
    })
})();
