import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
import { ReactTyped } from "react-typed";

function Hero() {
    return (
        <div className='hero container' >
            <div className='hero-text'>
                <h1> <ReactTyped strings={["We Ensure better education for a better world"]} typeSpeed={40}></ReactTyped></h1>

                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
