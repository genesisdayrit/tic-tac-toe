
type Player = 'X' | 'O'
type Cell = Player | ''

type GameState = {
    currentPlayer: 'X' | 'O'
    board: Cell[]
    endState: 'X' | 'O' | 'tie' | undefined
}

const initialGameState: GameState = {
    currentPlayer: 'X',
    board: ['', '', '', '', '', '', '', '',''],
    endState: undefined
}
const exampleGameState2: GameState = {
    currentPlayer: 'O',
    board: ['x', 'o', '', 'x', 'o', '', 'x', '',''],
    endState: 'x'
}
const exampleGameState3 = {
    currentPlayer: 'Y',
    board: ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o','x'], // imagine im smart and this is a tie
    endState: 'tie'
}