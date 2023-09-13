import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Revolution from '../Components/Revolution'
import GettingStarted from '../Components/GettingStarted'
import Features from '../Components/Features'
import Working from '../Components/Working'
import Examples from '../Components/Examples'
import Footer from '../Components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Revolution />
            <GettingStarted />
            <Features />
            <Working />
            <Examples />
            <Footer />
        </>
    )
}

export default Home