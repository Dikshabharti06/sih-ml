import React from "react";
import {Link, NavLink} from 'react-router-dom'
function Header(){
    return (
     <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-2 py-2.5 justify-content:space-between">
                <div className="flex flex-wrap mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center text-2xl">
                       JanMitra
                    </Link>
                    </div>
            </nav>
        </header>
    )
}
export default Header