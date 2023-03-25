import React, { useContext } from 'react'
import GrandChildComponent from './GrandChildComponent'
import { ThemeContext } from './Context'


const ChildComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <>
            <div>ChildComponent</div>
            <div style={{ height: 300, width: 300, backgroundColor: "red" }}></div>
            <GrandChildComponent />
        </>
    )
}

export default ChildComponent