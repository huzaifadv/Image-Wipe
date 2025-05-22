import React from 'react'

export default function Heading() {
    return (
        <>
            <div className="heading text-center mt-[70px]">
                <h1 className='sm:text-[40px] text-[28px] font-[900]'>
                    <span className="bg-gradient-to-r from-[#5c5ce0] to-[red] bg-clip-text text-transparent">
                        Remove the background</span> from your image for free.</h1>
                <p className="mx-[20px] sm:text-[16px] text-[12px]">ImageWipe is a fast and easy online tool that removes backgrounds from your photos in seconds. Upload any image and get a clean, transparent background instantly!</p>
            </div>
        </>
    )
}
