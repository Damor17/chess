 function Piece(id) {
    this.attribute = id; 
    this.color = "";
    this.availableMoves = [];
    this.validMoves = [];
    this.row = 0 ;
    this.col = 0 ; 
    this.clicked = 0;
    this.class = "";
    this.validsquares = new Set();
    this.eventListeners = new Map();
    this.active = false;
    this.check = false;
    this.valid = false;
 }

 const game = {
   pieces : new Set(),
   count : 0,
   winner: null,
   move : 0,
   render : [],
   check : false,
   checkColor: "",
   checkingpiece : null,
 }


pieces = new Set()

 function playGame() {
 }


 function helpcreatepiece(piece) {
   attPiece(piece.attribute)
   rowcolPiece(piece.attribute)
   pawnMoves(piece)
   rookMoves(piece)
   bishopMoves(piece)
   knightMoves(piece)
   kingMoves(piece)
   isValid(piece)
   renderValid(piece)
   deletemoves(piece)
   addchoiceclicks(piece)
   
   piece.clicked ++
 }

function createPiece(id) {
   piece = new Piece(id);
   for (const piecer of pieces) {
      if (piecer != piece) {
         deletemoves(piece)
         unrenderValid(piecer)
      }
      if (piecer.attribute === piece.attribute && piecer != piece) {
         pieces.delete(piecer)
         unrenderValid(piecer)
      }
   }

   //what pieces are available based on color 
   attPiece(piece.attribute)
   if (game.count % 2 === 0) {
      if (piece.color === 'ghost') {
         helpcreatepiece(piece)
         //if king in check, cant block moves just yet 
         // checkingpiece = game.checkingpiece 
         // if (checkingpiece) {
         //    checkingmoves = checkingpiece.validMoves
         //    onlymoves = []
         //    for (i = 0; i <piece.validmoves.lenght; i++) {
         //       ourmove = piece.validmoves[i]
         //       for (j = 0; j < checkingmoves.lenght; j++) {
         //          theremove = checkingmoves[j]
         //          if ( ourmove === theremove) {
         //             onlymoves.push(ourmove)
         //             piece.valid = true
         //             piece.validMoves = onlymoves
         //          }
         //       }
         //    }
         // }
         // if (game.check === true && piece.attribute != "ghost-king" && piece.valid != true) {
         //    const listeners = piece.eventListeners;
         //    for (const [square, clickHandler] of listeners) {
         //       square.removeEventListener('click', clickHandler);
         //       }
         //    piece.eventListeners = new Map()
         //    unrenderValid(piece)
         // }
      }
      else {
         for (const piecest of pieces) {
            if (piecest.color === 'black') {
               const listeners = piecest.eventListeners;
               for (const [square, clickHandler] of listeners) {
               square.removeEventListener('click', clickHandler);
               }
               piecest.eventListeners = new Map()
               unrenderValid(piecest)
            }
         }
      }

   }
   else {
      if (piece.color === 'black') {
         helpcreatepiece(piece)
         // if (game.check === true && piece.attribute != "b-king") {
         //    const listeners = piece.eventListeners;
         //    for (const [square, clickHandler] of listeners) {
         //       square.removeEventListener('click', clickHandler);
         //       }
         //    piece.eventListeners = new Map()
         //    unrenderValid(piece)
         // }
      }
      else {
         for (const piecest of pieces) {
            if (piecest.color === 'ghost') {
               const listeners = piecest.eventListeners;
               for (const [square, clickHandler] of listeners) {
               square.removeEventListener('click', clickHandler);
               }
               piecest.eventListeners = new Map()
               unrenderValid(piecest)
            
            }
         }
      }
   }

   pieces.add(piece)
   console.log(piece)
   console.log(pieces)
}


 function attPiece(id) {
   const element = document.getElementById(id);
   const classlist = element.classList;
   const color = classlist[1]
   const clast = classlist[2]
   piece.color = color
   piece.class = clast 
 }

 function rowcolPiece(id) {
   const active = document.getElementById(id);
   const prev = active.parentElement.id;

   piece.row = Number(prev[0])
   piece.col = Number(prev[2])

 }

 function pawnMoves(piece) {
   if (piece.class ==="pawn" && piece.color === "black"){
      row = piece.row
      col = piece.col
      if (row === 2){
         for (let i = 1; i <3; i ++ ) {
            posrow = row + i
            move = [posrow, col]
            const rowString = posrow.toString();
            const colString = col.toString();
            const rowcol = `${rowString},${colString}`;
            const square = document.getElementById(rowcol);
            if (square.innerHTML) { break
            }
            else{ 
               piece.availableMoves.push(move)}
         }
         posrow = row + 1
         left = col - 1
         right = col + 1
         diagnol_right = [posrow, right]
         diagnol_left = [posrow, left]
         const rowString = posrow.toString();
         const colStringright = right.toString();
         const colStringleft = left.toString();
         const rowcolright = `${rowString},${colStringright}`;
         const rowcolleft = `${rowString},${colStringleft}`;
         const squareright = document.getElementById(rowcolright);
         const squareleft = document.getElementById(rowcolleft);

            if (squareright && squareleft) {
               if (squareright.innerHTML && squareleft.innerHTML) {
                  piece.availableMoves.push(diagnol_right)
                  piece.availableMoves.push(diagnol_left)
               }
            }
            if (squareright) {
               if (squareright.innerHTML) {
                  piece.availableMoves.push(diagnol_right)
               }
   
            }
            if (squareleft) {
               if (squareleft.innerHTML) {
                  piece.availableMoves.push(diagnol_left)
               }
            }
      }

      else {posrow = row + 1
         move = [posrow, col]
         left = col - 1
         right = col + 1
         diagnol_right = [posrow, right]
         diagnol_left = [posrow, left]
         const rowString = posrow.toString();
         const colStringright = right.toString();
         const colStringleft = left.toString();
         const rowcolright = `${rowString},${colStringright}`;
         const rowcolleft = `${rowString},${colStringleft}`;
         const squareright = document.getElementById(rowcolright);
         const squareleft = document.getElementById(rowcolleft);

            if (squareright && squareleft) {
               if (squareright.innerHTML && squareleft.innerHTML) {
                  piece.availableMoves.push(diagnol_right)
                  piece.availableMoves.push(diagnol_left)
               }
            }
            if (squareright) {
               if (squareright.innerHTML) {
                  piece.availableMoves.push(diagnol_right)
               }
   
            }
            if (squareleft) {
               if (squareleft.innerHTML) {
                  piece.availableMoves.push(diagnol_left)
               }
            }

         const colString = col.toString()
         const rowcol = `${rowString},${colString}`;
         const square = document.getElementById(rowcol);

         if (square.innerHTML) {
            move = []   
         }

         piece.availableMoves.push(move)}
   }

   if (piece.class ==="pawn" && piece.color === "ghost") {
      row = piece.row
      col = piece.col
      if (row === 7) {
         for (let i = 1; i <3; i ++ ) {
            posrow = row - i
            move = [posrow, col]
            const rowString = posrow.toString();
            const colString = col.toString();
            const rowcol = `${rowString},${colString}`;
            const square = document.getElementById(rowcol);
            if (square.innerHTML) { break
            }
            else{ piece.availableMoves.push(move)}
         }
         posrow = row - 1
         move = [posrow, col]
         left = col - 1
         right = col + 1
         diagnol_right = [posrow, right]
         diagnol_left = [posrow, left]
         const rowString = posrow.toString();
         const colStringright = right.toString();
         const colStringleft = left.toString();
         const rowcolright = `${rowString},${colStringright}`;
         const rowcolleft = `${rowString},${colStringleft}`;
         const squareright = document.getElementById(rowcolright);
         const squareleft = document.getElementById(rowcolleft);
         if (squareright && squareleft) {
            if (squareright.innerHTML && squareleft.innerHTML) {
               piece.availableMoves.push(diagnol_right)
               piece.availableMoves.push(diagnol_left)
            }
         }
         if (squareright) {
            if (squareright.innerHTML) {
               piece.availableMoves.push(diagnol_right)
            }

         }
         if (squareleft) {
            if (squareleft.innerHTML) {
               piece.availableMoves.push(diagnol_left)
            }
         }
      }
      else {posrow = row - 1
         move = [posrow, col]
         left = col - 1
         right = col + 1
         diagnol_right = [posrow, right]
         diagnol_left = [posrow, left]
         const rowString = posrow.toString();
         const colStringright = right.toString();
         const colStringleft = left.toString();
         const rowcolright = `${rowString},${colStringright}`;
         const rowcolleft = `${rowString},${colStringleft}`;
         const squareright = document.getElementById(rowcolright);
         const squareleft = document.getElementById(rowcolleft);
         if (squareright && squareleft) {
            if (squareright.innerHTML && squareleft.innerHTML) {
               piece.availableMoves.push(diagnol_right)
               piece.availableMoves.push(diagnol_left)
            }
         }
         if (squareright) {
            if (squareright.innerHTML) {
               piece.availableMoves.push(diagnol_right)
            }

         }
         if (squareleft) {
            if (squareleft.innerHTML) {
               piece.availableMoves.push(diagnol_left)
            }
         }

         const colString = col.toString()
         const rowcol = `${rowString},${colString}`;
         const square = document.getElementById(rowcol);

         if (square.innerHTML) {
            move = []   
         }


         piece.availableMoves.push(move)
   }
 }
}

 function rookMoves(piece) {
   row = piece.row 
   col = piece.col 

   if (piece.class === "rook" || piece.class === "queen") {

      //top of rook
      for ( let i = row - 1; i > 0; i--) {
         let move = [i, col]
         const rowString = i.toString();
         const colString = col.toString();
         const rowcol = `${rowString},${colString}`;
         const square = document.getElementById(rowcol);
         let element = square.getElementsByTagName('img')[0]
         if (element) {
            let color = element.classList[1]
            if (color === piece.color) {
            break
            }
            else {
               piece.availableMoves.push(move)
               break
            }
         }
         piece.availableMoves.push(move)
      }

      //bottom of rook
      for ( let i = row + 1; i < 9; i++) { 
         let move = [i, col] 
         const rowString = i.toString();
         const colString = col.toString();
         const rowcol = `${rowString},${colString}`;
         const square = document.getElementById(rowcol);
         let element = square.getElementsByTagName('img')[0]
         if (element) {
            let color = element.classList[1]
            if (color === piece.color) {
            break
            }
            else {
               piece.availableMoves.push(move)
               break
            }
         }
         piece.availableMoves.push(move)

      }

      //left of rook
      for (let j = col - 1; j > 0; j --) {
         let move = [row, j] 
         const rowString = row.toString();
         const colString = j.toString();
         const rowcol = `${rowString},${colString}`;
         const square = document.getElementById(rowcol);
         let element = square.getElementsByTagName('img')[0]
         if (element) {
            let color = element.classList[1]
            if (color === piece.color) {
            break
            }
            else {
               piece.availableMoves.push(move)
               break
            }
         }
         piece.availableMoves.push(move)

      }

      //right of rook 
      for (let j = col + 1; j < 9; j ++) {
         let move = [row, j] 
         const rowString = row.toString();
         const colString = j.toString();
         const rowcol = `${rowString},${colString}`;
         const square = document.getElementById(rowcol);
         let element = square.getElementsByTagName('img')[0]
         if (element) {
            let color = element.classList[1]
            if (color === piece.color) {
            break
            }
            else {
               piece.availableMoves.push(move)
               break
            }
         }
         piece.availableMoves.push(move)

      }
   }
}

function knightMoves(piece) {
   if (piece.attribute === "b-horse" || piece.attribute === "b-horse2" || piece.attribute === "ghost-knight2" || piece.attribute === "ghost-knight") {
      row = piece.row
      col = piece.col
      move1 = [row + 2, col - 1]
      move2 = [row + 2, col + 1]
      move3 = [row + 1 ,col + 2]
      move4 = [row + 1, col -2]
      move5 = [row -1, col +2]
      move6 = [row-1, col -2]
      move7 = [row -2, col +1]
      move8 = [row-2, col -1]
      piece.availableMoves.push(move1)
      piece.availableMoves.push(move2)
      piece.availableMoves.push(move3)
      piece.availableMoves.push(move4)
      piece.availableMoves.push(move5)
      piece.availableMoves.push(move6)
      piece.availableMoves.push(move7)
      piece.availableMoves.push(move8)
   }
}

function bishopMoves(piece) {
   const row = piece.row
   const col = piece.col

   if (piece.class === 'bishop' || piece.class === "queen") {

       //up-left diagnol
      for (let i = 1; i < 9; i ++) {
         newrow = row-i
         newcol = col - i
         move = [newrow, newcol]
         if (newrow === 0 || newrow === 9 || newcol === 0 || newcol === 9  ) {
            break
         }
         const rowString = newrow.toString();
         const colString = newcol.toString();
         const rowcol = `${rowString},${colString}`;
         const square = document.getElementById(rowcol);
         if (square) {
            let element = square.getElementsByTagName('img')[0]
            if (element) {
               let color = element.classList[1]
               if (color === piece.color) {
                  break
               }
               else {
                  piece.availableMoves.push(move)
                  break
               }
         }

         }
         piece.availableMoves.push(move)
      }

      //up-right diagnol
      for (let i = 1; i < 9; i ++) {
         newrow = row - i
         newcol = col + i
         move = [newrow, newcol]
         if (newrow === 0 || newrow === 9 || newcol === 0 || newcol === 9  ) {
            break
         }
         const rowString = newrow.toString();
         const colString = newcol.toString();
         const rowcol = `${rowString},${colString}`;
         const square = document.getElementById(rowcol);
         if (square) {
            let element = square.getElementsByTagName('img')[0]
            if (element) {
               let color = element.classList[1]
               if (color === piece.color) {
                  break
               }
               else {
                  piece.availableMoves.push(move)
                  break
               }
            }
         }
         piece.availableMoves.push(move)
      }

       //bottom-left diagnol
       for (let i = 1; i < 9; i ++) {
         newrow = row + i
         newcol = col - i
         move = [newrow, newcol]
         if (newrow === 0 || newrow === 9 || newcol === 0 || newcol === 9  ) {
            break
         }
         const rowString = newrow.toString();
         const colString = newcol.toString();
         const rowcol = `${rowString},${colString}`;
         const square = document.getElementById(rowcol);
         if (square) {
            let element = square.getElementsByTagName('img')[0]
            if (element) {
               let color = element.classList[1]
               if (color === piece.color) {
                  break
               }
               else {
                  piece.availableMoves.push(move)
                  break
               }
            }
         }
         piece.availableMoves.push(move)
      }

      //bottom-right diagnol
      for (let i = 1; i < 9; i ++) {
         newrow = row + i
         newcol = col + i
         move = [newrow, newcol]
         if (newrow === 0 || newrow === 9 || newcol === 0 || newcol === 9  ) {
            break
         }
         const rowString = newrow.toString();
         const colString = newcol.toString();
         const rowcol = `${rowString},${colString}`;
         const square = document.getElementById(rowcol);
         if (square) {
            let element = square.getElementsByTagName('img')[0]
            if (element) {
               let color = element.classList[1]
               if (color === piece.color) {
                  break
               }
               else {
                  piece.availableMoves.push(move)
                  break
               }
            }
         }
         piece.availableMoves.push(move)
      }
   }

}

function kingMoves(piece) {
   if (piece.class === "king") {
      left = [piece.row, piece.col + 1]
      upleft = [piece.row -1 , piece.col + 1]
      bottomleft = [piece.row + 1, piece.col + 1]
      up = [piece.row - 1, piece.col]
      bottom = [piece.row + 1, piece.col]
      right = [piece.row , piece.col - 1]
      upright = [piece.row - 1, piece.col - 1]
      bottomright = [piece.row + 1, piece.col - 1]
      piece.availableMoves.push(left)
      piece.availableMoves.push(upleft)
      piece.availableMoves.push(bottomleft)
      piece.availableMoves.push(up)
      piece.availableMoves.push(bottom)
      piece.availableMoves.push(right)
      piece.availableMoves.push(upright)
      piece.availableMoves.push(bottomright)
   }
}

function isValid(piece) {
   const moves = piece.availableMoves
   const piecesquare = document.getElementById(piece.attribute)
   let realmoves = []
   let potentialmoves = []

    for (let i = 0; i < moves.length; i++) {
       const subArray = moves[i];
       const row = subArray[0]
       const col = subArray[1]
       if (row <= 8 && row > 0 && col >= 1 && col <= 8){
         realmoves.push(subArray)
       }
    }
    let copiedmoves = [...realmoves]
    for (let i = 0; i < copiedmoves.length; i++) {
      const subArray = copiedmoves[i]
      const rowString = subArray[0].toString()
      const colString = subArray[1].toString()
      const rowcol = `${rowString},${colString}`
      const square = document.getElementById(rowcol)
      const newelement = square.getElementsByTagName('img')[0]
      if (newelement) {
          if(newelement.classList[1] != piece.color){
            potentialmoves.push(subArray)       
         }
      }
      else {
         potentialmoves.push(subArray)
      }
    }

    //check validmoves for king 
    if (piece.class === "king") {
         for (const piecer of pieces) {
            for (i = 0; i < piecer.validMoves.length; i ++) {
               let othermove = piecer.validMoves[i]
               let otherrow = othermove[0]
               let othercol = othermove[1]
               for (j = 0; j < potentialmoves.length; j ++) {
                  let thismove = potentialmoves[j]
                  let thisrow = thismove[0]
                  let thiscol = thismove[1]
                  if (otherrow === thisrow && othercol === thiscol && piecer != piece && piecer.color != piece.color) {
                     potentialmoves.splice(j)
                     piece.check = true

                  }
               }
            }
         }
    }

   piece.validMoves = potentialmoves
}
   
function renderValid(piece) {
   const valid = piece.validMoves

   if (piece.class === "pawn" && (piece.row === 2 || piece.row === 7)) { 
      for (i = 0; i< valid.length; i ++) {
         let rowstring = valid[i][0].toString()
         let colstring = valid[i][1].toString()
         let rowcos = `${rowstring},${colstring}`
         let square = document.getElementById(rowcos)
         if (i ===1) {
            let squ = document.getElementById(rowcos)
            squ.style.backgroundColor = "yellow";
            squ.style.opacity = "0.4"
            game.render.push(squ)
         }
         else { 
         square.style.backgroundColor = "yellow";
         square.style.opacity = "0.65"
         game.render.push(square)}

      }
   }
   else if (piece.class === "queen" || piece.class === "rook") {
      for (i = 0; i< valid.length; i ++){
         let rowstring = valid[i][0].toString()
         let colstring = valid[i][1].toString()
         let rowcos = `${rowstring},${colstring}`
         let square = document.getElementById(rowcos)

         if (i% 2 === 1) {
            square.style.backgroundColor = "yellow";
            square.style.opacity = "0.65"
            game.render.push(square)
         }
         else {
            square.style.backgroundColor = "yellow";
            square.style.opacity = "0.4"
            game.render.push(square)

         }
      }

   }
   else {
      for (i = 0; i< valid.length; i ++){
         let rowstring = valid[i][0].toString()
         let colstring = valid[i][1].toString()
         let rowcos = `${rowstring},${colstring}`
         let square = document.getElementById(rowcos)
         square.style.backgroundColor = "yellow";
         square.style.opacity = "0.65"
         game.render.push(square)
   }
   }
}

function unrenderValid(piece) {
   for (i = 0; i < game.render.length; i ++) {
      game.render[i].style.backgroundColor =''
      game.render[i].style.opacity = ''
   }
   game.render =[]
}

function addchoiceclicks(piece) {
   const id = piece.attribute;
   const piecesquare = document.getElementById(id);
   const listeners = new Map(); // Use a Map to store the event listeners

   for (let i = 0; i < piece.validMoves.length; i++) {
      const subArray = piece.validMoves[i];
      const rowString = subArray[0].toString();
      const colString = subArray[1].toString();
      const rowcol = `${rowString},${colString}`;
      const square = document.getElementById(rowcol);
      const otherpiece= square.getElementsByTagName('img')[0]
      let onclickelement = null
      if (otherpiece) {
         onclickelement = otherpiece.onclick
         otherpiece.onclick = null
      }

      const clickHandler = function() {
         helpadd(square, piecesquare);
         game.count ++
         unrenderValid(piece)

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
               console.log(childnode, typeof childnode)
               if (childnode.id) {
                  if (childnode.id != piece.attribute) {
                     square.removeChild(childnode)
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
               otherpiece.onclick = function() {
                  createPiece(this.id);
                };
            }
         }

         piece.availableMoves = []
         piece.validmove = []
         rowcolPiece(piece.attribute)
         pawnMoves(piece)
         rookMoves(piece)
         bishopMoves(piece)
         knightMoves(piece)
         isValid(piece)
         console.log(piece)
         console.log(game.count)

         const listeners = piece.eventListeners;
         for (const [square, clickHandler] of listeners) {
            square.removeEventListener('click', clickHandler);
         }
         piece.eventListeners = new Map()

         // check4check(piece)
         // ifcheck()


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

function deletemoves(piece) {
   for (const piecer of pieces) {
      if (piecer.validsquares.size > 0 && piece !== piecer) {
         const listeners = piecer.eventListeners;
         for (const [square, clickHandler] of listeners) {
            square.removeEventListener('click', clickHandler);
         }
         piecer.eventListeners = new Map()
      }
   }
}

function check4check(piece) {
   for (i = 0; i < piece.validMoves.length; i ++) {
      let move = piece.validMoves[i]
      let rowString = move[0].toString()
      let colString = move[1].toString()
      const rowcol = `${rowString},${colString}`;
      const square = document.getElementById(rowcol);
      let piecer = square.getElementsByTagName('img')[0]
      if (piecer) {
         if (piecer.id === 'b-king' || piecer.id === "ghost-king") {
            game.check = true
            game.checkColor = piece.color
            game.checkingpiece = piece
            console.log(game)
         }
      } 
   }
}

function ifcheck() {
   if (game.check === true) {
      if (game.checkColor === 'black') {
         kingpiece = document.getElementById('ghost-king')
         parent = kingpiece.parentElement
         parent.style.backgroundColor = 'red'
      }
      if (game.checkColor === 'ghost') {
         kingpiece = document.getElementById('b-king')
         parent = kingpiece.parentElement
         parent.style.backgroundColor = 'red'
      }
   }
}
