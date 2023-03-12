import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    let [counter, setCounter] = useState(0);
    return (
        <>
            <h1>
                {counter}
            </h1>
            <button onClick={() => setCounter(++counter)}
                    className={classes.btn}
            >
                +1
            </button>
        </>
    );
};