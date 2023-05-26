 const piece = {
    attribute : "",
    color : "",
    availableMoves : [],
    validMoves: [],
    row: 0 ,
    col: 0 , 
    class : '',
    clicked: 0,
 }

 const game = {
   pieces : new Set(),
   count : 0,
   winner: null,
   posmovechanged : [],
   move : 0,
   actualpieces: [],
 }

let pieces = [
   b_rook = {
      attribute : "b-rook", color : "black", availableMoves : [], validMoves: [], row: 1 , 
      col: 1, class: 'rook', clicked: 0, validsquares: new Set(), render : [],},

   b_horse = {
      attribute : "b-horse", color : "black", availableMoves : [], validMoves: [], row: 1 , 
      col: 2 , class : 'knight', clicked: 0, validsquares: new Set(), render : [],},

   b_bishop = {
      attribute : "b-bishop", color : "black", availableMoves : [], validMoves: [], row: 1,  
      col: 3 , class : 'bishop', clicked: 0, validsquares: new Set(), render : [],},

   b_queen= {
      attribute : "b-queen", color : "black", availableMoves : [], validMoves: [], row: 1 , 
      col: 4 , class : 'queen', clicked: 0, validsquares: new Set(), render : [],},
   
   b_king = {
      attribute : "b-king", color : "black", availableMoves : [], validMoves: [], row: 1, 
      col: 5, class : 'king', clicked: 0, validsquares: new Set(), render : [],},

   b_bishop2 = {
      attribute : "b-bishop2", color : "black", availableMoves : [], validMoves: [], row: 1, 
      col: 6 , class : '', clicked: 0, validsquares: new Set(), render : [],},

   b_horse2 = {
      attribute : "b-horse2", color : "black", availableMoves : [], validMoves: [], row: 1 ,
      col: 7 , class : 'knight', clicked: 0, validsquares: new Set(), render : [],},

   b_rook2 = {
      attribute : "b-rook2", color : "black", availableMoves : [], validMoves: [], row: 1 , 
      col: 8 , class : 'rook', clicked: 0, validsquares: new Set(), render : [],},

   b_pawn = {
      attribute : "b-pawn", color : "black", availableMoves : [], validMoves: [], row: 2 ,
      col: 1 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},

   b_pawn2 = {
      attribute : "b-pawn2", color : "black", availableMoves : [], validMoves: [], row: 2 ,
      col: 2 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},

   b_pawn3 = {
      attribute : "b-pawn3", color : "black", availableMoves : [], validMoves: [], row: 2 ,
      col: 3 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},

   b_pawn4 = {
      attribute : "b-pawn4", color : "black", availableMoves : [], validMoves: [], row: 2 ,
      col: 4 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},
 
   b_pawn5 = {
      attribute : "b-pawn5", color : "black", availableMoves : [], validMoves: [], row: 2 ,
      col: 5 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],} ,
   
   b_pawn6 = {
      attribute : "b-pawn6", color : "black", availableMoves : [], validMoves: [], row: 2 ,
      col: 6 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},
   
   b_pawn7 = {
      attribute : "b-pawn7", color : "black", availableMoves : [], validMoves: [], row: 2 ,
      col: 7 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},
   
   b_pawn8 = {
      attribute : "b-pawn8", color : "black", availableMoves : [], validMoves: [], row: 2 ,
      col: 8 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},

   ghost_pawn = {
      attribute : "ghost-pawn", color : "white", availableMoves : [],validMoves: [], row: 7 ,
      col: 1 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},

   ghost_pawn2 = {
      attribute : "ghost-pawn2", color : "white", availableMoves : [], validMoves: [], row: 7 ,
      col: 2 , class : 'pawn', clicked: 0,validsquares: new Set(), render : [],},

   ghost_pawn3 = {
      attribute : "ghost-pawn3", color : "white", availableMoves : [], validMoves: [], row: 7 ,
      col: 3 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},

   ghost_pawn4 = {
      attribute : "ghost-pawn4", color : "white", availableMoves : [], validMoves: [], row: 7 ,
      col: 4 ,  class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},

   ghost_pawn5 = {
      attribute : "ghost-pawn5", color : "white", availableMoves : [], validMoves: [], row: 7 ,
      col: 5 ,  class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},

   ghost_pawn6 = {
      attribute : "ghost-pawn6", color : "white", availableMoves : [], validMoves: [], row: 7 ,
      col: 6 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},

   ghost_pawn7 = {
      attribute : "ghost-pawn7", color : "white", availableMoves : [], validMoves: [],row: 7 ,
      col: 7 , class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},

   ghost_pawn8 = {
      attribute : "ghost-pawn8", color : "white", availableMoves : [], validMoves: [], row: 7 ,
      col: 8, class : 'pawn', clicked: 0, validsquares: new Set(), render : [],},

   ghost_rook = {
      attribute : "ghost-rook", color : "white", availableMoves : [], validMoves: [], row: 8 ,
      col: 1 , class : 'rook', clicked: 0, validsquares: new Set(), render : [],},

   ghost_knight = {
      attribute : "ghost-knight", color : "white", availableMoves : [], validMoves: [], row: 8 ,
      col: 2, class : 'knight', clicked: 0, validsquares: new Set(), render : [],},

   ghost_bishop = {
      attribute : "ghost-bishop", color : "white", availableMoves : [], validMoves: [], row: 8 ,
      col: 3 , class : 'bishop', clicked: 0, validsquares: new Set(), render : [],},

   ghost_queen = {
      attribute : "ghost-queen", color : "white", availableMoves : [], validMoves: [], row: 8 ,
      col: 4 , class : 'queen', clicked: 0, validsquares: new Set(), render : [],},

   ghost_king = {
      attribute : "ghost-king", color : "white", availableMoves : [], validMoves: [], row: 8 ,
      col: 5 , class : 'king', clicked: 0, validsquares: new Set(), render : [],},

   ghost_bishop2 = {
      attribute : "ghost-bishop2", color : "white", availableMoves : [], validMoves: [], row: 8 ,
      col: 6 , class : 'bishop', clicked: 0, validsquares: new Set(), render : [],},

   ghost_knight2 = {
      attribute : "ghost-knight2", color : "white", availableMoves : [], validMoves: [], row: 8,
      col: 7 , class : 'knight', clicked: 0, validsquares: new Set(), render : [],},

   ghost_rook2 = {
      attribute : "ghost-rook2", color : "white", availableMoves : [], validMoves: [], row: 8 ,
      col: 8 , class : 'white', clicked: 0, validsquares: new Set(), render : [],},
]

 function playGame() {
   for (i = 0; i < pieces.length ; i ++) {
   }
 }


 function createPiece(id) {
   for (i = 0; i < pieces.length ; i ++) {
      let piece = pieces[i]
      if (piece.attribute === id){
         attPiece(id)
         rowcolPiece(id)
         pawnMoves(piece)
         rookMoves(piece)
         knightMoves(piece)
         isValid(piece)
         renderValid(piece)
         togglepiec(piece)
         deletemoves(piece)
         addchoiceclicks(piece)
         addPiece2Game(id)
         game.pieces.add(piece)
         piece.clicked ++
         console.log(piece, 'currentpiece')
         break
      }
   }
 }

 function attPiece(id) {
   piece.attribute = id
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
   if (piece.attribute === "b-pawn" || piece.attribute === "b-pawn2" ||piece.attribute === "b-pawn3" || piece.attribute === "b-pawn4" || piece.attribute === "b-pawn5" || piece.attribute === "b-pawn6" || piece.attribute === "b-pawn7" || piece.attribute === "b-pawn8"){
      row = piece.row
      col = piece.col
      if (row === 2){
         for (let i = 1; i <3; i ++ ) {
            posrow = row + i
            move = [posrow, col]
            piece.availableMoves.push(move)
         }
      }
      else {posrow = row + 1
         move = [posrow, col]
         piece.availableMoves.push(move)}
   }
   if (piece.attribute === "ghost-pawn" || piece.attribute === "ghost-pawn2" || piece.attribute === "ghost-pawn3" || piece.attribute === "ghost-pawn4" || piece.attribute === "ghost-pawn5" || piece.attribute === "ghost-pawn6" || piece.attribute === "ghost-pawn7" || piece.attribute === "ghost-pawn8") {
      row = piece.row
      col = piece.col
      if (row === 7) {
         for (let i = 1; i <3; i ++ ) {
            posrow = row - i
            move = [posrow, col]
            piece.availableMoves.push(move)
         }
      }
      else {posrow = row - 1
         move = [posrow, col]
         piece.availableMoves.push(move)
   }
 }
}

 function rookMoves(piece) {
   if (piece.class === "rook") {
      row = piece.row
      col = piece.col

      for (let i = row - 1 ; i > 0; i --){
         piece.availableMoves.push([i, col])
         const rowString = i.toString()
         const colString = col.toString()
         const rowcol = `${rowString},${colString}`
         const square = document.getElementById(rowcol)
         if (square.innerHTML) {
            break;
         }
         

      }
      for (let i= row + 1 ; i < 8 ; i++) {
         piece.availableMoves.push([i, col])
         const rowString = i.toString()
         const colString = col.toString()
         const rowcol = `${rowString},${colString}`
         const square = document.getElementById(rowcol)
         if (square.innerHTML) {
            break;
         }
      }

      for (let j = col -1  ; j >= 1; j--) {
         piece.availableMoves.push([row, j])
         const rowString = row.toString()
         const colString = j.toString()
         const rowcol = `${rowString},${colString}`
         const square = document.getElementById(rowcol)
         if (square.innerHTML) {
            break;
         }
      }
      for (let j = col + 1 ; j <= 8; j++) {
         piece.availableMoves.push([row, j])
         const rowString = row.toString()
         const colString = j.toString()
         const rowcol = `${rowString},${colString}`
         const square = document.getElementById(rowcol)
         if (square.innerHTML) {
            break;
         }
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
   let moves = []
   let filteredMoves = []

}

function queenMoves(piece) {
}

function isValid(piece) {
   const moves = piece.availableMoves
   const piecesquare = document.getElementById(piece.attribute)
   let realmoves = []
   let potentialmoves = []
   let vpotentialmoves = []

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
            piece.render.push(squ)
         }
         else { 
         square.style.backgroundColor = "yellow";
         square.style.opacity = "0.65"
         piece.render.push(square)}

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
         piece.render.push(square)
      }

   }
   }

function unrenderValid(piece) {
   for (i = 0; i < piece.render.length; i ++) {
      piece.render[i].style.backgroundColor =''
      piece.render[i].style.opacity = ''
   }
   piece.render =[]
}

function addPiece2Game(id) {
   if (!game.pieces.has(id)) {
      game.pieces.add(id)
   }
}

function reset(piece) {
   piece.attribute = ''
   piece.color = ''
   piece.validMoves = []
   piece.availableMoves = []
   piece.row = 0
   piece.col = 0
   piece.class = ''
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
      const clickHandler = function() {
         helpadd(square, piecesquare);
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
   const id = piece.attribute;
   const piecesquare = document.getElementById(id);

   for (let i = 0; i < pieces.length; i++) {
      let piecer = pieces[i];
      if (piecer.validsquares.size > 0 && piece !== piecer) {
         const listeners = piecer.eventListeners;
         for (const [square, clickHandler] of listeners) {
            console.log(square, clickHandler)
            square.removeEventListener('click', clickHandler);
         }
         piecer.eventListeners = new Map()
         piecer.validsquares = new Set();
         piecer.validMoves = [];
         console.log(piecer, 'oldpiece');
      }
   }
}

function clickedtwice(piece) {
   if (piece.clicked > 1) {
      unrenderValid()
      for (i= 0; i < pieces.length; i ++) {
         let piecer = pieces[i]
         if (piecer.validsquares) {
            piecer.validsquares = []
         }
      }
   }
}


function togglepiec(piece) {
   for (let i = 0; i < pieces.length; i ++) {
      let piecer = pieces[i]
      if (piecer.clicked > 0 && piecer != piece && piecer.render) {
         unrenderValid(piecer)
         piecer.clicked = 0
         break
      }
   }


   for (let i = 0; i < piece.render.length; i ++) {
      const rendersquare = piece.render[i]
      if(rendersquare.style.backgroundColor != "yellow") {
         renderValid(piece)
      }

   }


   if(piece.clicked > 0) {
      unrenderValid(piece)
      piece.clicked = -1
   }

}

