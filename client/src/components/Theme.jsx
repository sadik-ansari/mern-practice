import React, { useContext } from 'react'
import { ThemeContext } from '../context'

const Theme = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    console.log("Theme component rendered")
    return (
       <>
        <div>{theme}</div>
        <button onClick={() => setTheme("dark")}>Change theme</button>
       </>
    )
}

export default Theme