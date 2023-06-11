import React from 'react'
import styles from '../styles/heading.module.scss'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useRouter } from "next/router";


const Heading = ({heading,para,image}) => {
     const router = useRouter();

  return (
    <>
    <p style={{width:'5rem', padding:"1rem"}}><KeyboardBackspaceIcon   onClick={() => router.push('/')} /></p>
    
    <div className={styles.container}>
        
      <h1 className={styles.heading}>{heading}</h1>
      <img className={styles.image} src={image} alt={heading}/>
      <p className={styles.para}>{para}</p>
    </div>
    </>
  )
}

export default Heading
