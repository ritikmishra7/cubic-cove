import React from 'react'
import image1 from '../assets/images/fadeImg-1.png'
import image2 from '../assets/images/fadeImg-2.png'
import image3 from '../assets/images/fadeImg-3.png'
function Examples() {
    return (
        <div className='flex flex-col justify-center items-center gap-32'>
            <div className='flex justify-center items-center flex-col gap-2' style={{ fontSize: '40px' }}>
                <h2 className='font-bold'>The best sites are</h2>
                <h2 className='text-[#F69A6B] font-bold'>#HostedOnCubicCove</h2>
            </div>
            <div className='flex max-w-6xl gap-2 overflow-scroll mx-auto'>
                <div>
                    <img src={image1} alt="image1" className='w-full' />
                </div>
                <div>
                    <img src={image2} alt="image2" />
                </div>
                <div>
                    <img src={image3} alt="image3" />
                </div>
            </div>
        </div>

    )
}

export default Examples