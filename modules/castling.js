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

export default castlingPossible