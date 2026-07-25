import { useState, type ReactElement } from "react";
import Board from "./Board"
import { type BoardType } from "./Board";


type HistoryType = BoardType[]

const board: BoardType = ["","","","","","","","",""];

const initState:HistoryType = [board];


const Game = () => {
    
    const [history, setHistory] = useState<HistoryType>(initState);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares: BoardType = history[currentMove];

    //const [xIsNext, setXIsNext] = useState(true);
    const xIsNext = currentMove % 2 === 0;
    
  
    function handlePlay(nextSquares: BoardType) {

        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove: number): void {  // todo typescript

        setCurrentMove(nextMove);

        const result = history.filter((item) => history.indexOf(item) <= nextMove )
        setHistory(result);
    }

    const moves = history.map((squares: BoardType, move: number): ReactElement => {

        let description;
        
        if(move > 0){
            description = 'Go t move # ' + move;
        }
        else{
            description = 'Go to game start';
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });


  return (
    <div className="game">
        <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
            <ol>{moves}</ol>
        </div>
    </div>
  )
}

export default Game
