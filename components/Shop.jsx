import { items } from '@/assets/assets'
import React from 'react'
import ShopList from './ShopList'

const Shop = () => {
    
  return (
    <div className='flex flex-wrap px-10 py-10 gap-5 md:gap-10 justify-center'>
      {items.map((item,index)=>{ return <ShopList key={index} img={item.img} description={item.description} price={item.price}/>})}
    </div>
  )
}

export default Shop
