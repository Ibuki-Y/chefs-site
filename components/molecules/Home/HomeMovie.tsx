import { VFC } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import YouTube from "react-youtube";
import { Box, Heading, Center } from "@chakra-ui/react";

import style from "../../../styles/HomeMovie.module.css";

const ScrollRevealContainer = dynamic(import("../../../hooks/useScrollFadeIn"), {
  ssr: false,
});

export const HomeMovie: VFC = () => {
  return (
    <>
      <Box mt="200px">
        <ScrollRevealContainer move="right">
          <Heading textAlign="center" color="blue.800">
            <Link href="/movie">
              <a>Movie</a>
            </Link>
          </Heading>

          <Center>
            <YouTube
              videoId="K9MKn07Z-pA"
              className={style.iframe}
              containerClassName={style.youtube}
            />
          </Center>
        </ScrollRevealContainer>
      </Box>
    </>
  );
};
