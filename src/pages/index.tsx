import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../utils/trpc";

import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Social Edge</title>
        <meta name="description" content="Social Edge Data App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen">
        <Navbar />
      </div>
    </>
  );
};

export default Home;
