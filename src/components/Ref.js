import React, { useState, useEffect, useRef } from 'react'

const Ref = () => {
    const [name, setName] = useState('')
    const renderCount = useRef(0)
    const inputRef = useRef()
    // const [renderCount, setRenderCount] = useState(0)

    useEffect(() => {
        // setRenderCount((prev) => prev + 1)
        inputRef.current = name // accessing previous state
    }, [name])

    console.log(inputRef.current);

    return (
        <>
            <h1>Ref</h1>
            <input id='Rishi' ref={inputRef} value={name} onChange={(e) => { setName(e.target.value) }}></input>
            <div>My name is {name} & it used to be {inputRef?.current}</div>
            <div>I have rendered {renderCount.current} times.</div>
        </>
    )
}

export default Ref