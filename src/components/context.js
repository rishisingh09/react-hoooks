import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

export const ThemeContext = React.createContext()

const Context = () => {
    const [theme, setTheme] = useState('red')

    const toggleTheme = () => {
        setTheme((prev) => {
            if (prev === 'red') {
                return 'green'
            } else {
                return "red"
            }
        })
    }
    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ChildComponent />
            </ThemeContext.Provider>
        </div>
    )
}

export default Context