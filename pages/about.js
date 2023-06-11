import React from "react";
import Heading from "../Components/Heading";
import { useMediaQuery } from "@mui/material";
import Header from "../Components/Header";


 

const About = () => {
   const mx600 = useMediaQuery("( max-width:600px )");
  return (
    <div>
      {!mx600 && <Header />}
      <Heading
        heading="About us"
        para="Bank Saathi is the most popular app to make money. It is similar to the One code app.You can make money by selling brands like Hdfc saving account, axis saving account, Bajaj EMI card,upstox, and many more."
        image="/assets/contact.jpg"
      />
      {mx600 && <Header />}
    </div>
  );
};

export default About;
