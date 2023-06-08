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
    this.valid = false;
    this.udl = [];
    this.bdl = [];
    this.udr = [];
    this.bdr = [];
    this.up = [];
    this.left = [];
    this.right = [];
    this.down = [];
    this.defend = false;
    this.defendwhat = null; 
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
   active : false, 
   color : null,
   checkmoves : new Set(),
   ghostking : null,
   bking : null,
   keep: false,
 }


pieces = new Set()

 function playGame() {
 }


 function helpcreatepiece(piece) {
   attPiece(piece)
   rowcolPiece(piece)
   pawnMoves(piece)
   rookMoves(piece)
   bishopMoves(piece)
   knightMoves(piece)
   kingMoves(piece)
   isValid(piece)
   renderValid(piece)
   deletemoves(piece)
   addchoiceclicks(piece)
   defending(piece)
   console.log(piece)
   
   piece.clicked ++
 }


 function activestationary() {
   //ghost moves 
   if (game.count % 2 === 0) {

      queenpi = document.getElementById('b-queen')
      if (queenpi === null) {

      }
      else {
      queenpiece = queenpi.parentElement
      if (queenpiece) {
         if (queenpiece.id === '1,4') {
            for (const piecer of pieces) {
               if (piecer.attribute === 'b-queen') {
                  pieces.delete(piecer)
               }
            }
            queenp = new Piece('b-queen')
            const element = document.getElementById(queenp.attribute);
            const prev = element.parentElement.id;
            queenp.row = Number(prev[0])
            queenp.col = Number(prev[2])
            const classlist = element.classList;
            const color = classlist[1]
            const clast = classlist[2]
            queenp.color = color
            queenp. class = clast
            bishopMoves(queenp)
            rookMoves(queenp)
            isValid(queenp)
            pieces.add(queenp)
         }}}

      broo = document.getElementById('b-rook')
      if (broo === null) {}
      else {
         brook = broo.parentElement.id
         if (brook === '1,1') {
            for (const piecer of pieces) {
               if (piecer.attribute === 'b-rook') {
                  pieces.delete(piecer)
               }
            }
            queenp = new Piece('b-rook')
            const element = document.getElementById(queenp.attribute);
            const prev = element.parentElement.id;
            queenp.row = Number(prev[0])
            queenp.col = Number(prev[2])
            const classlist = element.classList;
            const color = classlist[1]
            const clast = classlist[2]
            queenp.color = color
            queenp. class = clast
            rookMoves(queenp)
            isValid(queenp)
            pieces.add(queenp) 
         }
      }
   
      broo2 = document.getElementById('b-rook2')
      if (broo2 === null) {}
      else {
         brook2 = broo2.parentElement.id
         if (brook2 === '1,8') {
            for (const piecer of pieces) {
               if (piecer.attribute === 'b-rook2') {
                  pieces.delete(piecer)
               }
            }
            queenp = new Piece('b-rook2')
            const element = document.getElementById(queenp.attribute);
            const prev = element.parentElement.id;
            queenp.row = Number(prev[0])
            queenp.col = Number(prev[2])
            const classlist = element.classList;
            const color = classlist[1]
            const clast = classlist[2]
            queenp.color = color
            queenp. class = clast
            bishopMoves(queenp)
            rookMoves(queenp)
            isValid(queenp)
            pieces.add(queenp) 
         }
      }
      

      bhors = document.getElementById('b-horse')
      if (bhors === null) {}
      else {
         bhorse = bhors.parentElement.id
         if (bhorse === '1,2') {
            for (const piecer of pieces) {
               if (piecer.attribute === 'b-horse') {
                  pieces.delete(piecer)
               }
            }
            queenp = new Piece('b-horse')
            const element = document.getElementById(queenp.attribute);
            const prev = element.parentElement.id;
            queenp.row = Number(prev[0])
            queenp.col = Number(prev[2])
            const classlist = element.classList;
            const color = classlist[1]
            const clast = classlist[2]
            queenp.color = color
            queenp. class = clast
            knightMoves(queenp)
            isValid(queenp)
            pieces.add(queenp) 
         }
      }
   

      bhors2 = document.getElementById('b-horse2')
      if (bhors2 === null) {}
      else {
         bhorse2 = bhors2.parentElement.id
         if (bhorse2 === '1,7') {
            for (const piecer of pieces) {
               if (piecer.attribute === 'b-horse2') {
                  pieces.delete(piecer)
               }
            }
            queenp = new Piece('b-horse2')
            const element = document.getElementById(queenp.attribute);
            const prev = element.parentElement.id;
            queenp.row = Number(prev[0])
            queenp.col = Number(prev[2])
            const classlist = element.classList;
            const color = classlist[1]
            const clast = classlist[2]
            queenp.color = color
            queenp. class = clast
            knightMoves(queenp)
            isValid(queenp)
            pieces.add(queenp) 
         }
      }

      bsho = document.getElementById('b-bishop')
      if (bsho === null) {}
      else {
         bshop = bsho.parentElement.id
         if (bshop === '1,3') {
            for (const piecer of pieces) {
               if (piecer.attribute === 'b-bishop') {
                  pieces.delete(piecer)
               }
            }
            queenp = new Piece('b-bishop')
            const element = document.getElementById(queenp.attribute);
            const prev = element.parentElement.id;
            queenp.row = Number(prev[0])
            queenp.col = Number(prev[2])
            const classlist = element.classList;
            const color = classlist[1]
            const clast = classlist[2]
            queenp.color = color
            queenp. class = clast
            bishopMoves(queenp)
            rookMoves(queenp)
            isValid(queenp)
            pieces.add(queenp) 
         }
      }
   
      bsho2 = document.getElementById('b-bishop2')
      if (bsho2 === null) {}
      else{
         bshop2 = bsho2.parentElement.id
         if (bshop2 === '1,6') {
            for (const piecer of pieces) {
               if (piecer.attribute === 'b-bishop2') {
                  pieces.delete(piecer)
               }
            }
            queenp = new Piece('b-bishop2')
            const element = document.getElementById(queenp.attribute);
            const prev = element.parentElement.id;
            queenp.row = Number(prev[0])
            queenp.col = Number(prev[2])
            const classlist = element.classList;
            const color = classlist[1]
            const clast = classlist[2]
            queenp.color = color
            queenp. class = clast
            bishopMoves(queenp)
            rookMoves(queenp)
            isValid(queenp)
            pieces.add(queenp) 
         }
      }

   } 

   else {

      queenpiecer = document.getElementById('ghost-queen')
      if (queenpiecer === null) {
         row = 0
         col = 0
         for (const piecer of pieces) {
            if (piecer.attribute === 'ghost-queen') {
               row = piecer.row
               col = piecer.col
               pieces.delete(piecer)
            }    
         }
      }
      else {
         queenpieceghost = queenpiecer.parentElement.id
         if (queenpieceghost) {
            if (queenpieceghost === '8,4') {
               for (const piecer of pieces) {
                  if (piecer.attribute === 'ghost-queen') {
                     pieces.delete(piecer)
                  }
               }
               queenp = new Piece('ghost-queen')
               const element = document.getElementById(queenp.attribute);
               const prev = element.parentElement.id;
               queenp.row = Number(prev[0])
               queenp.col = Number(prev[2])
               const classlist = element.classList;
               const color = classlist[1]
               const clast = classlist[2]
               queenp.color = color
               queenp. class = clast
               bishopMoves(queenp)
               rookMoves(queenp)
               isValid(queenp)
               pieces.add(queenp)
         }}
      }
   
   
      grookr = document.getElementById('ghost-rook')
      if (grookr === null) {
      }
      else {
         grook = grookr.parentElement.id
         if (grook) {
            if (grook === '8,1') {
               for (const piecer of pieces) {
                  if (piecer.attribute === 'ghost-rook') {
                     pieces.delete(piecer)
                  }
               }
               queenp = new Piece('ghost-rook')
               const element = document.getElementById(queenp.attribute);
               const prev = element.parentElement.id;
               queenp.row = Number(prev[0])
               queenp.col = Number(prev[2])
               const classlist = element.classList;
               const color = classlist[1]
               const clast = classlist[2]
               queenp.color = color
               queenp. class = clast
               bishopMoves(queenp)
               rookMoves(queenp)
               isValid(queenp)
               pieces.add(queenp) 
            }
         }
         }


      grook2r = document.getElementById('ghost-rook2')
      if (grook2r === null) {
      }
      else {
         grook2 = grook2r.parentElement.id
         if (grook2) {
            if (grook2 === '8,8') {
               for (const piecer of pieces) {
                  if (piecer.attribute === 'ghost-rook2') {
                     pieces.delete(piecer)
                  }
               }
               queenp = new Piece('ghost-rook2')
               const element = document.getElementById(queenp.attribute);
               const prev = element.parentElement.id;
               queenp.row = Number(prev[0])
               queenp.col = Number(prev[2])
               const classlist = element.classList;
               const color = classlist[1]
               const clast = classlist[2]
               queenp.color = color
               queenp. class = clast
               bishopMoves(queenp)
               rookMoves(queenp)
               isValid(queenp)
               pieces.add(queenp) 
            }

         }
      }

   
      ghostknightr = document.getElementById('ghost-knight')
      if (ghostknightr=== null) {

      }
      else {
         ghostknight = ghostknightr.parentElement.id
         if (ghostknight) {
            if (ghostknight === '8,2') {
               for (const piecer of pieces) {
                  if (piecer.attribute === 'ghost-knight') {
                     pieces.delete(piecer)
                  }
               }
               queenp = new Piece('ghost-knight')
               const element = document.getElementById(queenp.attribute);
               const prev = element.parentElement.id;
               queenp.row = Number(prev[0])
               queenp.col = Number(prev[2])
               const classlist = element.classList;
               const color = classlist[1]
               const clast = classlist[2]
               queenp.color = color
               queenp. class = clast
               knightMoves(queenp)
               isValid(queenp)
               pieces.add(queenp) 
            }

         }
      }

   
      ghostknight2r = document.getElementById('ghost-knight2')
      if (ghostknight2r === null) {
      }
      else {
         ghostknight2 = ghostknight2r.parentElement.id
         if (ghostknight2) {
            if (ghostknight2 === '8,7') {
               for (const piecer of pieces) {
                  if (piecer.attribute === 'ghost-knight2') {
                     pieces.delete(piecer)
                  }
               }
               queenp = new Piece('ghost-knight2')
               const element = document.getElementById(queenp.attribute);
               const prev = element.parentElement.id;
               queenp.row = Number(prev[0])
               queenp.col = Number(prev[2])
               const classlist = element.classList;
               const color = classlist[1]
               const clast = classlist[2]
               queenp.color = color
               queenp. class = clast
               knightMoves(queenp)
               isValid(queenp)
               pieces.add(queenp) 
            }

         }
      }
   
      ghostshopr = document.getElementById('ghost-bishop')
      if (ghostshopr === null) {

      }
      else {
         ghostshop = ghostshopr.parentElement.id
         if (ghostshop) {
            if (ghostshop === '8,3') {
               for (const piecer of pieces) {
                  if (piecer.attribute === 'ghost-bishop') {
                     pieces.delete(piecer)
                  }
               }
               queenp = new Piece('ghost-bishop')
               const element = document.getElementById(queenp.attribute);
               const prev = element.parentElement.id;
               queenp.row = Number(prev[0])
               queenp.col = Number(prev[2])
               const classlist = element.classList;
               const color = classlist[1]
               const clast = classlist[2]
               queenp.color = color
               queenp. class = clast
               bishopMoves(queenp)
               rookMoves(queenp)
               isValid(queenp)
               pieces.add(queenp) 
            }
         }
      }
   
      ghostshop2r = document.getElementById('ghost-bishop2')
      if (ghostshop2r === null ) {}
      else {
         ghostshop2 = ghostshop2r.parentElement.id
         if (ghostshop2 ) {
            if (ghostshop2 === '8,6') {
               for (const piecer of pieces) {
                  if (piecer.attribute === 'ghost-bishop2') {
                     pieces.delete(piecer)
                  }
               }
               queenp = new Piece('ghost-bishop2')
               const element = document.getElementById(queenp.attribute);
               const prev = element.parentElement.id;
               queenp.row = Number(prev[0])
               queenp.col = Number(prev[2])
               const classlist = element.classList;
               const color = classlist[1]
               const clast = classlist[2]
               queenp.color = color
               queenp. class = clast
               bishopMoves(queenp)
               rookMoves(queenp)
               isValid(queenp)
               pieces.add(queenp) 
            }

         }
      }
   }
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
   attPiece(piece)
   if (game.count % 2 === 0) {
      game.color = 'ghost'
      if (piece.color === 'ghost') {
         helpcreatepiece(piece)

         //if king in check, cant block moves just yet 
          checkingpiece = game.checkingpiece 
          if (checkingpiece) {
             checkingmoves = checkingpiece.validMoves
             onlymoves = []
             queenmover = null
             if (checkingpiece.class === "queen") {
               for (i = 0; i < checkingmoves.length; i ++) {
                  queenmove = checkingmoves[i]
                  const rowString = queenmove[0].toString();
                  const colString = queenmove[1].toString();
                  const rowcol = `${rowString},${colString}`;
                  const square = document.getElementById(rowcol);
                  let piecer = square.getElementsByTagName('img')[0]
                  if (piecer) { 
                     if (piecer.id === "ghost-king") {
                        queenmover = queenmove
                     }
                  }
               if (checkingpiece.bdr.includes(queenmover)) {
                  checkingmoves = checkingpiece.bdr
               }
               if (checkingpiece.udr.includes(queenmover)) {
                  checkingmoves = checkingpiece.udr
               }
               if (checkingpiece.bdl.includes(queenmover)) {
                  checkingmoves = checkingpiece.bdl
               }
               if (checkingpiece.udl.includes(queenmover)) {
                  checkingmoves = checkingpiece.udl
               }
               if (checkingpiece.down.includes(queenmover)) {
                  checkingmoves = checkingpiece.down
               }
               if (checkingpiece.up.includes(queenmover)) {
                  checkingmoves = checkingpiece.up
               }
               if (checkingpiece.right.includes(queenmover)) {
                  checkingmoves = checkingpiece.right
               }
               if (checkingpiece.left.includes(queenmover)) {
                  checkingmoves = checkingpiece.left
               }
               }
             }
             if (checkingpiece.class === 'bishop') {
               for (i = 0; i < checkingmoves.length; i ++) {
                  queenmove = checkingmoves[i]
                  const rowString = queenmove[0].toString();
                  const colString = queenmove[1].toString();
                  const rowcol = `${rowString},${colString}`;
                  const square = document.getElementById(rowcol);
                  let piecer = square.getElementsByTagName('img')[0]
                  if (piecer) { 
                     if (piecer.id === "ghost-king") {
                        queenmover = queenmove
                     }
                  }
               if (checkingpiece.bdr.includes(queenmover)) {
                  checkingmoves = checkingpiece.bdr
               }
               if (checkingpiece.udr.includes(queenmover)) {
                  checkingmoves = checkingpiece.udr
               }
               if (checkingpiece.bdl.includes(queenmover)) {
                  checkingmoves = checkingpiece.bdl
               }
               if (checkingpiece.udl.includes(queenmover)) {
                  checkingmoves = checkingpiece.udl
               }}
             }

             for (i = 0; i < piece.validMoves.length; i++) {
                ourmove = piece.validMoves[i]
                for (j = 0; j < checkingmoves.length; j++) {
                   theremove = checkingmoves[j]
                   ourow = ourmove[0]
                   ourcol = ourmove[1]
                   thererow = theremove[0]
                   therecol = theremove[1]
                   if (ourow === thererow && ourcol === therecol) {
                      onlymoves.push(ourmove)
                      piece.valid = true
                      unrenderValid(piece)
                   }
                }
             }

            for (i = 0; i < piece.validMoves.length; i++) {
               ourmove = piece.validMoves[i]
               row = ourmove[0].toString()
               col = ourmove[1].toString()
               const rowcol = `${row},${col}`;
               const square = document.getElementById(rowcol);
               if (square) {
                  let piecer = square.getElementsByTagName('img')[0]
                  if (piecer) {
                     if (piecer.id === checkingpiece.attribute) {
                        piece.valid = true
                        onlymoves.push(ourmove)
                     }
                  }
               }
            }

            piece.validMoves = onlymoves
            renderValid(piece)


          }
          if (game.check === true && piece.attribute != "ghost-king" && piece.valid != true) {
             const listeners = piece.eventListeners;
             for (const [square, clickHandler] of listeners) {
                square.removeEventListener('click', clickHandler);
                }
             piece.eventListeners = new Map()
             unrenderValid(piece)
          }
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
         game.color = 'black'
         helpcreatepiece(piece)
         checkingpiece = game.checkingpiece 
           if (checkingpiece) {
            console.log(piece)
              checkingmoves = checkingpiece.validMoves
              onlymoves = []
              queenmover = null
              if (checkingpiece.class === "queen") {
                for (i = 0; i < checkingmoves.length; i ++) {
                   queenmove = checkingmoves[i]
                   const rowString = queenmove[0].toString();
                   const colString = queenmove[1].toString();
                   const rowcol = `${rowString},${colString}`;
                   const square = document.getElementById(rowcol);
                   let piecer = square.getElementsByTagName('img')[0]
                   if (piecer) { 
                      if (piecer.id === "b-king") {
                         queenmover = queenmove
                      }
                   }
                if (checkingpiece.bdr.includes(queenmover)) {
                   checkingmoves = checkingpiece.bdr
                }
                if (checkingpiece.udr.includes(queenmover)) {
                   checkingmoves = checkingpiece.udr
                }
                if (checkingpiece.bdl.includes(queenmover)) {
                   checkingmoves = checkingpiece.bdl
                }
                if (checkingpiece.udl.includes(queenmover)) {
                   checkingmoves = checkingpiece.udl
                }
                if (checkingpiece.down.includes(queenmover)) {
                   checkingmoves = checkingpiece.down
                }
                if (checkingpiece.up.includes(queenmover)) {
                   checkingmoves = checkingpiece.up
                }
                if (checkingpiece.right.includes(queenmover)) {
                   checkingmoves = checkingpiece.right
                }
                if (checkingpiece.left.includes(queenmover)) {
                   checkingmoves = checkingpiece.left
                }
                }
              }
              if (checkingpiece.class === 'bishop') {
                for (i = 0; i < checkingmoves.length; i ++) {
                   queenmove = checkingmoves[i]
                   const rowString = queenmove[0].toString();
                   const colString = queenmove[1].toString();
                   const rowcol = `${rowString},${colString}`;
                   const square = document.getElementById(rowcol);
                   let piecer = square.getElementsByTagName('img')[0]
                   if (piecer) { 
                      if (piecer.id === "b-king") {
                         queenmover = queenmove
                      }
                   }
                if (checkingpiece.bdr.includes(queenmover)) {
                   checkingmoves = checkingpiece.bdr
                }
                if (checkingpiece.udr.includes(queenmover)) {
                   checkingmoves = checkingpiece.udr
                }
                if (checkingpiece.bdl.includes(queenmover)) {
                   checkingmoves = checkingpiece.bdl
                }
                if (checkingpiece.udl.includes(queenmover)) {
                   checkingmoves = checkingpiece.udl
                }}
              }

              for (i = 0; i < piece.validMoves.length; i++) {
               ourmove = piece.validMoves[i]
               for (j = 0; j < checkingmoves.length; j++) {
                  theremove = checkingmoves[j]
                  ourow = ourmove[0]
                  ourcol = ourmove[1]
                  thererow = theremove[0]
                  therecol = theremove[1]
                  if (ourow === thererow && ourcol === therecol) {
                     onlymoves.push(ourmove)
                     piece.valid = true
                     unrenderValid(piece)
                  }
               }
            }

           for (i = 0; i < piece.validMoves.length; i++) {
              ourmove = piece.validMoves[i]
              row = ourmove[0].toString()
              col = ourmove[1].toString()
              const rowcol = `${row},${col}`;
              const square = document.getElementById(rowcol);
              if (square) {
                 let piecer = square.getElementsByTagName('img')[0]
                 if (piecer) {
                    if (piecer.id === checkingpiece.attribute) {
                       piece.valid = true
                       onlymoves.push(ourmove)
                    }
                 }
              }
           }

           piece.validMoves = onlymoves
           renderValid(piece)
           }
          if (game.check === true && piece.attribute != "b-king" && piece.valid != true) {
             const listeners = piece.eventListeners;
             for (const [square, clickHandler] of listeners) {
                square.removeEventListener('click', clickHandler);
                }
             piece.eventListeners = new Map()
             unrenderValid(piece)
          }
         
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
}

 function attPiece(piece) {
   id = piece.attribute
   const element = document.getElementById(id);
   const classlist = element.classList;
   const color = classlist[1]
   const clast = classlist[2]
   piece.color = color
   piece.class = clast 
 }

 function rowcolPiece(piece) {
   const active = document.getElementById(piece.attribute);
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
               piece.up.push(move)
               piece.availableMoves.push(move)
               break
            }
         }
         piece.up.push(move)
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
               piece.down.push(move)
               piece.availableMoves.push(move)
               break
            }
         }
         piece.down.push(move)
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
               piece.left.push(move)
               piece.availableMoves.push(move)
               break
            }
         }
         piece.left.push(move)
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
               piece.right.push(move)
               piece.availableMoves.push(move)
               break
            }
         }
         piece.right.push(move)
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
                  piece.udl.push(move)
                  piece.availableMoves.push(move)
                  break
               }
         }

         }
         piece.udl.push(move)
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
                  piece.udr.push(move)
                  piece.availableMoves.push(move)
                  break
               }
            }
         }
         piece.udr.push(move)
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
                  piece.bdl.push(move)
                  piece.availableMoves.push(move)
                  break
               }
            }
         }
         piece.bdl.push(move)
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
                  piece.bdr.push(move)
                  piece.availableMoves.push(move)
                  break
               }
            }
         }
         piece.bdr.push(move)
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
    kingsvalid = []
    if (piece.class === "king") {
         for (const piecer of pieces) {
            if (piecer.class != 'pawn') {
               for (i = 0; i < piecer.validMoves.length; i ++) {
                  let othermove = piecer.validMoves[i]
                  let otherrow = othermove[0]
                  let othercol = othermove[1]
                  for (j = 0; j < potentialmoves.length; j ++) {
                     let thismove = potentialmoves[j]
                     let thisrow = thismove[0]
                     let thiscol = thismove[1]
                     if (otherrow === thisrow && othercol === thiscol && piecer != piece && piecer.color != piece.color) {
                        const rowString = thismove[0].toString();
                        const colString = thismove[1].toString();
                        const rowcol = `${rowString},${colString}`;
                        const square = document.getElementById(rowcol);
                        const otherpiece= square.getElementsByTagName('img')[0]
                        if (otherpiece) {
                           kingsvalid.push(thismove)
                        }
                        potentialmoves.splice(j,1)
   
                     }
                  }
               }
            }
            else {
               row = piecer.row + 1
               coleft = piecer.col -1 
               colright = piecer.col + 1
               leftmove = [row, coleft]
               const rowStringleft = leftmove[0].toString();
               const colStringleft = leftmove[1].toString();
               const rowcolleft = `${rowStringleft},${colStringleft}`;
               const square = document.getElementById(rowcolleft);
               for (j = 0; j < potentialmoves.length; j ++) {
                  let thismove = potentialmoves[j]
                  let thisrow = thismove[0]
                  let thiscol = thismove[1]
                  if (row === thisrow && colright === thiscol && piecer != piece && piecer.color != piece.color) {
                     if (square) {
                        potentialmoves.splice(j, 1)
                     }
                     }
                  if (row === thisrow && coleft === thiscol && piecer != piece && piecer.color != piece.color) {
                     if (square) {
                         potentialmoves.splice(j, 1)
                     }
                        }
            }
         }
      }

      for (i = 0; i < kingsvalid.length; i ++) {
         potentialmoves.push(kingsvalid[i])
      }
    }

   const uniqueArray = potentialmoves.reduce((accumulator, currentValue) => {
      if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);


   piece.validMoves = uniqueArray

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

function unrenderValid() {
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
      if (otherpiece) {
         onclickelement = otherpiece.onclick
         otherpiece.onclick = null
      }

      const clickHandler = function() {

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
                        }
                     }
                     src = childnode.getAttribute('src')
                     childnode.remove()
                     square.removeEventListener('click', clickHandler);



                     const newElem = Object.assign(
                        document.createElement(`div`), 
                        { className: 'contained',
                          innerHTML: `<img src = '${src}'>`});
                     console.log(newElem)

                     if (game.color === 'ghost') {
                        header = document.getElementsByClassName('collected-piecesblack')[0]
                        header.appendChild(newElem)
                        console.log(header)
                     }

                     if (game.color === 'black') {
                        header = document.getElementsByClassName('collected-pieceswhite')[0]
                        header.appendChild(newElem)

                     }
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
         piece.down = []
         piece.left = []
         piece.right = []
         piece.up = []
         piece.udl = [];
         piece.bdl = [];
         piece.udr = [];
         piece.bdr = [];
         for (const piecest of pieces) {
            piecest.defend = false
         }

         rowcolPiece(piece)
         pawnMoves(piece)
         rookMoves(piece)
         bishopMoves(piece)
         knightMoves(piece)
         isValid(piece)


         const listeners = piece.eventListeners;
         for (const [square, clickHandler] of listeners) {
            square.removeEventListener('click', clickHandler);
         }
         piece.eventListeners = new Map()

         check4check(piece)
         ifcheck()
         movecheck()
         whowins()
         winner()


      };
      
      // Store the event listener function reference in the Map
      square.addEventListener('click', clickHandler);
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
         }
      } 
   }

}

function ifcheck() {
   if (game.check === true && game.keep === false) {
      if (game.checkColor === 'black') {
         kingpiece = document.getElementById('ghost-king')
         parent = kingpiece.parentElement
         parent.style.backgroundColor = 'red'
         game.ghostking = kingpiece.parentElement
         game.keep = true
      }
      if (game.checkColor === 'ghost') {
         kingpiece = document.getElementById('b-king')
         parent = kingpiece.parentElement
         parent.style.backgroundColor = 'red'
         game.bking = kingpiece.parentElement
         game.keep = true
      }
   }
}

function movecheck() {
   if (game.checkingpiece) {
      if (game.checkingpiece.color != game.color) {
      game.checkingpiece = null
      game.check = false
      game.checkColor = null
      ghostsquare = game.ghostking
      blacksquare = game.bking

      if (ghostsquare) { 
         if ( ghostsquare.style.backgroundColor === 'red') {
            ghostsquare.style.backgroundColor = ''
            game.keep = false
         }}

      if (blacksquare) {
         if (blacksquare.style.backgroundColor === 'red') {
            blacksquare.style.backgroundColor = ''
            game.keep = false
         }}

      for (const piecer of pieces) {
         piecer.valid = false
      }
   }
}
}

function whowins() {
   if (game.checkingpiece) {

      if (game.checkingpiece.color === 'black') {
      let checkingpiece = game.checkingpiece
      let whitemoves = []
      let new_set = new Set()
      let piecesquares = document.getElementsByClassName('piece')
      let checkingmoves = game.checkingpiece.validMoves
      let newvalid = []


      if (game.checkingpiece.class === 'queen') {
         let queenmover = null
         for ( i = 0; i < game.checkingpiece.validMoves.length; i ++) {
            targeted = game.checkingpiece.validMoves[i]
            row = targeted[0].toString()
            col = targeted[1].toString()
            const rowcol = `${row},${col}`;
            const square = document.getElementById(rowcol);
            if (square.getElementsByTagName('img')[0]) {
              if( square.getElementsByTagName('img')[0].id === 'ghost-king') {
                  queenmover = targeted
               }    
            }
         }

         if (checkingpiece.bdr.includes(queenmover)) {
            checkingmoves = checkingpiece.bdr
         }
         if (checkingpiece.udr.includes(queenmover)) {
            checkingmoves = checkingpiece.udr
         }
         if (checkingpiece.bdl.includes(queenmover)) {
            checkingmoves = checkingpiece.bdl
         }
         if (checkingpiece.udl.includes(queenmover)) {
            checkingmoves = checkingpiece.udl
         }
         if (checkingpiece.down.includes(queenmover)) {
            checkingmoves = checkingpiece.down
         }
         if (checkingpiece.up.includes(queenmover)) {
            checkingmoves = checkingpiece.up
         }
         if (checkingpiece.right.includes(queenmover)) {
            checkingmoves = checkingpiece.right
         }
         if (checkingpiece.left.includes(queenmover)) {
            checkingmoves = checkingpiece.left
         }


      }

      if (game.checkingpiece.class === 'bishop') {
         let queenmover = null
         for ( i = 0; i < game.checkingpiece.validMoves.length; i ++) {
            targeted = game.checkingpiece.validMoves[i]
            row = targeted[0].toString()
            col = targeted[1].toString()
            const rowcol = `${row},${col}`;
            const square = document.getElementById(rowcol);
            if (square.getElementsByTagName('img')[0]) {
              if( square.getElementsByTagName('img')[0].id === 'ghost-king') {
                  queenmover = targeted
               }    
            }
         }

         if (checkingpiece.bdr.includes(queenmover)) {
            checkingmoves = checkingpiece.bdr
         }
         if (checkingpiece.udr.includes(queenmover)) {
            checkingmoves = checkingpiece.udr
         }
         if (checkingpiece.bdl.includes(queenmover)) {
            checkingmoves = checkingpiece.bdl
         }
         if (checkingpiece.udl.includes(queenmover)) {
            checkingmoves = checkingpiece.udl
         }

      }

      if (game.checkingpiece.class === 'rook') {
         let queenmover = null
         for ( i = 0; i < game.checkingpiece.validMoves.length; i ++) {
            targeted = game.checkingpiece.validMoves[i]
            row = targeted[0].toString()
            col = targeted[1].toString()
            const rowcol = `${row},${col}`;
            const square = document.getElementById(rowcol);
            if (square.getElementsByTagName('img')[0]) {
              if( square.getElementsByTagName('img')[0].id === 'ghost-king') {
                  queenmover = targeted
               }    
            }
         }

         if (checkingpiece.down.includes(queenmover)) {
            checkingmoves = checkingpiece.down
         }
         if (checkingpiece.up.includes(queenmover)) {
            checkingmoves = checkingpiece.up
         }
         if (checkingpiece.right.includes(queenmover)) {
            checkingmoves = checkingpiece.right
         }
         if (checkingpiece.left.includes(queenmover)) {
            checkingmoves = checkingpiece.left
         }



      }

      newvalid = []
      for (i = 0; i <piecesquares.length; i++) {
         piececolor = piecesquares[i].classList[1]
         id = piecesquares[i].id
         if (piececolor != game.checkingpiece.color && piecesquares[i].id != 'ghost-king') {
            piece = new Piece(id)
            attPiece(piece)
            rowcolPiece(piece)
            pawnMoves(piece)
            rookMoves(piece)
            bishopMoves(piece)
            knightMoves(piece)
            isValid(piece)

            for (j = 0; j < piece.validMoves.length; j ++) {
               ourmove = piece.validMoves[j]

               orow = Number(ourmove[0])
               ocol = Number(ourmove[1])
               or = [orow, ocol]
               for ( k = 0; k < checkingmoves.length; k ++) {
                  tmove = checkingmoves[k]
                  trow = Number(tmove[0])
                  tcol = Number(tmove[1])
                  if (ocol === tcol && orow === trow) {
                     if (newvalid.includes(or)) {
                     }
                     else{ newvalid.push(or)}
                     
                  }
               }
            }
            new_set.add(piece)
         }
      }


      const uniqueAr = newvalid.reduce((accumulator, currentValue) => {
      const currentValueString = JSON.stringify(currentValue);
      if (!accumulator.some(item => JSON.stringify(item) === currentValueString)) {
            accumulator.push(currentValue);
       }
      return accumulator;
      }, []);

      for (i = 0; i < uniqueAr.length; i ++) {
         whitemoves.push(uniqueAr[i])
      }

      
      kingpiece = document.getElementById('ghost-king')
      king = new Piece('ghost-king')
      attPiece(king)
      rowcolPiece(king)
      kingMoves(king)

      kingat = [king.row, king.col]

      new_moves  = [] 
      for (const piecer of pieces) {
         for ( i = 0; i < piecer.validMoves.length; i ++) {
            theremove = piecer.validMoves[i]
            for (j = 0 ; j < king.availableMoves.length; j ++) {
               ourmove = king.availableMoves[j]
               orow = ourmove[0].toString()
               ocol = ourmove[1].toString()
               const rowcol = `${orow},${ocol}`;
               const square = document.getElementById(rowcol);
               if (square) {
                  otherpiece = square.getElementsByTagName('img')[0]
                  if (otherpiece) {
                     if (otherpiece.classList[1] === 'black') {
                        new_moves.push(ourmove)
                     }
                  }
                  else {
                     new_moves.push(ourmove)
                  }
               }
            }
         }
      }

      const uniqueArray = new_moves.reduce((accumulator, currentValue) => {
         if (!accumulator.includes(currentValue)) {
           accumulator.push(currentValue);
         }
         return accumulator;
       }, []);


       lol_moves = []
       for (i = 0; i < uniqueArray.length; i ++) {
         move = uniqueArray[i]
         orow = move[0]
         ocol = move[1]
         for (const piecer of pieces) {
            for (j = 0; j < piecer.validMoves.length; j  ++) {
               tmove = piecer.validMoves[j]
               trow = tmove[0]
               tcol = tmove[1]
               if (orow != trow && ocol != tcol) {
                  lol_moves.push(move)
               }
            }
         }
       }

       const uniqueA = lol_moves.reduce((accumulator, currentValue) => {
         if (!accumulator.includes(currentValue)) {
           accumulator.push(currentValue);
         }
         return accumulator;
       }, []);

       for (i = 0; i < checkingmoves.length; i ++) {
         move = checkingmoves[i]
         row = move[0]
         col = move[1]
         for ( j = 0; j < uniqueA.length; j ++) {
            cmove= uniqueA[j]
            crow = cmove[0]
            ccol = cmove[1]
            if (row === crow && col === ccol) {
               uniqueA.splice(j, 1)
            }
         }
       }

      king.validMoves = uniqueA

      for (j = 0; j < king.validMoves.length; j ++) {
         whitemoves.push(king.validMoves[j])
      }

      new_set.add(king)

      const uni = whitemoves.reduce((accumulator, currentValue) => {
      const currentValueString = JSON.stringify(currentValue);
      if (!accumulator.some(item => JSON.stringify(item) === currentValueString)) {
               accumulator.push(currentValue);
          }
      return accumulator;
      }, []);

      console.log(whitemoves)
      if (whitemoves.length === 0) {
         game.winner = 'black'
      }

   }


   if (game.checkingpiece.color === 'white') {
      let checkingpiece = game.checkingpiece
      let whitemoves = []
      let new_set = new Set()
      let piecesquares = document.getElementsByClassName('piece')
      let checkingmoves = game.checkingpiece.validMoves
      let newvalid = []


      if (game.checkingpiece.class === 'queen') {
         let queenmover = null
         for ( i = 0; i < game.checkingpiece.validMoves.length; i ++) {
            targeted = game.checkingpiece.validMoves[i]
            row = targeted[0].toString()
            col = targeted[1].toString()
            const rowcol = `${row},${col}`;
            const square = document.getElementById(rowcol);
            if (square.getElementsByTagName('img')[0]) {
              if( square.getElementsByTagName('img')[0].id === 'b-king') {
                  queenmover = targeted
               }    
            }
         }

         if (checkingpiece.bdr.includes(queenmover)) {
            checkingmoves = checkingpiece.bdr
         }
         if (checkingpiece.udr.includes(queenmover)) {
            checkingmoves = checkingpiece.udr
         }
         if (checkingpiece.bdl.includes(queenmover)) {
            checkingmoves = checkingpiece.bdl
         }
         if (checkingpiece.udl.includes(queenmover)) {
            checkingmoves = checkingpiece.udl
         }
         if (checkingpiece.down.includes(queenmover)) {
            checkingmoves = checkingpiece.down
         }
         if (checkingpiece.up.includes(queenmover)) {
            checkingmoves = checkingpiece.up
         }
         if (checkingpiece.right.includes(queenmover)) {
            checkingmoves = checkingpiece.right
         }
         if (checkingpiece.left.includes(queenmover)) {
            checkingmoves = checkingpiece.left
         }


      }

      if (game.checkingpiece.class === 'bishop') {
         let queenmover = null
         for ( i = 0; i < game.checkingpiece.validMoves.length; i ++) {
            targeted = game.checkingpiece.validMoves[i]
            row = targeted[0].toString()
            col = targeted[1].toString()
            const rowcol = `${row},${col}`;
            const square = document.getElementById(rowcol);
            if (square.getElementsByTagName('img')[0]) {
              if( square.getElementsByTagName('img')[0].id === 'b-king') {
                  queenmover = targeted
               }    
            }
         }

         if (checkingpiece.bdr.includes(queenmover)) {
            checkingmoves = checkingpiece.bdr
         }
         if (checkingpiece.udr.includes(queenmover)) {
            checkingmoves = checkingpiece.udr
         }
         if (checkingpiece.bdl.includes(queenmover)) {
            checkingmoves = checkingpiece.bdl
         }
         if (checkingpiece.udl.includes(queenmover)) {
            checkingmoves = checkingpiece.udl
         }

      }

      if (game.checkingpiece.class === 'rook') {
         let queenmover = null
         for ( i = 0; i < game.checkingpiece.validMoves.length; i ++) {
            targeted = game.checkingpiece.validMoves[i]
            row = targeted[0].toString()
            col = targeted[1].toString()
            const rowcol = `${row},${col}`;
            const square = document.getElementById(rowcol);
            if (square.getElementsByTagName('img')[0]) {
              if( square.getElementsByTagName('img')[0].id === 'b-king') {
                  queenmover = targeted
               }    
            }
         }

         if (checkingpiece.down.includes(queenmover)) {
            checkingmoves = checkingpiece.down
         }
         if (checkingpiece.up.includes(queenmover)) {
            checkingmoves = checkingpiece.up
         }
         if (checkingpiece.right.includes(queenmover)) {
            checkingmoves = checkingpiece.right
         }
         if (checkingpiece.left.includes(queenmover)) {
            checkingmoves = checkingpiece.left
         }



      }

      newvalid = []
      for (i = 0; i <piecesquares.length; i++) {
         piececolor = piecesquares[i].classList[1]
         id = piecesquares[i].id
         if (piececolor != game.checkingpiece.color && piecesquares[i].id != 'b-king') {
            piece = new Piece(id)
            attPiece(piece)
            rowcolPiece(piece)
            pawnMoves(piece)
            rookMoves(piece)
            bishopMoves(piece)
            knightMoves(piece)
            isValid(piece)

            for (j = 0; j < piece.validMoves.length; j ++) {
               ourmove = piece.validMoves[j]

               orow = Number(ourmove[0])
               ocol = Number(ourmove[1])
               or = [orow, ocol]
               for ( k = 0; k < checkingmoves.length; k ++) {
                  tmove = checkingmoves[k]
                  trow = Number(tmove[0])
                  tcol = Number(tmove[1])
                  if (ocol === tcol && orow === trow) {
                     if (newvalid.includes(or)) {
                     }
                     else{ newvalid.push(or)}
                     
                  }
               }
            }
            new_set.add(piece)
         }
      }


      const uniqueAr = newvalid.reduce((accumulator, currentValue) => {
      const currentValueString = JSON.stringify(currentValue);
      if (!accumulator.some(item => JSON.stringify(item) === currentValueString)) {
            accumulator.push(currentValue);
       }
      return accumulator;
      }, []);

      for (i = 0; i < uniqueAr.length; i ++) {
         whitemoves.push(uniqueAr[i])
      }

      
      kingpiece = document.getElementById('b-king')
      king = new Piece('b-king')
      attPiece(king)
      rowcolPiece(king)
      kingMoves(king)

      kingat = [king.row, king.col]

      new_moves  = [] 
      for (const piecer of pieces) {
         for ( i = 0; i < piecer.validMoves.length; i ++) {
            theremove = piecer.validMoves[i]
            for (j = 0 ; j < king.availableMoves.length; j ++) {
               ourmove = king.availableMoves[j]
               orow = ourmove[0].toString()
               ocol = ourmove[1].toString()
               const rowcol = `${orow},${ocol}`;
               const square = document.getElementById(rowcol);
               if (square) {
                  otherpiece = square.getElementsByTagName('img')[0]
                  if (otherpiece) {
                     if (otherpiece.classList[1] === 'ghost') {
                        new_moves.push(ourmove)
                     }
                  }
                  else {
                     new_moves.push(ourmove)
                  }
               }
            }
         }
      }

      const uniqueArray = new_moves.reduce((accumulator, currentValue) => {
         if (!accumulator.includes(currentValue)) {
           accumulator.push(currentValue);
         }
         return accumulator;
       }, []);


       lol_moves = []
       for (i = 0; i < uniqueArray.length; i ++) {
         move = uniqueArray[i]
         orow = move[0]
         ocol = move[1]
         for (const piecer of pieces) {
            for (j = 0; j < piecer.validMoves.length; j  ++) {
               tmove = piecer.validMoves[j]
               trow = tmove[0]
               tcol = tmove[1]
               if (orow != trow && ocol != tcol) {
                  lol_moves.push(move)
               }
            }
         }
       }

       const uniqueA = lol_moves.reduce((accumulator, currentValue) => {
         if (!accumulator.includes(currentValue)) {
           accumulator.push(currentValue);
         }
         return accumulator;
       }, []);

       for (i = 0; i < checkingmoves.length; i ++) {
         move = checkingmoves[i]
         row = move[0]
         col = move[1]
         for ( j = 0; j < uniqueA.length; j ++) {
            cmove= uniqueA[j]
            crow = cmove[0]
            ccol = cmove[1]
            if (row === crow && col === ccol) {
               uniqueA.splice(j, 1)
            }
         }
       }

      king.validMoves = uniqueA

      for (j = 0; j < king.validMoves.length; j ++) {
         whitemoves.push(king.validMoves[j])
      }

      new_set.add(king)

      const uni = whitemoves.reduce((accumulator, currentValue) => {
      const currentValueString = JSON.stringify(currentValue);
      if (!accumulator.some(item => JSON.stringify(item) === currentValueString)) {
               accumulator.push(currentValue);
          }
      return accumulator;
      }, []);

      console.log(whitemoves)
      if (whitemoves.length === 0) {
         game.winner = 'ghost'
      }

   }

   }
   
   
}

function defending(piece) {

   surrounding = []
   //surrounding piece
   down = [piece.row +1 , piece.col]
   up = [piece.row +1 , piece.col]
   left = [piece.row  , piece.col - 1]
   right  = [piece.row +1 , piece.col + 1]
   downleft = [piece.row +1 , piece.col - 1]
   downright = [piece.row +1 , piece.col + 1]
   upleft = [piece.row -1 , piece.col - 1]
   upright  = [piece.row -1 , piece.col + 1]

   surrounding.push(up)
   surrounding.push(down)
   surrounding.push(left)
   surrounding.push(right)
   surrounding.push(downright)
   surrounding.push(downleft)
   surrounding.push(upright)
   surrounding.push(upleft)

   protected_moves = []
   for (i = 0; i < surrounding.length; i++) {
      move = surrounding[i]
      const rowString = move[0].toString();
      const colString = move[1].toString();
      const rowcol = `${rowString},${colString}`;
      const square = document.getElementById(rowcol);
      if (square) {
         const otherpiece= square.getElementsByTagName('img')[0]
         if (otherpiece) {
         if (otherpiece.id === 'b-king' || otherpiece.id ==='ghost-king') {
            protected_moves.push(move)
         }}
      }
   }
   protected_move = protected_moves[0]
   if (protected_move) {
   prow = protected_move[0]
   pcol = protected_move[1]}



   listings = []
   for (const piecer of pieces) {
      for( i = 0; i < piecer.validMoves.length; i ++) {
         move = piecer.validMoves[i]
         const rowString = move[0].toString();
         const colString = move[1].toString();
         const rowcol = `${rowString},${colString}`;
         const square = document.getElementById(rowcol);
         const otherpiece= square.getElementsByTagName('img')[0]
         if (otherpiece) {
            if (otherpiece.id === piece.attribute && piecer.color != piece.color) {

               if (piecer.class === 'queen') {

                  if (piecer.bdr.includes(move)) {
                     listings = piecer.bdr
                     piece.defendwhat = 'queen-bdr'
                  }
                  if (piecer.udr.includes(move)) {
                     listings = piecer.udr
                     piece.defendwhat = 'queen-udr'
                  }
                  if (piecer.bdl.includes(move)) {
                     listings = piecer.bdl
                     piece.defendwhat = 'queen-bdl'
                  }
                  if (piecer.udl.includes(move)) {
                     listings = piecer.udl
                     piece.defendwhat = 'queen-udl'
                  }
                  if (piecer.down.includes(move)) {
                     listings = piecer.down
                     piece.defendwhat = 'queen-down'
                  }

                  if (piecer.up.includes(move)) {
                     listings = piecer.up
                     piece.defendwhat = 'queen-up'
                  }
                  if (piecer.right.includes(move)) {
                     listings = piecer.right
                     piece.defendwhat = 'queen-right'
                  }
                  if (piecer.left.includes(move)) {
                     listings = piecer.left
                     piece.defendwhat = 'queen-left'
                  }
               }
               if (piecer.class === 'bishop' ) {
                  if (piecer.bdr.includes(move)) {
                     listings = piecer.bdr
                     piece.defendwhat = 'queen-bdr'
                  }
                  if (piecer.udr.includes(move)) {
                     listings = piecer.udr
                     piece.defendwhat = 'queen-udr'
                  }
                  if (piecer.bdl.includes(move)) {
                     listings = piecer.bdl
                     piece.defendwhat = 'queen-bdl'
                  }
                  if (piecer.udl.includes(move)) {
                     listings = piecer.udl
                     piece.defendwhat = 'queen-udl'
                  }

               }
               if (piecer.class === 'rook') {
                  if (piecer.down.includes(move)) {
                     listings = piecer.down
                     piece.defendwhat = 'down'
                  }

                  if (piecer.up.includes(move)) {
                     listings = piecer.up
                     piece.defendwhat = 'up'
                  }
                  if (piecer.right.includes(move)) {
                     listings = piecer.right
                     piece.defendwhat = 'right'
                  }
                  if (piecer.left.includes(move)) {
                     listings = piecer.left
                     piece.defendwhat = 'left'
                  }

               }
            }
         }
      }
   }


   if (piece.defendwhat === 'queen-udr' || piece.defendwhat === 'queen-udl' || piece.defendwhat === 'queen-bdl' || piece.defendwhat === 'queen-bdr' || piece.defendwhat === 'queen-down' || piece.defendwhat === 'queen-up' || piece.defendwhat === 'queen-left' ||piece.defendwhat === 'queen-right' ) {

      if ( piece.defendwhat === 'queen-udr') {
         cmove = [piece.row - 1, piece.col + 1]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'queen-udl') {
         cmove = [piece.row - 1, piece.col - 1]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'queen-bdl') {
         cmove = [piece.row + 1, piece.col - 1]
         console.log(cmove, protected_moves)
         if (pcol === cmove[1] && prow == cmove[0]) {
            console.log(cmove)
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'queen-bdr') {
         cmove = [piece.row + 1, piece.col + 1]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'queen-down') {
         cmove = [piece.row + 1, piece.col ]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'queen-up') {
         cmove = [piece.row - 1, piece.col ]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'queen-right') {
         cmove = [piece.row , piece.col + 1]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'queen-left') {
         cmove = [piece.row, piece.col - 1]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }

   }

   if ( piece.defendwhat === 'bishop-udr' || piece.defendwhat === 'bishop-udl' || piece.defendwhat === 'bishop-bdl' || piece.defendwhat === 'bishop-bdr') {
      if ( piece.defendwhat === 'bishop-udr') {
         cmove = [piece.row - 1, piece.col + 1]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'bishop-udl') {
         cmove = [piece.row - 1, piece.col - 1]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'bishop-bdl') {
         cmove = [piece.row + 1, piece.col - 1]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'bishop-bdr') {
         cmove = [piece.row + 1, piece.col + 1]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }
      }
   }


   if ( piece.defendwhat === 'rook-down' || piece.defendwhat === 'rook-up' || piece.defendwhat === 'rook-left' || piece.defendwhat === 'rook-right') {
      if ( piece.defendwhat === 'rook-down') {
         cmove = [piece.row + 1, piece.col ]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'rook-up') {
         cmove = [piece.row - 1, piece.col ]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'rook-right') {
         cmove = [piece.row , piece.col + 1]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }
      if ( piece.defendwhat === 'rook-left') {
         cmove = [piece.row, piece.col - 1]
         if (pcol === cmove[1] && prow == cmove[0]) {
            piece.defend = true
         }

      }

   }


   for (i = 0; i < piece.validMoves.length; i++) {
      let mover = piece.validMoves[i]
      const rowString = mover[0].toString();
      const colString = mover[1].toString();
      const rowcol = `${rowString},${colString}`;
      const square = document.getElementById(rowcol);
      const otherpiece= square.getElementsByTagName('img')[0]
      if (otherpiece) {
         if (otherpiece.id === 'b-queen' || otherpiece.id === 'ghost-queen') {
            piece.defend = false
         }
      }

   }

   if (piece.defend ) {
      unrenderValid(piece)
      const listeners = piece.eventListeners;
      for (const [square, clickHandler] of listeners) {
            square.removeEventListener('click', clickHandler);
         }
      piece.eventListeners = new Map()

   }



}

function winner() {
   if (game.winner === 'black') {
      header = document.getElementsByClassName('heads')[0]
      console.log(header)
      header.style.backgroundColor = 'rgb(134, 133, 53)'
      header.innerHTML = "<p class = 'game-header'> Winner!!! <p>"

   }

   if (game.winner === 'ghost') {
      header = document.getElementsByClassName('headss')[0]
      header.style.backgroundColor = 'rgb(134, 133, 53)'
      header.innerHTML = "<p class = 'game-header'> Winner!!! <p>"

   }
}


function promotions (piece) {
   if (piece.class === 'pawn' && piece.row === 1 || piece.row === 8) {

   }

}