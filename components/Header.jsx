
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center items-center flex-col bg-neutral-100'>
      <nav>
        <ul className='flex gap-5 mt-5 md:gap-20 text-neutral-500 navbar'>
            <li>Home</li>
            <li className='dropdown pb-5'>Shop <ul className='dropdown-list p-5'>
                <li>Decor & Objects</li>
                <li>Kitchen & Dining</li>
                <li>Jewelry & Holders</li>
                </ul></li>
            <li>Journal</li>
            <li className='dropdown pb-5'>About <ul className='dropdown-list p-5'>
                <li>Shippng & Returns</li>
                <li>Contacts</li>
                </ul></li>
        </ul>
      </nav>
  
    </div>
  )
}

export default Header
