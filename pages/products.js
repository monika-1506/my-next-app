import React from 'react'
// import Products from '../Components/Products'
import { useMediaQuery } from '@mui/material';
import AllProducts from '../Components/AllProducts';
import Header from '../Components/Header';


const Products = () => {
    const mx600 = useMediaQuery("( max-width:600px )");
   
  return (
    <>
    {!mx600 && <Header />}
    <AllProducts/>
    {mx600 && <Header />}
    </>
  )
}

export default Products
