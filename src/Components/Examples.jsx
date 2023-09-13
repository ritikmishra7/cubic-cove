import React from 'react'
import image1 from '../assets/images/fadeImg-1.png'
import image2 from '../assets/images/fadeImg-2.png'
import image3 from '../assets/images/fadeImg-3.png'
import { Scrollbars } from 'react-custom-scrollbars-2';
function Examples() {
    return (
        <div className='flex flex-col justify-center items-center gap-32'>
            <div className='flex justify-center items-center flex-col gap-2' style={{ fontSize: '40px' }}>
                <h2 className='font-bold'>The best sites are</h2>
                <h2 className='text-[#F69A6B] font-bold'>#HostedOnCubicCove</h2>
            </div>
            <div className='max-w-7xl'>
                <Scrollbars style={{ width: 709, height: 600 }}>
                    <div className='flex gap-4'>
                        <img src={image1} alt="ex-1" className='hover:scale-110' style={{ transition: 'all 0.3s ease-out' }} />
                        <img src={image2} alt="ex-2" className='hover:scale-110' style={{ transition: 'all 0.3s ease-out' }} />
                        <img src={image3} alt="ex-3" className='hover:scale-110' style={{ transition: 'all 0.3s ease-out' }} />
                    </div>
                </Scrollbars>
            </div>
        </div>

    )
}

export default Examples