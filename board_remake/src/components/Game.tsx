import { useState, type ReactElement } from "react";
import Board from "./Board"
import { type SquareLocation } from "./Square";

type HistoryLocation = [history: string[][], location:SquareLocation[]];

const history: string[][] = [Array(9).fill('')];
const location: SquareLocation[] = [{x:-1, y:-1}];
const initHistoryLocation:HistoryLocation = [history, location];

const Game = () => {

    const [stateHistory, setStateHistory] = useState(initHistoryLocation);
    const [xIsNext, setXIsNext] = useState(true);
    const [ascending, setAscending] = useState(true);
    const [textNextMoves, setTextNextMoves] = useState(['You are at move #0']);
   
    const handlePlay = (sq: string[], sl:SquareLocation) => {

        setStateHistory([ [...stateHistory[0],sq], [...stateHistory[1],sl] ]);
        setXIsNext(!xIsNext);

        if(!ascending){
            reverseMoves(-1, 'You are at move # ' + stateHistory[0].length);
        }
        else
        {
            setTextNextMoves([...textNextMoves, 'You are at move # ' + stateHistory[0].length]);
        }
    }

    const jumpTo = (i: number) => {
        
        setStateHistory([stateHistory[0].slice(0,i+1), stateHistory[1].slice(0, i+1)]);
        setXIsNext(i % 2 === 0 ? true : false);

        if(!ascending)
        {
            reverseMoves(i+1, '');
        }
        else
        {
            setTextNextMoves(textNextMoves.slice(0, i+1));
        }
    }
    
    const contentHistory = (i:number, location: SquareLocation): ReactElement => {

        let content: ReactElement ;
        let textButton: string;

        if(i === 0){
            textButton = 'Go to game start';
        }
        else {
            textButton = `Go to move #${i} -> (row:${location.x}, col: ${location.y})`;
        }

        content = (
            <li key={i}>
                <button onClick={() => jumpTo(i)}>{textButton}</button>
            </li>
        );

        return content;
    };

    const contentHistoryMultiple = (): ReactElement[] => {
            
        const l = stateHistory[0].length;
        let ret: ReactElement[] = [];
        
        for (let i = 0 ; i<l ; i++){
            const re = contentHistory(i, stateHistory[1][i]);
            ret[i] = re;
        }

        return ret;
    }

    const reverseMoves = (upTo: number, addText: string): void => {

        setAscending(!ascending);
        
        const newMoves = textNextMoves.slice();
        let rev = newMoves.reverse();
        
        if(addText !== '')
        {
            rev = [...rev, addText];
        }

        if(upTo > 0){
            rev = rev.slice(0, upTo);
        }

        setTextNextMoves(rev);
    }

    const displayTextMoves = ():ReactElement[] => {
        
        let ret: ReactElement[] = [];
        for (let i=0; i<textNextMoves.length; i++){
            if ((i !== 0 && ascending) || (i !== textNextMoves.length - 1 && !ascending)){
                ret[i] = 
                    <li key={i}>
                        {textNextMoves[i]}
                    </li>;
            }
        }

        return ret;
    }

    const displayMoves = displayTextMoves();

    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={stateHistory[0][stateHistory[0].length - 1]} 
                        xIsNext={xIsNext} 
                        //onPlay={(newS) => handlePlay(newS)}
                        numberOfMoves={stateHistory[0].length}
                        onPlay={handlePlay}
                    />
                </div>
                <div className="game-info">
                    <ol>
                        {contentHistoryMultiple()}
                    </ol>
                </div>
                <div className="game-info">
                    <ol>
                        {displayMoves}
                    </ol>
                </div>
                <div className="game-info">
                    <button onClick={() => reverseMoves(-1, '')}>Sort</button>
                </div>
            </div>
        </>
    
  )
}

export default Game
