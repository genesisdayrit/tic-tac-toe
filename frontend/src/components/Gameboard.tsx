
import { useState } from 'react'

export default function Gameboard() {

  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [cellContent, setCellContent] = useState('')
  
  function handleClick() {
    setCellContent(currentPlayer)
    setCurrentPlayer((currentPlayer === 'X') ? 'O' : 'X')
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
          <button onClick={handleClick} className="bg-white aspect-square rounded-[2px]">{cellContent}</button>
          <button onClick={handleClick} className="bg-white aspect-square rounded-[2px]">{cellContent}</button>
          <button onClick={handleClick} className="bg-white aspect-square rounded-[2px]">{cellContent}</button>
          <button onClick={handleClick} className="bg-white aspect-square rounded-[2px]">{cellContent}</button>
          <button onClick={handleClick} className="bg-white aspect-square rounded-[2px]">{cellContent}</button>
          <button onClick={handleClick} className="bg-white aspect-square rounded-[2px]">{cellContent}</button>
          <button onClick={handleClick} className="bg-white aspect-square rounded-[2px]">{cellContent}</button>
          <button onClick={handleClick} className="bg-white aspect-square rounded-[2px]">{cellContent}</button>
          <button onClick={handleClick} className="bg-white aspect-square rounded-[2px]">{cellContent}</button>
      </div>
      
      
  </>
  )
  
}