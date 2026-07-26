import { useState, type ReactElement } from "react";
import Board from "./Board"


const history: string[][] = [Array(9).fill('')];

const Game = () => {

    const [stateHistory, setStateHistory] = useState(history);
    const [xIsNext, setXIsNext] = useState(true);
   
    //const [currentBoard, setCurrentBoard] = useState(history[stateHistory.length - 1])
  
    const handlePlay = (sq: string[]) => {

        setStateHistory([...stateHistory, sq]);
        setXIsNext(!xIsNext);
    }

    const jumpTo = (i: number) => {
        
        setStateHistory(stateHistory.slice(0,i+1));
        setXIsNext(i % 2 === 0 ? true : false);
    }
    
    const cont = (i:number): ReactElement => {

        let content: ReactElement ;

        let textButton: string;

        if(i === 0){
            textButton = 'Go to game start';
        }
        else {
            textButton = `Go to move #${i}`;
        }

        content = (
            <li key={i}>
                <button onClick={() => jumpTo(i)}>{textButton}</button>
            </li>
        );

        return content;
    };

    const contmultiple = (): ReactElement[] => {
            
        const l = stateHistory.length
        let ret: ReactElement[] = [];
        
        for (let i = 0 ; i<l ; i++){
            const re = cont(i);
            ret[i] = re;
        }

        return ret;
    }

    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={stateHistory[stateHistory.length - 1]} 
                        xIsNext={xIsNext} 
                        //onPlay={(newS) => handlePlay(newS)}
                        onPlay={handlePlay}
                    />
                </div>
                <div className="game-info">
                    <ol>
                        {contmultiple()}
                    </ol>
                </div>
            </div>
        </>
    
  )
}

export default Game
