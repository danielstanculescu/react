import { useState } from "react";


const Square = ( ) => {

    const [value, setValue] = useState('');

    function handleClick() {
        //console.log('clicked');
        setValue('X');
    }

    return (
        <button 
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

export default Square
