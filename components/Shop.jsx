import { items } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Shop = () => {
  return (
    <div className='body-image rounded-md w-fit flex flex-col gap-5 p-5'>
      <Image width={150} src={items[0].img} alt=''/>
      <p className='text-center'>{items[0].description}</p>
      <hr />
      <p className='text-center'>$ {items[0].price}</p>
    </div>
  )
}

export default Shop
