import React from 'react'
import useTheme from '../hooks/useTheme'
import { FaMoon, FaSun } from 'react-icons/fa'


export default function ThemeToggle(){
const { theme, setTheme } = useTheme()
const toggle = ()=> setTheme(theme === 'dark' ? 'light' : 'dark')


return (
<button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-md border border-white/5">
{theme === 'dark' ? <FaSun/> : <FaMoon/>}
</button>
)
}