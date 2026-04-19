import Image from 'next/image'
import React from 'react'

export default function Accounts() {
  return (
    <div className="card bg-base-100 w-96 shadow-sm my-2">
        <figure>
            <Image
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  width={400}
                    height={250}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Accounts</h2>
            <p>Analtics of accounts in the list.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Manage</button>
            </div>
        </div>
    </div>
  )
}
