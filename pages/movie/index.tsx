import type { NextPage } from "next";
import YouTube from "react-youtube";
import Head from "next/head";
import { Text, Center } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { FadeInTitle } from "../../components/atoms/FadeInTitle";
import style from "../../styles/Youtube.module.css";
const ScrollRevealContainer = dynamic(import("../../hooks/useScrollFadeIn"), {
  ssr: false,
});

const Movie: NextPage = () => {
  return (
    <>
      <Head>
        <title>chef&apos;s オフィシャルサイト | movie</title>
      </Head>

      <main className="movie">
        <FadeInTitle title="Movie" />

        <ScrollRevealContainer>
          <Center mx={5}>
            <YouTube
              videoId="K9MKn07Z-pA"
              className={style.iframe}
              containerClassName={style.youtube}
            />
          </Center>
        </ScrollRevealContainer>

        <ScrollRevealContainer delay={200}>
          <Text
            p={{ md: 12 }}
            mt={{ base: "100px", md: 0 }}
            color="blue.800"
            textAlign="center"
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
