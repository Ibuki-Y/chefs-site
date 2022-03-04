import type { NextPage } from "next";
import Head from "next/head";
import { Image, Flex, Text, Link, Heading } from "@chakra-ui/react";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import styled, { keyframes } from "styled-components";

import { FadeInTitle } from "../../components/atoms/FadeInTitle";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>chef&apos;s about</title>
      </Head>

      <main className="about">
        <FadeInTitle title="About" />
        <FadeIn>
          <Flex
            justify="center"
            align={{ base: "center", md: "flex-start" }}
            direction={{ base: "column", md: "row" }}
            p={{ base: 4, md: 12 }}
          >
            <Image
              src="/artist/artist01.JPG"
              height={{ base: "100%", md: "65%" }}
              width={{ base: "100%", md: "65%" }}
              alt="promotion photo"
              borderRadius={3}
              mr={{ base: 0, md: 6 }}
              shadow="xl"
            />

            <FadeIn2>
              <Flex
                align={{ base: "center", md: "flex-start" }}
                direction="column"
                mt={{ base: 4, md: 0 }}
              >
                <Heading fontSize="4xl" mb={{ base: 4, md: 5 }} fontWeight={700}>
                  <Text>chef&apos;s</Text>
                </Heading>

                <Flex direction={{ base: "row", md: "column" }} mb={6} fontWeight={600}>
                  <Text mr={{ base: 3, md: 0 }} mb={{ base: 0, md: 2 }}>
                    Vo./Gt. アヤナ
                  </Text>
                  <Text mr={{ base: 3, md: 0 }} mb={{ base: 0, md: 2 }}>
                    Gt. フルギヤ
                  </Text>
                  <Text mr={{ base: 3, md: 0 }} mb={{ base: 0, md: 2 }}>
                    Ba. 高田真路
                  </Text>
                  <Text>Dr. いぶし銀</Text>
                </Flex>

                <Text mb={1}>
                  2020年10月結成. &quot;おいしいおんがく&quot; をテーマに,
                  東京都内を中心に活動する4ピースバンド.
                </Text>
                <Text mb={20}>
                  ライブなどのお誘いは, コンタクトページ, DM,
                  eメールにて受け付けております.
                </Text>

                <FadeIn3>
                  <Flex direction={{ base: "row", md: "column" }}>
                    <Flex
                      align="center"
                      mr={{ base: 6, md: 0 }}
                      display={{ base: "none", md: "flex" }}
                    >
                      <StopRoundedIcon fontSize="small" />
                      <Text>Gmail: cheafsband@gmail.com</Text>
                    </Flex>
                    <Flex align="center" mr={{ base: 6, md: 0 }}>
                      <StopRoundedIcon fontSize="small" />
                      <Link
                        href="https://twitter.com/chefs_band?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor/"
                        _focus={{ _focus: "none" }}
                      >
                        Twitter
                      </Link>
                    </Flex>
                    <Flex align="center" mr={{ base: 6, md: 0 }}>
                      <StopRoundedIcon fontSize="small" />
                      <Link
                        href="https://www.instagram.com/chefs_band/?utm_medium=copy_link/"
                        _focus={{ _focus: "none" }}
                      >
                        Instagram
                      </Link>
                    </Flex>
                    <Flex align="center">
                      <StopRoundedIcon fontSize="small" />
                      <Link
                        href="https://eggs.mu/artist/cheafs_band/"
                        _focus={{ _focus: "none" }}
                      >
                        Eggs
                      </Link>
                    </Flex>
                  </Flex>
                  <Flex
                    align="center"
                    mr={{ base: 5, md: 0 }}
                    mt={2}
                    display={{ base: "flex", md: "none" }}
                  >
                    <StopRoundedIcon fontSize="small" />
                    <Text>Gmail: cheafsband@gmail.com</Text>
                  </Flex>
                </FadeIn3>
              </Flex>
            </FadeIn2>
          </Flex>
        </FadeIn>
      </main>
    </>
  );
};

export default About;

const Opacity = keyframes`
  from{
    opacity:0;
    transform: translateY(3em);
  }
  to{
    opacity:1;
    transform: translateY(0);
  }
`;
const FadeIn = styled.div`
  animation: ${Opacity} 2s ease-in-out;
`;
const FadeIn2 = styled.div`
  animation: ${Opacity} 3s ease-in-out;
`;
const FadeIn3 = styled.div`
  animation: ${Opacity} 4s ease-in-out;
`;
