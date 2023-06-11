import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../Components/Header";
import ArrowBtn from "../Components/ArrowBtn";
import Arrows from "../Components/Arrows";
import { useMediaQuery } from "@mui/material";

export default function Home() {
  const mx600 = useMediaQuery("( max-width:600px )");

  return (
    <div className={styles.container}>
      <Head>
        <title>BankSathi</title>
      </Head>
      {!mx600 && <Header />}

      <Arrows />
      <ArrowBtn />
      {mx600 && <Header />}

      {!mx600 && (
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      )}
    </div>
  );
}
