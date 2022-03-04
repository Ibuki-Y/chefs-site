import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import 'swiper/css/bundle'

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
