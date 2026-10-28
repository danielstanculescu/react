export type SquareType = string;

type PropsType = {
    value: string,
    onSquareClick: () => void
}

const Square = ( {value, onSquareClick}: PropsType ) => {

    return (
        <button 
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

export default Square
