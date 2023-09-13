import React from 'react'
import feat1 from '../assets/images/feat1.png'
import feat2 from '../assets/images/feat2.png'
import feat3 from '../assets/images/feat3.png'
import feat4 from '../assets/images/feat4.png'
function Features() {
    const data = [
        {
            image: feat1,
            title: 'Hosted for Enternity',
            content: 'With Cubic Cove, once a website is registered, it remains accessible forever through our network of community-driven node operators.'
        },
        {
            image: feat2,
            title: 'Web Security',
            content: 'Register Once, Access Forever.Benefit from our enduring network, powered by community-driven node operators.'
        },
        {
            image: feat3,
            title: 'Affordably Priced',
            content: 'Enhanced Scalability, Reduced Costs By harnessing decentralized storage solutions, we offer web hosting at a fraction of conventional service prices.'
        },
        {
            image: feat4,
            title: 'Performance',
            content: 'Through our decentralized node network, we ensure content is delivered from the most geographically advantageous point, ensuring swift load times and minimized latency'
        }
    ]

    return (
        <div className='flex flex-col p-12 justify-center items-center bg-[#323232] mx-auto rounded-lg feat'>
            <h2 className='text-4xl mb-2 font-bold'>Why Choose Cubic Cove?</h2>
            <div className='mt-12 mx-3 flex flex-wrap justify-around'>
                {
                    data.map((item, index) => (
                        <SingleFeat key={index} image={item.image} title={item.title} content={item.content} />
                    ))
                }
            </div>
        </div>
    )
}

function SingleFeat({ image, title, content }) {
    return (
        <div className='flex gap-6 mb-10' style={{ width: '48%', marginInline: 'auto' }}>
            <div className='w-36 flex justify-center items-start'>
                <img src={image} alt="feat-img" width={250} />
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='text-lg'>{title}</h5>
                <p className='text-md'>{content}</p>
            </div>
        </div>
    )
}

export default Features