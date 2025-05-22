import React, { useRef } from 'react'
import Video from "/src/assets/images/video.mp4"

export default function FileInput({ handle }) {

    const btnFile = useRef(null);

    const uploadClick = () => {
        btnFile.current.click();
    }

    return (
        <>
            <div className="grid lg:grid-cols-2">

                <div className="text-center order-2 lg:order-1">
                    <video className="sm:w-[600px] w-[370px]" src={Video} autoPlay loop muted playsInline tabIndex="0" />
                </div>

                <div className="lg:my-auto mb-[20px] upload-box text-center m-[15px] lg:w-full sm:w-[700px] w-[360px] order-1 lg:order-2">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col hover:bg-[#F7FCFE] items-center justify-center h-80 border-4 border-dashed rounded-lg cursor-pointer bg-[#fff] border-[#95a0b0d1]"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>

                            <h2 className="sm:text-[30px] text-[20px] font-[900] text-center">Drag and drop an image <br /> <span className='text-[#333387]'>or browse upload.</span></h2>

                            <button onClick={uploadClick} className="bg-[#333387] cursor-pointer text-[white] rounded-[100px] my-[10px] mt-[20px] px-[30px] py-[10px] font-[700] text-[17px]">Upload your photo</button>

                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="sm:text-xs text-[11px] text-gray-500 dark:text-gray-400">
                                file must be JPEG, JPG, PNG, or WebP upto 40MB
                            </p>
                        </div>
                        <input ref={btnFile} id="dropzone-file" type="file" accept="image/**" onChange={handle} className="hidden" />
                    </label>
                </div>

            </div>
        </>
    )
}
