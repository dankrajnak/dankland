import * as React from "react";
import { Helmet } from "react-helmet";

const siteTitle = "Dank Land";
const metaDescription = "Where this one guy puts stuff he codes";
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
  meta?: [];
  keywords?: string[];
  title: string;
}

// Even though nextJS has its own head component.  It has some drawbacks.
// Namely, you can't specify a language attribute on the html element
// and it seems like there may be problems with the upcoming concurrent mode.
// I'm going to keep this in react-helmet for now.

const SEO = ({
  description = metaDescription,
  lang = "en",
  meta = [],
  keywords = defaultKeywords,
  title,
}: Props) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    titleTemplate={`%s | ${siteTitle}`}
    meta={[
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: title,
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
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
      { name: `theme-color`, content: "#eee" },
    ]
      .concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )
      .concat(meta)}
  >
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
  </Helmet>
);

export default SEO;
