import * as React from "react";
import Head from "next/head";
const description = "The thing one guy works on over his weekends";
const meta = [
  {
    name: `description`,
    content: description,
  },
  {
    property: `og:title`,
    content: "DankLand",
  },
  {
    property: `og:description`,
    content: description,
  },
  {
    property: `og:type`,
    content: `website`,
  },
  {
    name: `twitter:card`,
    content: `summary`,
  },
  {
    name: `twitter:creator`,
    content: "Daniel Krajnak",
  },
  {
    name: `twitter:title`,
    content: "DankLand",
  },
  {
    name: `twitter:description`,
    content: description,
  },
  { name: `theme-color`, content: "#eee" },
];

const SEOHead = () => (
  <Head>
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" href="/favicon-32x32.png" />
    <link
      rel="apple-touch-icon"
      sizes="192x192"
      href="android-chrome-192x192.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="512x512"
      href="android-chrome-512x512.png"
    />
    {meta.map((info, key) => (
      <meta {...info} key={key} />
    ))}
  </Head>
);

export default SEOHead;
