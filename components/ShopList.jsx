
import Image from 'next/image'
import React from 'react'

const ShopList = ({img,description,price}) => {
  return (
    <div className='body-image rounded-md w-fit flex flex-col gap-2 p-5 cursor-pointer hover:shadow-none hover:border-[1px]'>
      <Image width={150} src={img} alt='' className='h-44 w-36 md:w-60 object-cover'/>
      <p className='text-center'>{description}</p>
      <hr />
      <p className='text-center'>${price}</p>
    </div>
  )
}

export default ShopList
