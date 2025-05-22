import axios from 'axios';
import React, { useState } from 'react'
import FileInput from './FileInput';
import Heading from './Heading';

export default function BgRemover() {

    // State to store the uploaded image
    const [selectedFile, setSelectedFile] = useState(null);

    // State to store the output image (without background)
    const [outputImage, setOutputImage] = useState(null);

    // State for loading spinner
    const [loading, setLoading] = useState(false);

    // Handle file selection
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        // Reset output image if new file is selected
        setOutputImage(null);
    }


    // Handle background removal using remove.bg API
    const handleRemoveBackground = async () => {
        if (!selectedFile) return alert("Please upload an image first!");

        // Show loader while processing
        setLoading(true);

        const formData = new FormData();
        formData.append("image_file", selectedFile)
        formData.append("size", "auto");

        try {
            const response = await axios.post(
                "https://api.remove.bg/v1.0/removebg",
                formData,
                {
                    headers: {
                        "X-Api-Key": "UsfELTg72oJGCv3sniEDSXhF", // Replace this with your real remove.bg API key
                        "Content-Type": "multipart/form-data",
                    },
                    responseType: "blob", // Response is a binary image
                }
            );

            // Convert the blob to an object URL so we can display it
            const imageUrl = URL.createObjectURL(response.data);
            setOutputImage(imageUrl);

        }

        catch (error) {
            alert("Error removing background. Check your API key or file.");
        }
        console.log(error);

        setLoading(false);// Hide loader

    }

    const pageReload = () => {
        location.reload();
    }

    return (
        <>
            <div>

                <Heading />

                <div className='w-[1400px] mx-auto pt-[30px] rounded-lg'>

                    <div>
                        {/* <input  type="file" accept="image/**" onChange={handleFileChange} /> */}
                        {!selectedFile && <FileInput handle={handleFileChange} />}

                        {selectedFile && (
                            <button onClick={pageReload} className="mt-4 text-white px-4 py-1 ml-[20px] rounded-3xl bg-[#333387] cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
                            </button>
                        )}

                    </div>


                    <div className="grid lg:grid-cols-2 grid-cols-1 sm:mx-auto container mt-[50px]">

                        {selectedFile && (
                            <div className='text-center uploaded bg-[#fff] sm:mx-[130px] ml-[15px] w-[350px] mb-[50px] pt-[40px] py-[25px] rounded-lg'>

                                <img className='mx-auto' src={URL.createObjectURL(selectedFile)} alt="Original"
                                    width="300px" />

                               
                                <button onClick={handleRemoveBackground} disabled={loading} type="button" class="text-white mt-[25px] px-[50px]
                                 bg-[#333387] cursor-pointer font-medium rounded-lg text-[15px]  py-2.5 text-center inline-flex items-center  dark:hover:bg-[#5c5ce0] dark:focus:ring-blue-800">
                                    Remove Background
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                                

                            </div>
                        )}

                        

                        {outputImage && (


                            <div className='text-center uploaded bg-[#fff] sm:mx-[130px] ml-[15px] w-[350px] mb-[50px] pt-[40px] py-[25px] rounded-lg'>
                                

                                <img className="mx-auto" src={outputImage} alt="Original" width="300px" />

                                <a href={outputImage} download="no-bg.png">
                                    <button
                                        type="button"
                                        className="text-white mt-[25px] px-[50px] bg-[#333387] cursor-pointer font-medium rounded-lg text-[15px] py-2.5 text-center inline-flex items-center dark:hover:bg-[#5c5ce0] dark:focus:ring-blue-800"
                                    >
                                        Download Image
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-download-icon lucide-download ml-2"
                                        >
                                            <path d="M12 15V3" />
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <path d="m7 10 5 5 5-5" />
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </>
    )
}
