import React, { useState, useEffect } from 'react'

export const Effect = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    console.log("Rendered");
    useEffect(() => {
        const fetchData = () => {
            fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
                .then(response => response.json())
                .then(json => console.log(json))
        }
        fetchData()
        
        return () => { console.log("Return After Cleanup") }

    }, [resourceType])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])
    const handleResize = () => {
        setWindowWidth(window?.innerWidth)
    }
    return (
        <>
            <div>Effect</div>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('Users')}>User</button>
                <button onClick={() => setResourceType('Comments')}>Comments</button>
            </div>
            <h1>{windowWidth}</h1>
        </>

    )
}
