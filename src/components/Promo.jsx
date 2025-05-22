import React from 'react'
import Upload from '/src/assets/images/upload.svg'
import Remove from '/src/assets/images/remove.svg'
import Download from '/src/assets/images/download.svg' // optional

export default function Promo() {
    return (
        <>
            <div className="promo bg-[#333387] py-[100px] sm:my-[50px] sm:mb-[30px]">

                <h1 className="text-center text-[#fff] sm:text-[45px] text-[30px] font-[800] mb-[30px]">How to remove the background of a picture</h1>

                <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto container">

                    {/* ------Upload------- */}
                    <div className="bg-white m-[20px] p-[20px] py-[25px] text-center rounded">
                        <img className='mx-auto w-[60px] mb-[25px]' src={Upload} alt="Upload Icon" />
                        <h3 className="text-[26px] font-[800] mb-[10px]">1. Upload</h3>
                        <p className="text-[15px] mx-[20px] mt-[10px]">
                            For best results, choose an image where the subject has clear edges with nothing overlapping.
                        </p>
                    </div>

                    {/* ------Remove------- */}
                    <div className="bg-white m-[20px] p-[20px] py-[25px] text-center rounded">
                        <img className='mx-auto w-[60px] mb-[25px]' src={Remove} alt="Remove Icon" />
                        <h3 className="text-[26px] font-[800] mb-[10px]">2. Remove</h3>
                        <p className="text-[15px] mx-[20px] mt-[10px]">
                            Upload your image to automatically remove the background in an instant.
                        </p>
                    </div>

                    {/* ------Download------- */}
                    <div className="bg-white m-[20px] p-[20px] py-[25px] text-center rounded">
                        <img className='mx-auto w-[60px] mb-[25px]' src={Download} alt="Download Icon" />
                        <h3 className="text-[26px] font-[800] mb-[10px]">3. Download</h3>
                        <p className="text-[15px] mx-[20px] mt-[10px]">
                            Download your new image as a PNG file with a transparent background to save!
                        </p>
                    </div>

                </div>
            </div> <br /> <br /> <br />
        </>
    )
}
