import { type ReactElement } from 'react'
import Square from './Square'
import { type SquareLocation } from './Square';

type boardProps = {
    squares: string[],
    xIsNext: boolean,
    numberOfMoves: number,
    onPlay: (squares: string[], location: SquareLocation) => void 
}

const computeWinner = (squares: string[]): number[] => {

    const lines: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i=0; i<lines.length; i++){
        const [a, b, c]: number[] = lines[i];
        if(squares[a] !== '' && squares[a] === squares[b] && squares[a] === squares[c]){
            return [a,b,c];
        }
    }
    return [-1,-1,-1];
}

const Board = ( {squares, xIsNext, numberOfMoves, onPlay}: boardProps) => {

    const isWinner: number[] = computeWinner(squares);

    function handleSquareClick(i: number, location: SquareLocation){

        if(squares[i] !== '' || isWinner[0] !== -1){
            return;
        }
            
        const newSquares: string[] = squares.slice();    
        if(xIsNext)
            newSquares[i] = 'X';
        else
            newSquares[i] = 'O';

        onPlay(newSquares, location);
    }

    const displayNextMove = () : ReactElement => {
        
        let content: ReactElement;
        
        if(numberOfMoves == 10)
        {
            content = <>The result is a draw</>
        }
        else
        {
            if(isWinner[0] !== -1)
            {
                if(xIsNext){
                    content = <>Winner is O</>
                }
                else{
                    content = <>Winner is X</>
                }
            }
            else{
                if(xIsNext){
                    content = <>Next is X</>
                }
                else{
                    content = <>Next is O</>
                }
                
            }
        }
        
        return ( content );
    }


    const writeSquaresBody = (i: number): ReactElement[] => {
        
        let content: ReactElement[] = [];

        const [a, b, c]: number[] = isWinner;

        for (let j = 0; j < 3; j++) {
            
            let index = j + (3 * i);
            let squareContent: ReactElement = <></>;

            let color = '';
            
            // is winner
            if(a !== -1)
            {
                if(index === a || index === b || index === c)
                {
                    color = 'green';
                }
                else
                {
                    color = '';
                }
            }
            // not winner
            else
            {
                color = '';
            }
            
            const location: SquareLocation = {x: i, y: index};
            squareContent = <Square key={index} value={squares[index]} id={index} color={color} location={location} handleClick={(i:number, sl:SquareLocation) => handleSquareClick(i, sl)} />;

            content[j] = squareContent;
        }

        return content;
    }

    const writeSquares = (): ReactElement[] => {

        let content: ReactElement[] = [];

        for (let i = 0; i < 3; i++) {
            let c: ReactElement = 
                <div className="board-row" key={i}>
                    {writeSquaresBody(i)}
                </div> ;
            content[i] = c;
        }

        return content;
    }

    return (
    <>
        <div className="status">{displayNextMove()}</div>
        {writeSquares()}
    </>
  )
}

export default Board
