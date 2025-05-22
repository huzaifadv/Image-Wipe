import React from 'react'
import Logo from '/src/assets/images/logo.png'

export default function Footer() {
    return (
        <>
            <div className="sm:mt-[300px] mt-[250px]">
                <footer className="bg-[#333387] py-6 px-5">
                    <div className="w-full max-w-screen-xl mx-auto md:py-[60px]">
                        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
                            <a
                                href=""
                                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse justify-center sm:justify-start"
                            >
                                <img
                                    src={Logo}
                                    className="h-8 logo"
                                    alt="Flowbite Logo"
                                />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    Image Wipe
                                </span>
                            </a>
                            <ul className="flex flex-wrap justify-center sm:justify-start items-center mb-6 text-sm font-medium text-[white]">
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">
                                        Licensing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6 border-gray-200 mx-auto lg:my-8" />
                        <span className="block text-sm text-[white] text-center">
                            © 2025{" "}
                            <a href="#" className="hover:underline">
                                Image Wipe™
                            </a>
                            {" "} | Designed By <a target="_blank" className="underline" href="https://devhuzaifa.site/">Huzaifa</a>
                        </span>
                    </div>
                </footer>
            </div>


        </>
    )
}
