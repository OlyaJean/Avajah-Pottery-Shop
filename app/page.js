'use client'
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Shop from "@/components/Shop";
import Title from "@/components/Title";



export default function Home() {
  return (
    <>
    <Header/>
    <HomePage/>
    <Title title={"Our Products"}/>
    <Shop/>
    </>
  );
}
