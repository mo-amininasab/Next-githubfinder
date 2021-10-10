import React from 'react'
import Link from 'next/link'

const Navbar = ({icon, title}) => {
  return (
    <nav className="bg-primary px-16 py-3 flex justify-between items-center text-white">
      <h1 className="text-2xl font-semibold">
        <i className={icon} /> {title}
      </h1>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github Finder',
};
