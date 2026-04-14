import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
<div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md drawer lg:drawer-open">
  <input id="navbar-1-toggle" className="peer hidden drawer-toggle" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar drawer-content">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

    <Link href={'/dashboard'} className="du-link">Admin Area</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li><Link href={'/dashboard'}>Overview</Link></li>
                <li><Link href={'/dashboard/clients'}>Clients</Link></li>
                <li><Link href={'/dashboard/projects'}>Projects</Link></li>
                <li><Link href={'/dashboard/services'}>Services</Link></li>
                <li><Link href={'/dashboard/hosting'}>Hosting Plans</Link></li>
                <li><Link href={'/dashboard/orders'}>Orders</Link></li>
                <li><Link href={'/dashboard/team'}>Team</Link></li>
              </ul>
            </details>
        </li>
        <li><Link href={'/dashboard/cms'}>Content Management</Link></li>
        <li><Link href={'/dashboard/analytics'}>Analytics</Link></li>
        <li><Link href={'/dashboard/settings'}>Settings</Link></li>
        <li>
          <details>
            <summary>Account</summary>
            <ul className="p-2 bg-base-100 w-40 z-1">
              <li><button>Profile</button></li>
              <li><button>Submenu 2</button></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      <input type="text" placeholder="Search" className="input input-bordered w-64 lg:w-auto" />
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
      <li><button>Item 1</button></li>
      <li>
        <button>Parent</button>
        <ul>
          <li><button>Submenu 1</button></li>
          <li><button>Submenu 2</button></li>
        </ul>
      </li>
      <li><button>Item 3</button></li>
    </ul>
  </div>

</div>
    )
}

export default Navbar
