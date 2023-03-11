import React, { useContext } from 'react'
import { ThemeContext } from './context'


const GrandChildComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    console.log(theme);

    return (
        <>
            <div>GrandChildComponent</div>
            <div style={{ height: 150, width: 150, backgroundColor: theme }}></div>
        </>
    )
}

export default GrandChildComponent