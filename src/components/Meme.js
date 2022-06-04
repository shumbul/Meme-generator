import data from "../data.js"
import React from "react"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(data)

    function getMemeImage() {
        const memeArr = allMemeImages.data.memes
        const randomNum = Math.floor(Math.random()*memeArr.length)
        const url = memeArr[randomNum].url
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type = "text"
                    className="form--text"
                    placeholder="Top text"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange}
                />
                <input
                    type = "text"
                    className="form--text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                />
                <button 
                    onClick={getMemeImage}
                    className="form--button"
                >Get a new meme image 🖼</button>
            </div>
            <div className="meme">
            <img src = {memeImage.randomImage} className = "meme--image" />
            <h2 className="meme--text top"> {memeImage.topText}</h2>
            <h2 className="meme--text bottom"> {memeImage.bottomText}</h2>
            </div>
        </main>
    )
}