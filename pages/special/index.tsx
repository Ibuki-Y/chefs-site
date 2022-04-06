import React, { useState } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useMessage } from "../../hooks/useMessage";
import { FadeInTitle } from "../../components/atoms/FadeInTitle";
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";
const ScrollRevealContainer = dynamic(import("../../hooks/useScrollFadeIn"), {
  ssr: false,
});

const Special: NextPage = () => {
  const { showMessage } = useMessage();

  const password = "おいしいおんがく";
  const [keyword, setKeyword] = useState<string>("");
  const isErrorKeyword = keyword === "";

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onClickCheckPassword = () => {
    if (password === keyword) {
      showMessage({ title: "Thank You!!", status: "success" });
    } else if (keyword === "") {
      showMessage({ title: "あいことばが入力されていません!", status: "warning" });
    } else {
      showMessage({ title: "あいことばが違います!", status: "error" });
    }
  };

  return (
    <>
      <Head>
        <title>chef&apos;s オフィシャルサイト | special</title>
      </Head>

      <main className="special">
        <FadeInTitle title="Special" />

        <Flex direction="column" align="center">
          <ScrollRevealContainer>
            <FormControl isInvalid={isErrorKeyword} isRequired>
              <FormLabel htmlFor="name">あいことば</FormLabel>
              <Input
                id="name"
                type="text"
                value={keyword}
                onChange={onChangeKeyword}
                variant="flushed"
                errorBorderColor="gray"
                size="lg"
              />
              <FormErrorMessage>{isErrorKeyword && "未入力です"}</FormErrorMessage>
            </FormControl>

            <PrimaryButton onClick={onClickCheckPassword}>送信</PrimaryButton>
          </ScrollRevealContainer>

          <ScrollRevealContainer>
            <Text></Text>
          </ScrollRevealContainer>
        </Flex>
      </main>
    </>
  );
};

export default Special;
