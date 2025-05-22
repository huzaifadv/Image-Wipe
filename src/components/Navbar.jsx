import React, { useEffect } from 'react'
import { initFlowbite } from 'flowbite';
import Logo from '/src/assets/images/logo.png'

export default function Navbar() {

    useEffect(() => {
        initFlowbite();
    }, []);


    return (
        <>
            <nav className="border-gray-200 bg-[#333387]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src={Logo}
                            className="h-14 w-14 mr-[0px]"
                            alt=""
                        />
                        <span className="self-center text-2xl whitespace-nowrap font-[800] dark:text-white">
                            Image Wipe
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#fff] rounded-lg md:hidden"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#b5b4b4] rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 px-3 text-[#fff] sm:bg-[#5c5ce0] sm:hover:bg-[#5c5ce0] rounded-[5px]">Home</a>
                            </li>
                            <li>
                                 <a href="#" className="block py-2 px-3 text-[#fff] sm:hover:bg-[#5c5ce0]  rounded-[5px]">About</a>
                            </li>
                            <li>
                                 <a href="#" className="block py-2 px-3 text-[#fff] sm:hover:bg-[#5c5ce0]  rounded-[5px]">Features</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-[#fff] sm:hover:bg-[#5c5ce0]  rounded-[5px]">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-[#fff] sm:hover:bg-[#5c5ce0]  rounded-[5px]">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
