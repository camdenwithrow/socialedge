import type { NextPage } from "next";
import React, {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../utils/trpc";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainSearch from "../components/MainSearch";


const Home: NextPage = () => {
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <>
      <Head>
        <title>Social Edge</title>
        <meta name="description" content="Social Edge Data App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen">
        <Navbar />
        <Hero onClickSearch={() => setOpenSearch(true)}/>
        <MainSearch openSearch={openSearch} setOpenSearch={setOpenSearch}/>
      </div>
    </>
  );
};

export default Home;
