import React from 'react'
import wallet from '../assets/images/wallet.png'
import upload from '../assets/images/upload.png'
import thumbs from '../assets/images/thumbs.png'

function GettingStarted() {
    const data = [
        {
            image: wallet,
            title: 'Link Your Wallet'
        },
        {
            image: upload,
            title: 'Upload Your Website'
        },
        {
            image: thumbs,
            title: 'Secure Your Custom Domain or DNS'
        }
    ]
    return (
        <div className='flex flex-col justify-center items-center mb-20 sm:flex-wrap'>
            <h2 className='text-5xl font-bold mt-24 mb-2'>Kickstarting Your Journey</h2>
            <h5 className='mb-2' style={{ fontSize: '18.4px' }}>Simplicity in Three Steps</h5>
            <div className='flex mt-12 mx-3'>
                {
                    data.map((item, index) => (
                        <Steps key={index} index={index + 1} image={item.image} title={item.title} />
                    ))
                }
            </div>
        </div>
    )
}


function Steps({ index, image, title }) {
    return (
        <div className='flex flex-col py-3 gap-4 lg:w-96 md:w-64 sm:w-32 justify-center items-center'>
            <img src={image} alt="steps" width={58} />
            <p className='text-lg mb-2'>{`${index}. ${title}`}</p>
        </div>
    )
}


export default GettingStarted