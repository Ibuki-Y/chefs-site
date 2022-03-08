import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ChakraProvider } from "@chakra-ui/react";
import "swiper/css/bundle";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import "../styles/global.css";
import theme from "../theme/theme";
import { Layout } from "../components/templates/Layout";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="chef's バンド オフィシャルサイト" />
        <link rel="icon" href="/logo/logo06.JPG" />
      </Head>

      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
