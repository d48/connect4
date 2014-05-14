var aBoard1 = [
          ['-','-','-','-','-','-','-']
        , ['-','-','-','-','-','-','-']
        , ['-','-','-','R','R','R','R']
        , ['-','-','-','Y','Y','R','Y']
        , ['-','-','-','Y','R','Y','Y']
        , ['-','-','Y','Y','R','R','R']
    ]
    , aBoard2 = [
          ['-','-','-','-','-','-','-']
        , ['-','-','-','-','-','-','-']
        , ['-','-','-','-','-','-','-']
        , ['-','-','-','-','-','-','-']
        , ['-','-','-','-','-','-','-']
        , ['-','-','-','-','-','-','-']
    ]
    , elGame = document.querySelector('#game')
    , btnCreate = document.querySelector('#btnCreate')
    , bGameCreated = false
    , oGame 
    ; 


// create game button
btnCreate.addEventListener('click', function() {
    if (!bGameCreated) {
        // create game instance
        oGame = new Board({
            target: elGame
            , gameBoard: aBoard2 
        });

        elGame.className += ' show';
    }
    bGameCreated = true;
});


