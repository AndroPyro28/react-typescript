import {useContext, useState} from 'react'
import { ThemeInterfaceOrNull } from './Theme'
import { ThemeContext } from './ThemeContext'

function Box() {
    const themeConsumer = useContext<ThemeInterfaceOrNull>(ThemeContext)

    const [theme, setTheme] = useState<ThemeInterfaceOrNull>(themeConsumer)
  return (
    <>
    <div style={{backgroundColor: theme?.primary.main, color: theme?.primary.text}}>Box</div>
    <button onClick={() => setTheme(null)}>Remove Theme</button>
    <button onClick={() => setTheme(themeConsumer)}>make Theme</button>
    </>  
  )
}

export default Box