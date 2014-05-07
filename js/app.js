var aBoard1 = [
          ['-','-','-','-','-','-','-']
        , ['-','-','-','-','-','-','-']
        , ['-','-','-','R','R','R','R']
        , ['-','-','-','Y','Y','R','Y']
        , ['-','-','-','Y','R','Y','Y']
        , ['-','-','Y','Y','R','R','R']
    ]
    , elGame = document.querySelector('#game')
    , btnCreate = document.querySelector('#btnCreate')
    , bGameCreated = false;
    ; 


// create game button
btnCreate.addEventListener('click', function() {
    if (!bGameCreated) {
        // show spinner 
        
        // var elSpinner = document.createElement('div');

        // elSpinner.className = 'spinner';
        // elGame.appendChild(elSpinner);
        
        // create game instance
        var board = new Board({
            target: elGame
            , gameBoard: aBoard1 
        });
    }
    bGameCreated = true;
});


