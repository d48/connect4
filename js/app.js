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

    function _processCell(sText) {
        var liCol = document.createElement('li');

        switch(sText) {
            case 'R': 
                spanText = document.createElement('span');
                spanText.innerText = sText;     
                spanText.className = 'pieceRed';
                liCol.appendChild(spanText);
                break;
            case 'Y': 
                spanText = document.createElement('span');
                spanText.innerText = sText;     
                spanText.className = 'pieceYellow';
                liCol.appendChild(spanText);
                break;
            default:
                liCol.innerText= '';
                break;
        }

        return liCol;
    }

    function _drawBoard() {
        var nCol = 0
            , nRow = 0
            , lenRows = this.gameBoard.length
            , fragContainer = document.createDocumentFragment()
            , ulRow
            , liCol
            , lenCol
            , sText
            ;


        // iterate through game array, starting at rows
        for(; nRow < lenRows; nRow++) {
            ulRow = document.createElement('ul');

            row = this.gameBoard[nRow];
            lenCol = row.length;

            // iterate through row columns
            for(; nCol < lenCol; nCol++) {
                ulRow.appendChild(_processCell(row[nCol]));
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


// create instance
var board = new Board({
    target: elGame
    , gameBoard: aBoard1 
});

