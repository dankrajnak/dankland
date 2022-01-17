import Head from "next/head";

const siteTitle = "Dank Land";
const defaultDescription = "The thing one guy works on over his weekends";
const defaultKeywords = [
  "art",
  "dank",
  "land",
  "design",
  "portfolio",
  "Daniel",
  "Krajnak",
];

interface Props {
  description?: string;
  lang?: string;
  meta?: { name: string; content: string; property?: undefined }[];
  keywords?: string[];
  title: string;
}

const SEO = ({
  description = defaultDescription,
  meta = [],
  keywords = defaultKeywords,
  title,
}: Props) => {
  const defaultMeta = [
    {
      name: `description`,
      content: description,
    },
    { name: "theme-color", content: "#272731" },
    { name: "apple-mobile-web-app-status-bar-style", content: "#272731" },
    {
      property: `og:title`,
      content: siteTitle,
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
    { name: `og:image`, content: "/android-chrome-512x512.png" },
    { name: "keywords", content: keywords.join(", ") },
  ];
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon-32x32.png" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/android-chrome-512x512.png"
      />
      <title>
        {title} | {siteTitle}
      </title>
      <meta name="description" content="Something" />
      {[...meta, ...defaultMeta].map((info, key) => (
        <meta name={info.name} content={info.content} key={key} />
      ))}
    </Head>
  );
};

export default SEO;
