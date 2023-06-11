import React from 'react'


import ProductAccordion from '../Components/ProductAccordion';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../styles/product.module.scss'
import { useRouter } from "next/router";

const AllProducts = () => {
     const router = useRouter();
  return (
    <div className={styles.container}>
      
       <div className={styles.product_head}>
      <div className={styles.first_child}>
        <KeyboardBackspaceIcon className={styles.back_arrow} onClick={() => router.push('/')} />
        <h3 className={styles.title}>All Products</h3>
      </div>
      <CloseIcon className={styles.close_icon} onClick={() => router.push('/')} />
    </div>
      <ProductAccordion/>
    </div>
  )
}

export default AllProducts
