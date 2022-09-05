import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <Script
            src={"https://code.jquery.com/jquery-3.6.1.min.js"}
            nonce={"does_not_work"}
            strategy="beforeInteractive"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
