import data from "../data.js"
import React from "react"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage() {
        const memeArr = data.data.memes
        const randomNum = Math.floor(Math.random()*memeArr.length)
        setMemeImage(memeArr[randomNum].url)
    }
    return (
        <main>
            <div className="form">
                <input input = "text" className="form--text" placeholder="Top text" />
                <input input = "text" className="form--text" placeholder="Bottom text" />
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
            </div>
            <img src = {memeImage} className = "meme--image" />
        </main>
    )
}