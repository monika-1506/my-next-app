import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../styles/accordion.module.scss";

const ProductAccordion = () => {
  const [expandedAccordion, setExpandedAccordion] = useState([]);
  const [openParentAccordion, setOpenParentAccordion] = useState(null);
  const accordionData = [
  {
    title: "Fruitful Banks Name",
    children: [
      {
        title: "Fruit Name",
        items: ["Apple", "Banana", "Orange", "Mango"],
      },
      {
        title: "Bank Name",
        items: ["Bank A", "Bank B", "Bank C", "Bank D"],
      },
    ],
  },
  {
    title: "Credit Cards",
    children: [
      {
        title: "Cards",
        items: ["Apple", "Banana", "Orange", "Mango"],
      },
      {
        title: "Bank Name",
        items: ["Bank A", "Bank B", "Bank C", "Bank D"],
      },
    ],
  },
];

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    if (isExpanded) {
      setExpandedAccordion((prevExpanded) => [...prevExpanded, panel]);
      setOpenParentAccordion(panel);
    } else {
      setExpandedAccordion((prevExpanded) =>
        prevExpanded.filter((item) => item !== panel)
      );
    }
  };

  const isAccordionExpanded = (panel) => {
    return expandedAccordion.includes(panel);
  };

  const isChildAccordionExpanded = (parentIndex, childIndex) => {
    const panel = `${parentIndex}-${childIndex}`;
    return expandedAccordion.includes(panel);
  };

  return (
    <div>
      {accordionData.map((parentAccordion, parentIndex) => (
        <Accordion
          key={parentIndex}
          className={styles.accordion}
          expanded={isAccordionExpanded(parentIndex)}
          onChange={handleAccordionChange(parentIndex)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className={styles.accordionSummary}
          >
            <Typography variant="h6">{parentAccordion.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {parentAccordion.children.map((childAccordion, childIndex) => (
              <Accordion
                key={childIndex}
                className={styles.accordion}
                expanded={isChildAccordionExpanded(parentIndex, childIndex)}
                onChange={handleAccordionChange(
                  `${parentIndex}-${childIndex}`
                )}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  className={styles.accordionSummary}
                >
                  <Typography variant="subtitle1">
                    {childAccordion.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {childAccordion.items && (
                    <ul>
                      {childAccordion.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ProductAccordion;
