import React from 'react'
import working from '../assets/images/working.png'

function Working() {
    return (
        <div className='my-28 flex px-5 lg:flex-row md:flex-row flex-col justify-between max-w-6xl mx-auto items-center'>
            <div className='flex flex-col' style={{ width: '48%' }}>
                <h2 className='mb-2 text-4xl'>Discover Our Net Mechanics.</h2>
                <p className='my-6' style={{ fontSize: '16px' }}>Embrace the power of a truly decentralized content delivery network (dCDN) with BlokHost's node network. Anchored by community involvement, this system not only enhances content distribution but also offers members the opportunity to fortify the network. By establishing and managing a node, contributors champion network growth and security, all while reaping rewards in tokens.</p>
                <p className='my-6' style={{ fontSize: '16px' }}>Through our dCDN network, website data is strategically dispersed across a vast array of nodes. This design not only diminishes website latency but also boosts reliability, guaranteeing that content is accessible to users globally. For website proprietors, adopting the dCDN means unlocking accelerated site performance and speed, all without the hefty price tag associated with conventional content delivery networks.</p>
            </div>
            <div className='pl-3'>
                <img src={working} alt="working" />
            </div>
        </div>
    )
}

export default Working