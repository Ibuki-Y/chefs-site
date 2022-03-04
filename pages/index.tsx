import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Image, Box, Center } from "@chakra-ui/react";

import { HomeSwiper } from "../components/molecules/Home/HomeSwiper";
import { HomeMovie } from "../components/molecules/Home/HomeMovie";
import { HomeNews } from "../components/molecules/Home/HomeNews";
import { Twitter } from "../components/molecules/Home/Twitter";

const ScrollRevealContainer = dynamic(import("../hooks/useScrollFadeIn"), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>chef&apos;s official</title>
      </Head>

      <main className="home">
        <ScrollRevealContainer>
          <Center display={{ base: "center", md: "none" }} mt={4}>
            <Image src="/logo/chef's02.png" alt="logo" h={120} />
          </Center>
        </ScrollRevealContainer>

        <HomeSwiper />

        <Center my={{base:12,md:4}}>
          <ScrollRevealContainer delay={600}>
            <Image
              src="/logo/おいしいおんがく01.png"
              alt="logo"
              w={{ base: "250px", md: "400px" }}
            />
          </ScrollRevealContainer>
        </Center>

        <HomeMovie />

        <HomeNews />

        <Center>
          <Twitter />
        </Center>
      </main>
    </>
  );
};

export default Home;

/*
<ScrollRevealContainer delay={300}>
<Box mx={10}>
<Image src="/logo/logo01_black.png" alt="logo" h="300px" />
</Box>
</ScrollRevealContainer>
*/