import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggletheme } from './utils/themeSlice';

const ThemeToggle = () => {

    const darkMode = useSelector((state)=>state.theme.darkmode)
const dispatch = useDispatch();
  return (
    <div
    style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",}}
    >

        <h1>{darkMode? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={()=>dispatch(toggletheme())}>Toggle Theme</button>
    </div>
  )
}

export default ThemeToggle