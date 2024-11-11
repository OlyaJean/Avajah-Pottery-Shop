
import Image from 'next/image'
import React from 'react'
import cart from './../assets/cart.svg'

const Header = () => {
  return (
    <div className='flex justify-evenly items-center  bg-neutral-100'>
      <span className='tracking-widest text-center font-extralight text-sm'>Avajah <hr />pottery</span>
      <nav>
        <ul  className='flex gap-5 mt-5 md:gap-20 text-neutral-500 navbar'>
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
      <Image alt='' src={cart} width={20} height={20} className='cursor-pointer text-neutral-500'/>
    </div>
  )
}

export default Header
