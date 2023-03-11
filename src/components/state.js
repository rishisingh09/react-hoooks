import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState(() => {
        console.log("I will run only once");
    })

    const increment = () => {
        setCount((prevState) => {
            return prevState + 1
        })
    }
    const decrement = () => {
        setCount((prevState) => {
            return prevState - 1
        })
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default UseState