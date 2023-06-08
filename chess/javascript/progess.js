function addchoiceclicks(piece) {
    const id = piece.attribute;
    const piecesquare = document.getElementById(id);
    console.log(piece, 'ourpiece', id, piecesquare)
    const listeners = new Map(); // Use a Map to store the event listeners
 
    for (let i = 0; i < piece.validMoves.length; i++) {
       const subArray = piece.validMoves[i];
       const rowString = subArray[0].toString();
       const colString = subArray[1].toString();
       const rowcol = `${rowString},${colString}`;
       const square = document.getElementById(rowcol);
       const otherpiece= square.getElementsByTagName('img')[0]
       if (otherpiece) {
          onclickelement = otherpiece.onclick
          otherpiece.onclick = null
       }
 
       const clickHandler = function() {
 
          
 
          console.log(piecesquare, square)
          helpadd(square, piecesquare);
          game.count ++
          unrenderValid()
 
          pieceid = piecesquare.id
          piece = null
 
          for (const piecer of pieces) {
             if (piecer.hasOwnProperty('attribute') && piecer['attribute'] === pieceid) {
                piece = piecer
             }
          }
 
          if (square.childNodes.length > 1) {
             for (i= 0; i < square.childNodes.length; i ++) {
                childnode = square.childNodes[i]
                if (childnode.id) {
                   if (childnode.id != piece.attribute) {
                      for (const piecer of pieces) {
                         if (piecer.attribute === childnode.id) {
                            pieces.delete(piecer)
                            square.removeEventListener('click', clickHandler);
                         }
                      }
                      childnode.remove()
                      piece.took = true
                   }
                }
             }
          }
          for (i= 0; i< piece.validMoves.length; i ++) {
             let valmove = piece.validMoves[i]
             const rowString = valmove[0].toString();
             const colString = valmove[1].toString();
             const rowcol = `${rowString},${colString}`;
             const square = document.getElementById(rowcol);
             let otherpiece = square.getElementsByTagName('img')[0]
             if (otherpiece && otherpiece != piecesquare) {
                const listeners = piece.eventListeners;
                for (const [square, clickHandler] of listeners) {
                   square.removeEventListener('click', clickHandler);
                }
 
                otherpiece.onclick = function() {
                   createPiece(this.id);
                 };
             }
          }
 
          piece.active = true 
          piece.availableMoves = []
          piece.validmove = []
          rowcolPiece(piece)
          pawnMoves(piece)
          rookMoves(piece)
          bishopMoves(piece)
          knightMoves(piece)
          isValid(piece)
          console.log(piece, 'piecemoving')
          console.log(game.count)
 
          const listeners = piece.eventListeners;
          for (const [square, clickHandler] of listeners) {
             square.removeEventListener('click', clickHandler);
          }
          piece.eventListeners = new Map()
 
          check4check(piece)
          ifcheck()
 
 
       };
       
       square.addEventListener('click', clickHandler);
 
       // Store the event listener function reference in the Map
       listeners.set(square, clickHandler);
       piece.validsquares.add(square)
    }
 
    // Store the listeners in the piece object
    piece.eventListeners = listeners;
 }
 
 function helpadd(square, piecesquare) {
       square.appendChild(piecesquare)
 
 }