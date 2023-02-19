const board = document.getElementById('board')
const cells = document.getElementsByTagName('td')
const startBtn = document.getElementsByClassName('startBtn')

const queen = `<i class="fa-solid fa-chess-queen"></i>`
const king = `<i class="fa-solid fa-chess-king"></i>`
const rock = `<i class="fa-solid fa-chess-rook"></i>`
const knight = `<i class="fa-solid fa-chess-knight"></i>`
const bishop = `<i class="fa-solid fa-chess-bishop"></i>`
const pawn = `<i class="fa-solid fa-chess-pawn"></i>`

class Pawn {
    constructor(userName, id, symbol, color, set) {
        this.user = userName,
        this.id = id
        this.set = false
        this.symbol = symbol
        this.color = color
    }
}

const pawn1 = new Pawn('player1', 1, pawn, 'black', false)
const pawn2 = new Pawn('player1', 2, pawn, 'black', false)
const pawn3 = new Pawn('player1', 3, pawn, 'black', false)
const pawn4 = new Pawn('player1', 4, pawn, 'black', false)
const pawn5 = new Pawn('player1', 5, pawn, 'black', false)
const pawn6 = new Pawn('player1', 6, pawn, 'black', false)
const pawn7 = new Pawn('player1', 7, pawn, 'black', false)
const pawn8 = new Pawn('player1', 8, pawn, 'black', false)

const pawn9 = new Pawn('player2', 9, pawn, 'white', false)
const pawn10 = new Pawn('player2', 10, pawn, 'white', false)
const pawn11 = new Pawn('player2', 11, pawn, 'white', false)
const pawn12 = new Pawn('player2', 12, pawn, 'white', false)
const pawn13 = new Pawn('player2', 13, pawn, 'white', false)
const pawn14 = new Pawn('player2', 14, pawn, 'white', false)
const pawn15 = new Pawn('player2', 15, pawn, 'white', false)
const pawn16 = new Pawn('player2', 16, pawn, 'white', false)

const rock1 = new Pawn('player1', 17, rock, 'black', false)
const rock2 = new Pawn('player1', 18, rock, 'black', false)
const rock3 = new Pawn('player2', 19, rock, 'white', false)
const rock4 = new Pawn('player2', 20, rock, 'white', false)

const knight1 = new Pawn('player1', 21, knight, 'black', false)
const knight2 = new Pawn('player1', 22, knight, 'black', false)
const knight3 = new Pawn('player2', 23, knight, 'white', false)
const knight4 = new Pawn('player2', 24, knight, 'white', false)

const bishop1 = new Pawn('player1', 25, bishop, 'black', false)
const bishop2 = new Pawn('player1', 26, bishop, 'black', false)
const bishop3 = new Pawn('player2', 27, bishop, 'white', false)
const bishop4 = new Pawn('player2', 28, bishop, 'white', false)

const king1 = new Pawn('player1', 29, king, 'black', false)
const king2 = new Pawn('player2', 30, king, 'white', false)

const queen1 = new Pawn('player1', 31, queen, 'black', false)
const queen2 = new Pawn('player2', 32, queen, 'white', false)


    const fields = [
        [rock1, knight1, bishop1, king1, queen1, bishop2, knight2, rock2],
        [pawn1, pawn2, pawn3, pawn4, pawn5, pawn6, pawn7, pawn8],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [pawn9, pawn10, pawn11, pawn12, pawn13, pawn14, pawn15, pawn16],
        [rock3, knight3, bishop3, king2, queen2, bishop4, knight4, rock4],
    ]

var takeThis = ''
let possible 
var thisY
var thisX
var user

var player = 'player2'
var firstPlayer = 'player1'
var secondPlayer = 'player2'

function nextPlayer() {
    if (takeThis.user !== player) {
        takeThis = ''
        clearPossible()
    }
}

function moveCheck(move, x) {

    for (let i = 0; i < x; i++) {
        console.log(move[i])

        if( fields[move[i].a] === undefined  || fields[move[i].a][move[i].b] === undefined || fields[move[i].b] === undefined) {
            // return 
        } else {
            
            if(user === fields[move[i].a][move[i].b].user ) {
                // break
            }
            
            if (user === firstPlayer) {
                if( user === firstPlayer && fields[move[i].a][move[i].b].user === secondPlayer) {
                    fields[move[i].a][move[i].b].set = true
                    break
                } else if (fields[move[i].a][move[i].b] === 0 ) {
                    fields[ move[i].a ][ move[i].b ] = possible
                }    
            }        
        }
    }       
}


function clearPossible() {
    for (let j = 0; j < fields.length; j++) {
        for (let i = 0; i < fields[j].length; i++) {
            if ( fields[j][i] === possible ) {
                fields[j][i] = 0
            }
            if ( fields[j][i].set === true ) {
                fields[j][i].set = false
            }
        }        
    }
}

var castlingArray = [
    castling1 = true,
    castling2 = true,
    castling3 = true,
    castling4 = true,
]

function castlingPossible() {

    if( fields[7][4] !== queen2 ) {
        castlingArray[0] = false
        castlingArray[1] = false
    }
    if( fields[0][4] !== queen1 ) {
        castlingArray[2] = false
        castlingArray[3] = false
    }
    
    if ( castlingArray[0] === true && fields[7][5] === 0 && fields[7][6] === 0) {
        fields[7][6] = possible
    }
    if ( castlingArray[1] === true && fields[7][2] === 0 && fields[7][3] === 0) {
        fields[7][2] = possible
    }
    if ( castlingArray[2] === true && fields[0][5] === 0 && fields[0][6] === 0) {
        fields[0][6] = possible
    }
    if ( castlingArray[3] === true && fields[0][2] === 0 && fields[0][3] === 0) {
        fields[0][2] = possible
    }
}

function castlingSet() {
    
    if ( castlingArray[0] === true && fields[7][6] === possible && takeThis.symbol === queen && takeThis.user === 'player2') {
        fields[7][5] = rock4
        fields[7][6] = takeThis
        fields[7][7] = 0
        castlingArray[0] = false
        castlingArray[1] = false
    }
    if ( castlingArray[1] === true && fields[7][2] === possible && takeThis.symbol === queen  && takeThis.user === 'player2') {
        fields[7][3] = rock3
        fields[7][2] = takeThis
        fields[7][0] = 0
        castlingArray[0] = false
        castlingArray[1] = false
    }
    if ( castlingArray[2] === true && fields[0][6] === possible && takeThis.symbol === queen && takeThis.user === 'player1' ) {
        fields[0][5] = rock2
        fields[0][6] = takeThis
        fields[0][7] = 0
        castlingArray[2] = false
        castlingArray[3] = false
    }
    if ( castlingArray[3] === true && fields[0][2] === possible && takeThis.symbol === queen && takeThis.user === 'player1' ) {
        fields[0][3] = rock1
        fields[0][2] = takeThis
        fields[0][0] = 0
        castlingArray[2] = false
        castlingArray[3] = false
    }
    
}


function movePawn(user, thisY, thisX) {
 
    if ( user === 'player1' ) {
        
        if (fields [thisY + 1 ][thisX] === 0) {
            fields[ thisY +1 ][ thisX ] = possible
            if ( thisY === 1 ) { 
                fields[ thisY + 2 ][ thisX ] = possible 
            }
        }
        if (fields[ thisY + 1][ thisX + 1] === undefined ) {
            console.log('ok')
        } else if ( fields[ thisY + 1][ thisX + 1].user === 'player2') {
                fields[ thisY + 1][ thisX + 1].set = true
        }
        

        if (fields[ thisY + 1][ thisX - 1] === undefined ) {
            console.log('ok')
        } else if ( fields[ thisY + 1][ thisX - 1].user === 'player2') {
            fields[ thisY + 1][ thisX - 1].set = true
        }
    }

    if ( user === 'player2' ) {

        if (fields [thisY - 1 ][thisX] === 0) {
            fields[ thisY -1 ][ thisX ] = possible
            if ( thisY === 6 ) { 
                fields[ thisY - 2 ][ thisX ] = possible 
            }
        }

        if (fields[ thisY - 1][ thisX + 1] === undefined ) {
            console.log('ok')
        } else if ( fields[ thisY - 1][ thisX + 1].user === 'player1') {
                fields[ thisY - 1][ thisX + 1].set = true
        }


        if (fields[ thisY - 1][ thisX - 1] === undefined ) {
            console.log('ok')
        } else if ( fields[ thisY - 1][ thisX - 1].user === 'player1') {
                fields[ thisY - 1][ thisX - 1].set = true
        }}
}
    

function moveRock(user, thisY, thisX) {
    
    const rockMovesUp = []
    const rockMovesDown = []
    const rockMovesLeft = []
    const rockMovesRight = []
    
    for (let i = 1; i < 8; i++) {
    
        const newRockMoveUp = { a: ( thisY - i ), b:( thisX )}        
        const newRockMoveDown = { a: ( thisY + i ), b:( thisX )}        
        const newRockMoveLeft = { a: ( thisY ), b:( thisX - i )}        
        const newRockMoveRight = { a: ( thisY ), b:( thisX + i )}        
    
        rockMovesUp.push(newRockMoveUp)
        rockMovesDown.push(newRockMoveDown)
        rockMovesLeft.push(newRockMoveLeft)
        rockMovesRight.push(newRockMoveRight)
    }

    moveCheck(rockMovesUp, 7)
    moveCheck(rockMovesDown, 7)
    moveCheck(rockMovesLeft, 7)
    moveCheck(rockMovesRight, 7)
   
}

function moveKnight(user, thisY, thisX) {

    const knightMoves = [
        { a: (thisY - 2), b: (thisX + 1) },
        { a: (thisY - 2), b: (thisX - 1) },
        { a: (thisY + 2), b: (thisX + 1) },
        { a: (thisY + 2), b: (thisX - 1) },
        { a: (thisY - 1), b: (thisX + 2) },
        { a: (thisY - 1), b: (thisX - 2) },
        { a: (thisY + 1), b: (thisX + 2) },
        { a: (thisY + 1), b: (thisX - 2) },
    ]

    moveCheck(knightMoves, 8)

}

function moveQueen(user, thisY, thisX) {
    const queenMoves = [
        { a: thisY + 1, b: thisX },
        { a: thisY - 1, b: thisX },
        { a: thisY,     b: thisX + 1 },
        { a: thisY,     b: thisX - 1 },
        { a: thisY + 1, b: thisX + 1 },
        { a: thisY - 1, b: thisX - 1 },
        { a: thisY + 1, b: thisX - 1 },
        { a: thisY - 1, b: thisX + 1 },
    ]

    castlingPossible()
    
    queenMoves.forEach(element => {
        if ( fields[element.a] === undefined || fields[element.b] === undefined ) {
             console.log('ok') 
        } else { 
            castlingPossible()

            if ( user === 'player1' && (fields[element.a][element.b] === 0 || fields[element.a][element.b].user === 'player2')) { 
                if (fields[element.a][element.b].user === 'player2') {
                    fields[element.a][element.b].set = true
                } else {
                    fields[element.a][element.b] = possible
                }
            } 
            
            if ( user === 'player2' && (fields[element.a][element.b] === 0 || fields[element.a][element.b].user === 'player1')) { 
                if (fields[element.a][element.b].user === 'player1') {
                    fields[element.a][element.b].set = true
                } else {
                    fields[element.a][element.b] = possible
                }
            } 
        }
    })
}


function moveBishop(user, thisY, thisX) {

    const bishopUpLeft = [
        { a: thisY - 1, b: thisX - 1 },
        { a: thisY - 2, b: thisX - 2 },
        { a: thisY - 3, b: thisX - 3 }, 
        { a: thisY - 4, b: thisX - 4 },
        { a: thisY - 5, b: thisX - 5 },
        { a: thisY - 6, b: thisX - 6 },
        { a: thisY - 7, b: thisX - 7 }, 
    ]
    const bishopUpRight = [
        { a: thisY - 1, b: thisX + 1 },
        { a: thisY - 2, b: thisX + 2 }, 
        { a: thisY - 3, b: thisX + 3 }, 
        { a: thisY - 4, b: thisX + 4 },         
        { a: thisY - 5, b: thisX + 5 }, 
        { a: thisY - 6, b: thisX + 6 },        
        { a: thisY - 7, b: thisX + 7 }, 
    ]
    const bishopDownLeft = [
        { a: thisY + 1, b: thisX - 1 }, 
        { a: thisY + 2, b: thisX - 2 }, 
        { a: thisY + 3, b: thisX - 3 }, 
        { a: thisY + 4, b: thisX - 4 }, 
        { a: thisY + 5, b: thisX - 5 }, 
        { a: thisY + 6, b: thisX - 6 }, 
        { a: thisY + 7, b: thisX - 7 }, 
    ]
    const bishopDownRight = [
        { a: thisY + 1, b: thisX + 1 }, 
        { a: thisY + 2, b: thisX + 2 }, 
        { a: thisY + 3, b: thisX + 3 }, 
        { a: thisY + 4, b: thisX + 4 }, 
        { a: thisY + 5, b: thisX + 5 }, 
        { a: thisY + 6, b: thisX + 6 }, 
        { a: thisY + 7, b: thisX + 7 }, 
    ]

    moveCheck(bishopUpLeft, 7)
    moveCheck(bishopUpRight, 7)
    moveCheck(bishopDownLeft, 7)
    moveCheck(bishopDownRight, 7)
}


function moveKing(user, thisY, thisX) {
    
    const kingUp = []
    const kingDown = []
    const kingLeft = []
    const kingRight = []

    const kingUpLeft = []
    const kingUpRight = []
    const kingDownLeft = []
    const kingDownRight = []
    
    for (let i = 1; i < 8; i++) {

        const newKingMoveUp = { a: ( thisY - i ), b:( thisX )}        
        const newKingMoveDown = { a: ( thisY + i ), b:( thisX )}        
        const newKingMoveLeft = { a: ( thisY ), b:( thisX - i )}        
        const newKingMoveRight = { a: ( thisY ), b:( thisX + i )}    
        
        const newKingUpLeft = { a: ( thisY - i ), b:( thisX - i )}    
        const newKingUpRight = { a: ( thisY - i ), b:( thisX + i )}    
        const newKingDownLeft = { a: ( thisY + i ), b:( thisX - i )}    
        const newKingDownRight = { a: ( thisY + i ), b:( thisX + i )}    

        kingUp.push(newKingMoveUp)
        kingDown.push(newKingMoveDown)
        kingLeft.push(newKingMoveLeft)
        kingRight.push(newKingMoveRight)

        kingUpLeft.push(newKingUpLeft)
        kingUpRight.push(newKingUpRight)
        kingDownLeft.push(newKingDownLeft)
        kingDownRight.push(newKingDownRight)
    }



    moveCheck(kingUp, 7)
    moveCheck(kingDown, 7)
    moveCheck(kingLeft, 7)
    moveCheck(kingRight, 7)
    moveCheck(kingUpLeft, 7)
    moveCheck(kingUpRight, 7)
    moveCheck(kingDownLeft, 7)
    moveCheck(kingDownRight, 7)
}


function listener(){

    if (takeThis !== '') {
        
        let newX = this.getAttribute('x')
        let newY = this.getAttribute('y')

        if (fields[newY][newX] === takeThis ) {
            
            clearPossible()
            takeThis = ''

        } else if ( fields[newY][newX] === possible || fields[newY][newX].set === true ) {
            
           if ( castlingArray && takeThis.symbol === queen ) {
                castlingSet(newY, newX)
            } 
            fields[newY][newX] = takeThis
            fields[thisY][thisX] = 0


            switch (takeThis.user) {
                case 'player1':
                    player = 'player2'
                    firstPlayer = 'player2'
                    secondPlayer = 'player1'
                    break;
                case 'player2':
                    player = 'player1'
                    firstPlayer = 'player1'
                    secondPlayer = 'player2'
                    break;
                default:
                    break;
            }
            
            takeThis = ''
            clearPossible()
        
        }

    } else if (takeThis === '') {
        
        thisX = parseFloat(this.getAttribute('x'))
        thisY = parseFloat(this.getAttribute('y'))
    
        takeThis = fields[thisY][thisX]
        takeThis.set = true
        user = takeThis.user

        nextPlayer()
        

        switch (takeThis.symbol) {
            case pawn:
                movePawn(user, thisY, thisX)
                break;
            case knight:
                moveKnight(user, thisY, thisX)
                break;
            case rock:
                moveRock(user, thisY, thisX)
                break;
            case queen:
                moveQueen(user, thisY, thisX)
                break;
            case king:
                moveKing(user, thisY, thisX)
                break;
            case bishop:
                moveBishop(user, thisY, thisX)
                break;
            default:
                break;
        }
    }

    generateFields()
}


function generateFields() {
    var i = 0
    for (subTab of fields) {
        for (const field of subTab) {
            if ( field === possible || field.set === true) {
                cells[i].setAttribute('set', true)
            } 
            else if( field !== possible || field.set !== true) { 
                cells[i].removeAttribute('set')
            }
            
            if ( field ) {
                cells[i].innerHTML = field.symbol
                cells[i].setAttribute('player', field.user)   
                cells[i].classList.remove('white')
                cells[i].classList.remove('black')
                cells[i].classList.add(field.color)
            } else {
                cells[i].innerHTML = ''
            }

            i++;
        }
    }
}
 
function buildBoard() {

    var x = 0
    var y = 0
    var id = 0
    
    for (let tr = 0; tr < 8; tr++) {   
        column = document.createElement('tr')
        for (let td = 0; td < 8; td++) {
            let cell = document.createElement('td')
            cell.classList.add('cell')
            cell.addEventListener('click', listener)
            cell.setAttribute('id', id)
            cell.setAttribute('x', x)
            cell.setAttribute('y', y)
            id += 1
            x += 1
            column.appendChild(cell)
        }
        x = 0
        y += 1
        board.appendChild(column)
    }

    generateFields()
}

document.addEventListener('DOMContentLoaded', buildBoard)