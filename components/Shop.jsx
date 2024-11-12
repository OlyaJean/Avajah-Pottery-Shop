import { items } from '@/assets/assets'
import React, { useContext } from 'react'
import ShopList from './ShopList'
import { MenuContext } from '@/app/page'

const Shop = () => {
 
  const {menu} = useContext(MenuContext)
  return (
    <div className='flex flex-wrap px-10 py-10 gap-5 md:gap-10 justify-center'>
      {items.filter((item)=> menu==="All"? true : item.category === menu).map((item,index)=>{ return <ShopList key={index} img={item.img} description={item.description} price={item.price}/>})}
    </div>
  )
}

export default Shop
