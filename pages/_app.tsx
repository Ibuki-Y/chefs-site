import * as React from "react";
import { AppProps } from "next/app";
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
