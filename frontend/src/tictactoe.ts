
type Player = 'X' | 'O'
type Cell = Player | ''

type GameState = {
    currentPlayer: 'X' | 'O'
    board: Cell[]
    endState: 'X' | 'O' | 'tie' | undefined
}

export type { Player, Cell, GameState }