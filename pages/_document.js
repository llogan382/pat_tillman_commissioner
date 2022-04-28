// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap"
          rel="stylesheet"
        />

        <meta
          property="og:title"
          content="Pat Tillman | For County Commissioner"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://pat-tillman-commissioner-n12tlvve4-luke-loganwebdev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpatTillmanLogo.083990b4.jpg&w=640&q=75"
        />
        <meta
          property="og:url"
          content="https://www.tillmanforcountycommissioner.com/"
        />

        <meta
          name="twitter:card"
          content="Pat Tillman | For County Commissioner"
        />
        <meta name="twitter:site" content="@PatTillman19" />
        <meta name="twitter:creator" content="@PatTillman19" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
