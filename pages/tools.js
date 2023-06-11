import React from 'react'
import Heading from '../Components/Heading'
import { useMediaQuery } from '@mui/material';
import Header from '../Components/Header';

const Tools = () => {
 const mx600 = useMediaQuery("( max-width:600px )");

  return (
    <div>
        {!mx600 && <Header />}
        <Heading
        heading=" OurTools"
        para="The 5 most important banking services are checking and savings accounts, loan and mortgage services, wealth management, providing Credit and Debit Cards, Overdraft services."
        image="/assets/tools.jpg"
      />
      {mx600 && <Header />}
    </div>
  )
}

export default Tools
