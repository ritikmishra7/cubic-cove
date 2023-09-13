import React from 'react'
import Google from '../assets/images/google.svg'
import Twitter from '../assets/images/twitter.svg'
import Github from '../assets/images/github.svg'

function LoginSection() {
    return (
        <div className='flex flex-col max-w-7xl mx-auto px-3 items-center'>
            <div className='my-12' style={{ width: '65%', minWidth: '200px' }}>
                <h1 className='mt-6 mb-2 text-6xl font-bold'>LOGIN</h1>
                <p className='mb-6' style={{ fontSize: '16px' }}>
                    Please login to continue
                </p>
                <div className='bg-[#323232] py-12 px-4 flex justify-center items-center flex-col rounded-2xl' style={{ width: '90%' }}>
                    <div className='lg:w-96 md:w-96 flex flex-col justify-center items-center'>
                        <h5 className='mb-4 pr-3' style={{ fontSize: '18.4px', alignSelf: 'flex-start', fontWeight: '500' }}>
                            Social Login
                        </h5>
                        <button className='flex justify-start items-center bg-black my-1 py-2 w-full' style={{ border: '2px solid rgba(219,68,55,0.6)' }}>
                            <img src={Google} alt="google-logo" width={32} height={32} style={{ filter: 'invert(1)' }} className='ml-5' />
                            <span style={{ fontSize: '16px', marginInline: 'auto' }}>GOOGLE</span>
                        </button>
                        <button className='flex justify-start items-center bg-black my-1 py-2 w-full' style={{ border: '2px solid rgba(29,161,242,.6)' }}>
                            <img src={Twitter} alt="twitter-logo" width={32} height={32} style={{ filter: 'invert(1)' }} className='ml-5' />
                            <span style={{ fontSize: '16px', marginInline: 'auto' }}>TWITTER</span>
                        </button>
                        <button className='flex justify-start items-center bg-black my-1 py-2 w-full' style={{ border: '2px solid rgba(153, 153, 153, 0.6)' }}>
                            <img src={Github} alt="github-logo" width={32} height={32} style={{ filter: 'invert(1)' }} className='ml-5' />
                            <span style={{ fontSize: '16px', marginInline: 'auto' }}>GITHUB</span>
                        </button>
                    </div>
                    <hr className='my-4 bg-current text-white w-full opacity-20' />
                    <div className='flex flex-col justify-center items-start lg:w-96 md:w-96 gap-4'>
                        <h5 style={{ fontSize: '18.4px' }}>Web3 Login</h5>
                        <div className='w-full'>
                            <button className='border-none rounded-md py-2  font-bold hover:cursor-pointer text-white btnPrimary lg:wd-96 md:w-96' >Select Wallet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSection