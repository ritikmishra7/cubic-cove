import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate()
    return (
        <div className='max-w-6xl mx-auto my-28 text-white flex justify-center items-center flex-col gap-12'>
            <h1 className='text-6xl text-center font-bold'>Easy, Safe, Web3 Space</h1>
            <div>
                <p className='text-2xl text-center'>Master Your Content Delivery</p>
                <p className='text-2xl text-center'>Leverage dCDN, driven by global device networks</p>
            </div>
            <div onClick={() => navigate('/login')}>
                <Button title='Start Hosting' />
            </div>
        </div>
    )
}

export default Hero