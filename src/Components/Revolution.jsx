import React, { useState, useEffect } from 'react';
import fade1 from '../assets/images/fadeImg-1.png'
import fade2 from '../assets/images/fadeImg-2.png'
import fade3 from '../assets/images/fadeImg-3.png'

function Revolution() {

    const [fadeImgIdx, setFadeImgIdx] = useState(0);

    const images = [
        fade1,
        fade2,
        fade3
    ]

    useEffect(() => {
        const imageSliderInterval = setInterval(() => {
            setFadeImgIdx((prevIndex) => (prevIndex + 1) % 3); // Assuming you have 3 images
        }, 3000);

        return () => {
            clearInterval(imageSliderInterval);
        };
    }, []);

    return (
        <div className='flex px-4 py-4 max-w-6xl mx-auto bg-[#323232] rounded-2xl justify-start items-start fadeContainer'>
            <div className='mx-3 image-slider' style={{ width: '58%' }}>
                {
                    images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`fade-${index}`}
                            className={`slider-image ${index === fadeImgIdx ? 'active' : ''}`}
                        />
                    ))}
            </div>
            <div className='p-12 flex flex-col gap-6' style={{ width: '40%' }}>
                <h2 className='font-bold text-4xl' style={{ transition: 'opacity 0.3s ease-in' }}>Step Into the Web3 Wave</h2>
                <p className='text-lg lg:w-96'>Swift Website Deployment Meets Global Distribution
                    Harness our node network for unparalleled content delivery efficiency worldwide.</p>
            </div>
        </div>
    )
}

export default Revolution