
import { useState } from 'react'
import type { Player, Cell, GameState } from '../tictactoe'

export default function Gameboard() {

  const [currentPlayer, setCurrentPlayer] = useState<Player>('X')
  const [cellContent, setCellContent] = useState('')
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(''))
  
  function handleClick(i) {
    const updatedBoard = [...board]; 
    updatedBoard[i] = currentPlayer;
    setCurrentPlayer((currentPlayer === 'X') ? 'O' : 'X')
    setBoard(updatedBoard);
  }
  
  return (
      <>
      <h1>Tic-Tac-Toe</h1>
      <div className="
        grid grid-cols-3
        gap-[6px]              /* line thickness between squares */
        bg-black               /* the gap color becomes the grid lines */
        p-[6px]                /* outer border thickness */
        w-72 sm:w-80           /* total board width */
        rounded-lg"
      >
        {board.map((cell, i) => (
          <button 
            key={i} 
            className="bg-white aspect-square rounded-[2px]" 
            onClick={() => handleClick(i)}>{cell}
          </button>
        ))}
      </div>
      
      
  </>
  )
  
}