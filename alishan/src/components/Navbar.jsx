import React from 'react'

import {Link, NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="shadow">
  <div className='container  flex justify-between max-w-7xl mx-auto p-4'>
        <h4 className="flex font-bold text-[30px]">
          router Dom
        </h4>
        <ul className='flex gap-5'>
          <li>
             <NavLink className={({isActive}) =>`hover:text-amber-600 ${isActive ? `underline` : ``}`} to="/home">Home</NavLink> 
        </li>
          <li>
                <NavLink className={({isActive}) =>`hover:text-amber-600 ${isActive ? `underline` : ``}`} to="/about">About</NavLink> 
        </li>
          <li>
            <NavLink className={({isActive}) =>`hover:text-amber-600 ${isActive ? `underline` : ``}`} to="/features">Features</NavLink> 
        </li>
          <li>
            <NavLink className={({isActive}) =>    `hover:text-amber-600 ${isActive ? `underline` : ``}`} to="/contact">Contact</NavLink> 
        </li>
        </ul>
    </div>
</div>
  )
}

export default Navbar