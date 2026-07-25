import { useState } from "react";
import Square from "./Square";
import { type SquareType } from "./Square";


type BoardType = SquareType[]


const initState:BoardType = ["","","","","","","","",""]
//const initState:BoardType = Array(9).fill('')


function Board () {

    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState<BoardType>(initState);


    const winner: string = calculateWinner(squares);
    let status;
    if (winner !== ''){
        status = "Winner: " + winner;
    }
    else{
        status = "Next player: " + (xIsNext ? "X" : "O");
    }


    function handleClick(i: number) {
        if(squares[i] !== '' || winner){
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext)
            nextSquares[i] = "X";
        else
            nextSquares[i] = "O";
        
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    return (
    <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
    </>
  );
}

/*
const Board = () => {
  return (
    <div>
      
    </div>
  )
}
*/


function calculateWinner(squares: BoardType): SquareType {
    
    const lines: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i:number = 0; i < lines.length; i++){
        
        const [a, b, c]: number[] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }

    return '';
}


export default Board

