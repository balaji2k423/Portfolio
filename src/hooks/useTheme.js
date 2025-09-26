import { useEffect, useState } from 'react'


export default function useTheme(){
const [theme, setTheme] = useState(()=>{
try { return localStorage.getItem('theme') || 'dark' } catch(e){ return 'dark' }
})


useEffect(()=>{
try{ localStorage.setItem('theme', theme) } catch(e){}
},[theme])


return { theme, setTheme }
}