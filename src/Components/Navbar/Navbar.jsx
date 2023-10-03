import React from 'react'
import {FaSearch} from 'react-icons/fa'
import './navbar.css'
const Navbar = ({handleSearchChange,searchQuery}) => {
  return (
    <div className='navbar'>
        <div className="logo"><h2>StreamX</h2></div>
        <div className="search">
                <div className="iconDiv">
                <FaSearch style={{color:"#bedfd4"}} className=''/>
                </div>
                <input type="text" placeholder='Search....' name="" id=""  value={searchQuery}
        onChange={handleSearchChange} />
            
        </div>
    </div>
  )
}

export default Navbar