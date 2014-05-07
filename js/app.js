var aBoard1 = [
 ['-','-','-','-','-','-','-'],
 ['-','-','-','-','-','-','-'],
 ['-','-','-','R','R','R','R'],
 ['-','-','-','Y','Y','R','Y'],
 ['-','-','-','Y','R','Y','Y'],
 ['-','-','Y','Y','R','R','R']
 ]
, elGame = document.querySelector('#game');
; 




var Board = function(options) {

    this.gameBoard = typeof options.gameBoard !== 'undefined' ? options.gameBoard : [];
    this.target = typeof options.target !== 'undefined' ? options.target: null;

    function init() {
        _drawBoard.call(this);
    }

    function _drawBoard() {
        var i = 0
            , len = this.gameBoard.length
            , ulContainer = document.createElement('ul')
            , liRow
            ;

        // iterate through game array
        for(; i < len; i++) {
            liRow = document.createElement('li');
            liRow.innerHTML = this.gameBoard[i];
            ulContainer.appendChild(liRow);
        }

        // append to body
        this.target.appendChild(ulContainer);
    }


    init.call(this);

    return {
        gameBoard: this.gameBoard
        , target: this.target
    }

};

var board = new Board({
    target: elGame
    , gameBoard: aBoard1 
});

