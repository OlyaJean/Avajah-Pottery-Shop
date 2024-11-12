
import Image from 'next/image'
import React, {useContext } from 'react'
import cart from './../assets/cart.svg'
import { MenuContext } from '@/app/page'




const Header = () => {
 const {setMenu} = useContext(MenuContext)
 const handleScroll = () => {
  document.getElementById('shopTitle')?.scrollIntoView({behavior:'smooth'})
 }
 
  return (
    <div className='navShadow flex justify-evenly items-center  bg-neutral-100 sticky top-0 z-40'>
      <span className='tracking-widest text-center font-extralight text-sm'>Avajah <hr />pottery</span>
      <nav>
        <ul  className='flex gap-5 mt-5 md:gap-20 text-neutral-500 navbar'>
            <li>Home</li>
            <li className='dropdown pb-5' onClick={handleScroll}>Shop <ul className='dropdown-list p-5'>
                <li onClick={()=>{setMenu("All")}}>All products</li>
                <li onClick={()=>{setMenu("Decor")}}>Decor & Objects</li>
                <li onClick={()=>{setMenu("Kitchen")}}>Kitchen & Dining</li>
                <li onClick={()=>{setMenu("Jewelry")}}>Jewelry & Holders</li>
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

