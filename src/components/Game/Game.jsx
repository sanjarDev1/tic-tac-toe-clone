
import React, { useState } from 'react';
import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import { calculatWinner } from '../utils/WinnerCalculator';
import './Game.css';

export const Game=()=>{
    
    const [cellValues, setCellValues] = useState(['','','','','','','','','']);
    const [ xIsNext, setXIsNext] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false)
    const winningCombination =[];

    const isCellEmpty = (cellIndex) =>cellValues[cellIndex]===''

    const onCellClicked = (cellIndex)=>{

        if(isCellEmpty(cellIndex)){

            const newCellValues = [...cellValues]
            newCellValues[cellIndex]=xIsNext ? 'X': 'O';
            

            const calcResult = calculatWinner(newCellValues, cellIndex)

            setCellValues(newCellValues)
            setXIsNext(!xIsNext)
            setIsGameOver(calcResult)
        }
      }
  return (
    <>
<div id="game">
      <h1>Tic Tac Toe</h1>
      <Board 
      cellValues={cellValues} 
      winningCombination={winningCombination}
      cellClicked={onCellClicked}
      />
  </div>
  <ResultModal
  isGameOver={isGameOver} />

  </>
  );
}

