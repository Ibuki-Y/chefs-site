import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ChakraProvider } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "swiper/css/bundle";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import "../styles/global.css";
import theme from "../theme/theme";
import { Layout } from "../components/templates/Layout";
import { Seo } from "../components/templates/OGP/Seo";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="chef's(シェフズ)バンドのオフィシャルサイト. ニュース・ライブ動画など最新情報を掲載. 「おいしいおんがく」をテーマに, 東京都内を中心に活動する4ピースバンド."
        />
        <link rel="icon" href="/logo/logo06.JPG" />
      </Head>

      <Seo />

      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
