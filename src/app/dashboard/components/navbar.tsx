import React from 'react'

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white py-4 w-full">
            <div className="container mx-full m-auto px-4 flex items-center justify-between">
                <div className='text-left'>
                    <a href="#" className="text-lg font-bold">Wall-V</a>
                </div>
                {/* toggle for mobile menu */}
                <div className='mobile-menu-toggle md:hidden sm:flex'>
                    <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white" title='Menu'>
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </div>
                <div className='text-right md:flex hidden'>
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Dashboard</a>
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Settings</a>
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Profile</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
