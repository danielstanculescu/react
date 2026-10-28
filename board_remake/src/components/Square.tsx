import { type ReactElement } from 'react'

export type SquareLocation = {
  x: number,
  y: number
}

type squareProps = {
    value: string,
    id: number,
    color: string,
    location: SquareLocation,
    handleClick: (id: number, location: SquareLocation) => void
}

const Square = ( {value, id, color, location, handleClick}: squareProps): ReactElement => {

  if(color === 'green'){
    return (
      <button className="square" style={{backgroundColor: 'green'}} onClick={() => handleClick(id, location)}>
        {value}
      </button>
  );
  }
  else{
    return (
      <button className="square" onClick={() => handleClick(id, location)}>
        {value}
      </button>
  )
  }
}

export default Square
