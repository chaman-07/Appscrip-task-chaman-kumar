"use client"
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SortBar from "./components/SortBar";
import ProductCard from "./components/ProductCard";
import FilterSidebar from "./components/FilterSidebar";
import Footer from "./components/Footer";


const product = [
  {
    id: 1,
    title: "RECYCLED BACKPACK",
    image: "https://m.media-amazon.com/images/I/31RkP5XYARL._AC_SR240,220_.jpg"

  },
  {
    id: 2,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/31-tS9dVBmL._AC_SR240,220_.jpg"

  },
  {
    id: 3,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/81QX9Dat3JL._AC_UL320_.jpg"
  }
  ,
  {
    id: 4,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/81HcHLv1JAL._AC_UL320_.jpg"
  },
  {
    id: 6,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/31-tS9dVBmL._AC_SR240,220_.jpg"
  },
  {
    id: 7,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/31-tS9dVBmL._AC_SR240,220_.jpg"
  },
  {
    id: 8,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/31-tS9dVBmL._AC_SR240,220_.jpg"
  },
  {
    id: 9,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/31-tS9dVBmL._AC_SR240,220_.jpg"
  },
  {
    id: 10,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/61VxmrWFkYL._AC_UL320_.jpg"
  },
  {
    id: 11,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/41eiC1OmbpL.AC_SX250.jpg"
  },
  {
    id: 12,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/31z7mNgfB8L._AC_SR480,440_.jpg"
  },
  {
    id: 13,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/31nMAGDZuOL._AC_SR480,440_.jpg"
  },
  {
    id: 14,
    title: "PRODUCT NAME",
    image: "https://m.media-amazon.com/images/I/31-tS9dVBmL._AC_SR240,220_.jpg"
  }


]


export default function Home() {

  const [showFilter, setShowFilter] = useState(true)
  return (
    <main>
      <Navbar />
      <Hero />
      <SortBar showFilter={showFilter}
        setShowFilter={setShowFilter} />

      <div className="plplayout">
        {showFilter && <FilterSidebar />}

        <div className="productGrid">
          {product.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
          <Footer />

    </main>
  )
}
