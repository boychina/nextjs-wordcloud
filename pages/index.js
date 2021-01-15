import React from "react";
import Head from "next/head";
import NextWordCloud from '../lib';

console.log("NextWordCloud", NextWordCloud);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Word Cloud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next Word Cloud</h1>
        <NextWordCloud/>
      </main>

      <footer>

      </footer>
    </div>
  );
}
