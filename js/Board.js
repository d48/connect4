/**
 * Namespace for game board
 * 
 * @name Board
 * @param {object} [options] - board configuration options
 * @returns {object} - game board object with api: gameBoard, target
 * @namespace
 * @todo create iife to hold context of instance. Should fix `this` referring to window
 */
var Board = function(options) {

    this.gameBoard = typeof options.gameBoard !== 'undefined' ? options.gameBoard : [];
    this.directions= typeof options.directions !== 'undefined' ? options.directions : document.querySelector('#directions');
    this.output = typeof options.output !== 'undefined' ? options.output : document.querySelector('#output');
    this.target = typeof options.target !== 'undefined' ? options.target : null;
    this.currentPlayer = 1;
    this.played = {
        slot_1: []
        , slot_2: []
        , slot_3: []
        , slot_4: []
        , slot_5: []
        , slot_6: []
        , slot_7: []
    }

    /**
     * kicks of game lifecycle
     * 
     * @name _init
     * @returns {void} - process game board drawing and results
     * @method 
     * @memberof Board
     * @inner
     */
    function _init() {
        _drawBoard.call(this);

    }

    function showBoard() {
        if (this.target.className.indexOf('show') === -1) {
            this.target.className += ' show';
            this.showMessage("Player " + this.currentPlayer + "'s turn");
            this.showMessage("Press number keys 1 - 6 to drop piece into slot", "directions");
        }
    }

    function _getPieceColor() {
        return this.currentPlayer === 1 ? ' piece red' : ' piece yellow';
    }

    function _getRowNumber(slot) {
        return ' row_' + this.played['slot_' + slot].length;
    }

    function _canDrop(slot) {
        return this.played['slot_' + slot].length < 6 ? true : false;
    }

    function dropPiece(slot) {
        if (!_canDrop.call(this,slot)) {
            return;
        }
        var piece = document.createElement('div');
        this.played['slot_' + slot].push(this.currentPlayer);
        piece.className = 'slot_' + slot + _getPieceColor.call(this) + _getRowNumber.call(this,slot);

        this.target.appendChild(piece);    
        this.changePlayer();
    }

    function changePlayer() {
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        this.showMessage("Player " + this.currentPlayer + "'s turn");
    }

    /**
     * Shows output of message to screen
     * 
     * @name showMessage
     * @param {string} msg - message to show
     * @param {string} type - default message area or directions above the game
     * @returns {void} - outputs text to screen
     * @method 
     * @memberof Board
     * @inner
     */
    function showMessage(msg, type) {
        if (type && type === 'directions') {
            this.directions.className = 'show';
            this.directions.innerText = msg;
        } else {
            this.output.innerText = msg;
        }
    }


    /**
     * Determines how cell should be rendered based on type that is passed in
     * 
     * @name _processCell
     * @param {string} sText - R|Y|- for red, yellow, or blank
     * @returns {object} liCol - dom element for li
     * @method 
     * @memberof Board
     * @inner
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
     * @memberof Board
     * @inner
     */
    function _drawBoard() {
        var nCol = 0
            , nRow = 0
            , lenRows = this.gameBoard.length
            , divContainer = document.createElement('div')
            , ulRow
            , liCol
            , lenCol
            , row
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

    // Board api
    return {
        gameBoard: this.gameBoard
        , changePlayer: changePlayer
        , currentPlayer: this.currentPlayer
        , dropPiece: dropPiece
        , showMessage: showMessage
        , directions: this.directions
        , output: this.output 
        , played: this.played
        , showBoard: showBoard
        , target: this.target
    }
};





