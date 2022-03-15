import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <script async src="https://platform.twitter.com/widgets.js" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
