import React from "react";
import Head from "next/head";
import Link from 'next/link';
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
        <NextWordCloud />
      </main>

      <footer>

      </footer>
    </div>
  );
}
