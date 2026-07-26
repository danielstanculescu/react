import { type ReactElement } from 'react'
import Square from './Square'

//const board: string[] = ['','','','','','','','','']
const board: string[] = Array(9).fill('');

type boardProps = {
    squares: string[],
    xIsNext: boolean,
    onPlay: (squares: string[]) => void 
}

const computeWinner = (squares: string[]): boolean => {

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
            return true;
        }
    }
    return false;
}

const Board = ( {squares, xIsNext, onPlay}: boardProps) => {

    //const [squares, setSquares] = useState(board);

    const isWinner: boolean = computeWinner(squares);

    function handleSquareClick(i: number){

        if(squares[i] !== '' || isWinner){
            return;
        }
            
        const newSquares: string[] = squares.slice();    
        if(xIsNext)
            newSquares[i] = 'X';
        else
            newSquares[i] = 'O';

        onPlay(newSquares);
    }

    const displayNextMove = (win: boolean) : ReactElement => {
        
        let content: ReactElement;
        
        if(win)
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
        return ( content );
    }

  return (
    <>
        <div className="status">{displayNextMove(isWinner)}</div>
        <div className="board-row">
            <Square value={squares[0]} id={0} handleClick={(ide:number) => handleSquareClick(ide)}/>
            {/*<Square value={squares[0]} handleClick={() => handleSquareClick(0)}/>*/}
            <Square value={squares[1]} id={1} handleClick={handleSquareClick}/>
            <Square value={squares[2]} id={2} handleClick={handleSquareClick}/>
        </div>
        <div className="board-row">
            <Square value={squares[3]} id={3} handleClick={handleSquareClick}/>
            <Square value={squares[4]} id={4} handleClick={handleSquareClick}/>
            <Square value={squares[5]} id={5} handleClick={handleSquareClick}/>
        </div>
        <div className="board-row">
            <Square value={squares[6]} id={6} handleClick={handleSquareClick}/>
            <Square value={squares[7]} id={7} handleClick={handleSquareClick}/>
            <Square value={squares[8]} id={8} handleClick={handleSquareClick}/>
        </div>
    </>
    
  )
}

export default Board
