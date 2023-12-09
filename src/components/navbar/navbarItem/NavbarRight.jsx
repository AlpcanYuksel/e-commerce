import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";



const NavbarRight = () => {
  return (
    <div className='flex items-center gap-8'>

        <div className='flex items-center'>
            <input type='text' placeholder='Search'/>
            <IoIosSearch size={28}/>
        </div>

        <IoMdHeartEmpty size={28}/>
        
        <div className='relative'>
            <div className='absolute -top-3 -right-3'>3</div>
            <SlBasket size={28}/>
        </div>
    </div>
  )
}

export default NavbarRight