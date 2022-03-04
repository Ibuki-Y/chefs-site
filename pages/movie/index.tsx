import type { NextPage } from "next";
import YouTube from "react-youtube";
import Head from "next/head";
import { Text, Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { FadeInTitle } from "../../components/atoms/FadeInTitle";
import style from "../../styles/Youtube.module.css";
const ScrollRevealContainer = dynamic(import("../../hooks/useScrollReveal"), {
  ssr: false,
});

const Movie: NextPage = () => {
  return (
    <>
      <Head>
        <title>chef&apos;s movie</title>
      </Head>

      <main className="movie">
        <FadeInTitle title="Movie" />

        <ScrollRevealContainer>
          <Box mx={5}>
            <YouTube
              videoId="K9MKn07Z-pA"
              className={style.iframe}
              containerClassName={style.youtube}
            />
          </Box>
        </ScrollRevealContainer>

        <ScrollRevealContainer>
          <Text
            p={{ base: "100px", md: 12 }}
            color="blue.800"
            align="center"
            fontWeight="700"
            fontSize="2xl"
          >
            Coming Soon...
          </Text>
        </ScrollRevealContainer>
      </main>
    </>
  );
};

export default Movie;
