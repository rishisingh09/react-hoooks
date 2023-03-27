import React, { useState } from 'react'

const Memo = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = slowFunction(number)

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    function slowFunction(num) {
        console.log("Calling Slow function");
        for (let i = 0; i <= 1000000000000; i++) {
            return num * 2

        }
    }

    console.log(dark);
    return (
        <>
            <div>Memo</div>
            <input type={number} value={number} onChange={(e) => setNumber(e.target.value)} ></input>
            <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

export default Memo