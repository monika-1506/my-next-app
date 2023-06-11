import React, { useState } from "react";
import styles from "../styles/header.module.scss";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const mx600 = useMediaQuery("( max-width:600px )");
  // const menuItems = ['All Products', 'Resources', 'Tools', 'About Us'];
  const menuItems = [
    {
      title: "All Products",
      url: "/products",
    },
     {
      title: "Resources",
      url: "/resources",
    },
     {
      title: "Tools",
      url: "/tools",
    },
     {
      title: "About Us",
      url: "/about",
    },
  ];
  return (
    <header className={styles.header}>
      {!mx600 && (
        <div className={styles.logo}>
          <Link href={"/"}>Bank Sathi</Link>
        </div>
      )}

      <nav className={styles.menu_list}>
        {menuItems.map((item, index) => (
          <Link
            className={styles.menu_item}
            key={index}
            href={
              item.url.toLowerCase()
            }
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
