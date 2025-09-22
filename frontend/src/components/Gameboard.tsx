
export default function Gameboard() {
        
    // for loop to add the button 9 times
    
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
            <button className="bg-white aspect-square rounded-[2px]" />
            <button className="bg-white aspect-square rounded-[2px]" />
            <button className="bg-white aspect-square rounded-[2px]" />
            <button className="bg-white aspect-square rounded-[2px]" />
            <button className="bg-white aspect-square rounded-[2px]" />
            <button className="bg-white aspect-square rounded-[2px]" />
            <button className="bg-white aspect-square rounded-[2px]" />
            <button className="bg-white aspect-square rounded-[2px]" />
            <button className="bg-white aspect-square rounded-[2px]" />
        </div>
        
        
    </>
    )
    
}


  // width: 100px;
  // height: 100px;
  // border: 6px solid black;
  // background-color: white;