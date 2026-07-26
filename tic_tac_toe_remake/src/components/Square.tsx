import { type ReactElement } from 'react'

type squareProps = {
    value: string,
    id: number,
    handleClick: (id: number) => void
    //handleClick: () => void
}

const Square = ( {value, id, handleClick}: squareProps): ReactElement => {
  return (
    <button className="square" onClick={() => handleClick(id)}>
    {/*<button className="square" onClick={handleClick}>*/}
        {value}
    </button>
  )
}

export default Square
