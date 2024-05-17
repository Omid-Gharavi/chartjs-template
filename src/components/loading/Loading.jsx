import React from 'react'

const Loading = () => {
    return (
        <div className='bg-white flex justify-center items-center absolute inset-0 z-[100]'>
            <p className='font-bold text-[5rem]'>درحال بارگذاری</p>
        </div>
    )
}

export default Loading