'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Shop from "@/components/Shop";
import Title from "@/components/Title";
import { useState,createContext, useRef } from "react";


export const MenuContext = createContext()

export default function Home() {

  const [menu,setMenu] = useState('Kitchen') 
  const shopTitle = useRef()
  
  return (
    
    
    <div>
    <MenuContext.Provider value={{menu, setMenu}}>
      <Header/>
      <HomePage/>
      <Title title={"Our Products"}/>
      <Shop/>
    </MenuContext.Provider>
    <Footer/>
    </div>
  );
}
