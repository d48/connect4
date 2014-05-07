var aBoard1 = [
          ['-','-','-','-','-','-','-']
        , ['-','-','-','-','-','-','-']
        , ['-','-','-','R','R','R','R']
        , ['-','-','-','Y','Y','R','Y']
        , ['-','-','-','Y','R','Y','Y']
        , ['-','-','Y','Y','R','R','R']
    ]
    , elGame = document.querySelector('#game')
    , elOutput = document.querySelector('#output')
    ; 




var Board = function(options) {

    this.gameBoard = typeof options.gameBoard !== 'undefined' ? options.gameBoard : [];
    this.target = typeof options.target !== 'undefined' ? options.target: null;

    function _init() {
        _drawBoard.call(this);
    }

    function _drawBoard() {
        var nCol = 0
            , nRow = 0
            , lenRows = this.gameBoard.length
            , fragContainer = document.createDocumentFragment()
            , ulRow
            , liCol
            , lenCol
            ;

        // iterate through game array, starting at rows
        for(; nRow < lenRows; nRow++) {
            ulRow = document.createElement('ul');

            row = this.gameBoard[nRow];
            lenCol = row.length;

            // iterate through row columns
            for(; nCol < lenCol; nCol++) {
                liCol = document.createElement('li');
                liCol.innerText = row[nCol];
                ulRow.appendChild(liCol);
            }
            // reset column
            nCol = 0; 

            // append row to container
            fragContainer.appendChild(ulRow); 
        }

        // append container to body
        this.target.appendChild(fragContainer);
    }


    _init.call(this);

    return {
        gameBoard: this.gameBoard
        , target: this.target
    }

};

var board = new Board({
    target: elGame
    , gameBoard: aBoard1 
});

