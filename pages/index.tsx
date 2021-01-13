import React from "react";
import Head from "next/head";
import NextWordCloud from '../src';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Word Cloud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next Word Cloud</h1>
        <NextWordCloud words={[{ name: 'hello', value: 10 }]}/>
      </main>

      <footer>

      </footer>
    </div>
  );
}
