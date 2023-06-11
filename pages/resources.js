import React from "react";
import Heading from "../Components/Heading";
import { useMediaQuery } from "@mui/material";
import Header from "../Components/Header";

const Resources = () => {
  const mx600 = useMediaQuery("( max-width:600px )");

  return (
    <div>
      {!mx600 && <Header />}
      <Heading
        heading="Our Resources"
        para=" Our Resources are Credit card apply online, compare credit cards india, Credit card eligibility, Hdfc bank Credit card, SBI Bank Credit card, ICICI Credit.You can earn money without investment."
        image="/assets/resources.jpg"
      />
      {mx600 && <Header />}
    </div>
  );
};

export default Resources;
