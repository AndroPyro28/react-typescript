import {useContext} from 'react'
import { ThemeInterfaceOrNull } from './Theme'
import { ThemeContext } from './ThemeContext'

function Box() {
    const theme = useContext<ThemeInterfaceOrNull>(ThemeContext)
  return (
    <div style={{backgroundColor: theme?.primary.main, color: theme?.primary.text}}>Box</div>
  )
}

export default Box