import React from 'react'
import {Link} from 'react-router-dom'

function Footer(){
    return(
         <footer className="bg-sky-950">
            <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                    </div>
                    <div className="sm:flex sm:items-baseline-last">
                    <span className="text-sm text-gray-500 sm:text-left">
                        © 2025
                            JanMitra. All Rights Reserved.
                    </span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-white hover:underline">JanMitra</h2>
                            <ul className="text-gray-500 font-medium">
                                <li>
                                    <Link to=" ">
                                    Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer