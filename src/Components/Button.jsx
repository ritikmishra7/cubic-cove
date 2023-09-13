import React from 'react'

function Button({ title, width }) {
    return (
        <button className='border-none rounded-md px-12 py-2 text-black font-bold cursor-pointer hover:text-white btnPrimary' >{title}</button>

    )
}

export default Button