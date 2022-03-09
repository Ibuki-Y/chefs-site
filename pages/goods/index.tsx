import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Image, Stack } from "@chakra-ui/react";

import { FadeInTitle } from "../../components/atoms/FadeInTitle";
const ScrollRevealContainer = dynamic(import("../../hooks/useScrollFadeIn"), {
  ssr: false,
});

const Goods: NextPage = () => {
  return (
    <>
      <Head>
        <title>chef&apos;s goods</title>
      </Head>

      <main className="goods">
        <FadeInTitle title="Goods" />

        <Stack p={{ base: 4, md: 10 }} spacing="30px">
          <ScrollRevealContainer>
            <Image src="/goods/goods03.JPG" alt="goods" shadow="dark-lg" rounded="md" />
          </ScrollRevealContainer>

          <ScrollRevealContainer delay={300}>
            <Image src="/goods/goods04.JPG" alt="goods" shadow="dark-lg" rounded="md" />
          </ScrollRevealContainer>

          <ScrollRevealContainer delay={400}>
            <Image src="/goods/goods06.JPG" alt="goods" shadow="dark-lg" rounded="md" />
          </ScrollRevealContainer>
        </Stack>
      </main>
    </>
  );
};

export default Goods;
