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
    , elOutput = document.querySelector('#output')
    , elDirections= document.querySelector('#directions')
    , bGameCreated = false
    , oGame 
    ; 



document.addEventListener('keyup', function(event) {
    // console.log('event', event.which);    
    switch(event.which) {
        // up
        case 38:
            oGame.showBoard();
            break;
        // num 1
        case 49:
            oGame.dropPiece(1);
            break;
        // num 2 
        case 50:
            oGame.dropPiece(2);
            break;
        // num 3 
        case 51:
            oGame.dropPiece(3);
            break;
        // num 4 
        case 52:
            oGame.dropPiece(4);
            break;
        // num 5 
        case 53:
            oGame.dropPiece(5);
            break;
        // num 6 
        case 54:
            oGame.dropPiece(6);
            break;
        // num 7 
        case 55:
            oGame.dropPiece(7);
            break;
        default:
            break;
    }
});

oGame = new Board({
    target: elGame
    , gameBoard: aBoard1
});
bGameCreated = true;
oGame.showMessage('Press Up arrow to begin game');



