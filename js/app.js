var Board = function(options) {

    this.gameBoard = typeof options.gameBoard !== 'undefined' ? options.gameBoard : [];
    this.target = typeof options.target !== 'undefined' ? options.target: null;


    /**
     * kicks of game lifecycle
     * 
     * @name _init
     * @returns {void} - process game board drawing and results
     * @method 
     */
    function _init() {
        _drawBoard.call(this);
        _showResult();
    }


    /**
     * Shows output of which color wins
     * 
     * @name _showResult
     * @returns {void} - outputs text to screen
     * @method 
     */
    function _showResult() {
        var elResultContainer = document.createElement('div')
            , elGameTarget = this.target
            ;

        elResultContainer.className = 'results';
        elResultContainer.innerText = 'Red wins';

        elGameTarget.parentNode.appendChild(elResultContainer); 
    }


    /**
     * Determines how cell should be rendered based on type that is passed in
     * 
     * @name _processCell
     * @param {string} sText - R|Y|- for red, yellow, or blank
     * @returns {object} liCol - dom element for li
     * @method 
     */
    function _processCell(sText) {
        var liCol = document.createElement('li');

        switch(sText) {
            case 'R': 
                spanText = document.createElement('span');
                spanText.className = 'pieceRed';
                liCol.appendChild(spanText);
                break;
            case 'Y': 
                spanText = document.createElement('span');
                spanText.className = 'pieceYellow';
                liCol.appendChild(spanText);
                break;
            default:
                break;
        }

        return liCol;
    }


    /**
     * draws game board out based on gameBoard property
     * 
     * @name _drawBoard
     * @returns {void} - outputs HTML to screen
     * @property {array} gameBoard - array for game matrix
     * @method 
     */
    function _drawBoard() {
        var nCol = 0
            , nRow = 0
            , lenRows = this.gameBoard.length
            , divContainer = document.createElement('div')
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
            divContainer.appendChild(ulRow); 
        }

        // append container to body
        divContainer.className = 'gameContainer';
        this.target.appendChild(divContainer);
    }


    _init.call(this);

    // api
    return {
        gameBoard: this.gameBoard
        , target: this.target
    }
};



