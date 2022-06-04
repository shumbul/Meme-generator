import React from "react"
import Navbar from "./components/Navbar"
import Meme from "./components/Meme"
import "./style.css"

/**
 * Challenge: Build the Header component
 */
export default function App() {
    return(
        <div>
            <Navbar />
            <Meme />
        </div>   
    )
}
