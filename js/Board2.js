var Board2 = (function() {
    var Board2 = function(options) {
        var options = options || {};
        this.gameBoard = typeof options.gameBoard !== 'undefined' ? options.gameBoard : [];
        this.directions= typeof options.directions !== 'undefined' ? options.directions : document.querySelector('#directions');
        this.output = typeof options.output !== 'undefined' ? options.output : document.querySelector('#output');
        this.target = typeof options.target !== 'undefined' ? options.target : document.querySelector('.game');
        this.currentPlayer = 1;
        var played = {
            slot_1: []
            , slot_2: []
            , slot_3: []
            , slot_4: []
            , slot_5: []
            , slot_6: []
            , slot_7: []
        }
        var numbers = typeof options.numbers !== 'undefined' ? options.numbers : document.querySelector('.numbers');

        function _init() {

            console.log('in new init');
           _drawBoard.call(this);
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
                    spanText.className = 'piece red';
                    liCol.appendChild(spanText);
                    break;
                case 'Y': 
                    spanText = document.createElement('span');
                    spanText.className = 'piece yellow';
                    liCol.appendChild(spanText);
                    break;
                default:
                    break;
            }

            return liCol;
        }




        /**
         * draws game board out based on gameBoard property. 
         * Includes numbers for keyboard
         * @name _drawBoard
         * @returns {void} - outputs HTML to screen
         * @property {array} gameBoard - array for game matrix
         * @method 
         * @memberof Board
         * @inner
         */
        function _drawBoard() {
            console.log('in new draw board');
            var nCol = 0
                , nRow = 0
                , lenRows = this.gameBoard.length 
                , divContainer = document.createElement('div')
                , numberRow = document.createElement('ul')
                , ulRow
                , liCol
                , lenCol
                , row
                , numRowLi
                ;


            // iterate through game array, starting at rows
            for(; nRow < lenRows; nRow++) {
                ulRow = document.createElement('ul');

                row = this.gameBoard[nRow];
                lenCol = row.length;

                // iterate through row columns
                for(; nCol < lenCol; nCol++) {
                    // create numbers row
                    if (nRow === (lenRows - 1)) {
                        numRowLi = document.createElement('li');
                        numRowLi.innerText = nCol + 1;
                        numberRow.appendChild(numRowLi);
                    }
                    ulRow.appendChild(_processCell(row[nCol]));
                }
                // reset column
                nCol = 0; 

                // append row to container
                divContainer.appendChild(ulRow); 
            }

            // append container to body
            divContainer.className = 'gameContainer';
            numberRow.className = 'numbers show';
            this.target.parentNode.insertBefore(numberRow, this.target);
            this.target.appendChild(divContainer);
        }


        _init.call(this);

    };

    return function (options) {
        return new Board2(options);
    }

})();
