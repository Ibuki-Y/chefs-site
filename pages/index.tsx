/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Image, Center, Spinner } from "@chakra-ui/react";

import { HomeSwiper } from "../components/molecules/Home/HomeSwiper";
//import { HomeMovie } from "../components/molecules/Home/HomeMovie";
import { HomeNews } from "../components/molecules/Home/HomeNews";
import { Twitter } from "../components/molecules/Home/Twitter";
import { useLoading } from "../hooks/useLoading";
const ScrollRevealContainer = dynamic(import("../hooks/useScrollFadeIn"), { ssr: false });

const Home: NextPage = () => {
  const { loading, setLoading } = useLoading();
  useEffect(()=>{
    return()=>{
      setLoading(false)
    }
  })

  return (
    <>
      <Head>
        <title>chef&apos;s オフィシャルサイト</title>
      </Head>

      {loading ? (
        <Center h="100vh">
          <Spinner color="blue.600" />
        </Center>
      ) : (
        <main className="home">
          <ScrollRevealContainer>
            <Center display={{ base: "center", md: "none" }} mt={4}>
              <Image src="/logo/chef's02.png" alt="logo" h={120} />
            </Center>
          </ScrollRevealContainer>

          <HomeSwiper />

          <Center my={{ base: 10, md: 8 }}>
            <ScrollRevealContainer delay={600}>
              <Image
                src="/logo/おいしいおんがく01.png"
                alt="logo"
                w={{ base: "250px", md: "400px" }}
              />
            </ScrollRevealContainer>
          </Center>

          {/* <HomeMovie /> */}

          <HomeNews />

          <Twitter />
        </main>
      )}
    </>
  );
};

export default Home;
