import React from 'react'

export default function Footer() {
    return (
        <div className="bg-gray-300 text-black py-4 w-full">
            <div className="container mx-full m-auto px-4">
                <div className='text-left'>
                    <small>{new Date().getFullYear()} Wall-V. All rights reserved.</small>
                </div>
            </div>
        </div>
    )
}