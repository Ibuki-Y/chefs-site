import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { init, send } from "@emailjs/browser";
import { Flex, Input, Textarea, Text, Box } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import styled, { keyframes } from "styled-components";

import { FadeInTitle } from "../../components/atoms/FadeInTitle";
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";
import { useMessage } from "../../hooks/useMessage";

const Contact: NextPage = () => {
  const { showMessage } = useMessage();

  const [name, setName] = useState<string>("");
  const isErrorName = name === "";
  const [mail, setMail] = useState<string>("");
  const isErrorMail = mail === "";
  const [tel, setTel] = useState<string | number>("");
  const [message, setMessage] = useState<string>("");
  const isErrorMessage = message === "";

  const sendEmail = () => {
    const user_id = "K8U02_2BltqZwwIjs";
    const service_id = "service_vrqb19e";
    const template_id = "template_akvbijq";
    if (user_id != undefined && service_id != undefined && template_id != undefined) {
      init(user_id);

      const template_param = {
        to_name: name,
        email: mail,
        tel: tel,
        message: message,
      };

      send(service_id, template_id, template_param)
        .then(() => {
          showMessage({ title: "送信しました.", status: "success" });
          setName("");
          setMail("");
          setTel("");
          setMessage("");
        })
        .catch(() => {
          showMessage({ title: "送信に失敗しました.", status: "error" });
        });
    }
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const onChangeTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value);
  };
  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (name != "" && mail != "" && message != "") {
      e.preventDefault();
      sendEmail();
    } else {
      showMessage({ title: "空欄があります.", status: "error" });
    }
  };

  return (
    <>
      <Head>
        <title>chef&apos;s オフィシャルサイト | contact</title>
      </Head>

      <main className="contact">
        <FadeInTitle title="Contact" />

        <Flex direction="column" align="center" p={{ base: 4, md: 10 }}>
          <FadeIn style={{ width: "80%" }}>
            <form onSubmit={onSubmit}>
              <Flex direction="column" align="center">
                <FormControl isInvalid={isErrorName} isRequired mb={{ base: 10, md: 12 }}>
                  <FormLabel htmlFor="name">お名前</FormLabel>
                  <Input
                    id="name"
                    type="name"
                    value={name}
                    onChange={onChangeName}
                    variant="flushed"
                    errorBorderColor="gray"
                    size="lg"
                  />
                  <FormErrorMessage>{isErrorName && "未入力です"}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={isErrorMail} isRequired mb={{ base: 10, md: 12 }}>
                  <FormLabel htmlFor="email">メールアドレス</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    value={mail}
                    onChange={onChangeMail}
                    variant="flushed"
                    errorBorderColor="gray"
                    size="lg"
                  />
                  <FormErrorMessage>{isErrorMail && "未入力です"}</FormErrorMessage>
                </FormControl>

                <FormControl mb={{ base: 10, md: 12 }}>
                  <FormLabel htmlFor="name">電話番号</FormLabel>
                  <Input
                    id="tel"
                    type="tel"
                    value={tel}
                    onChange={onChangeTel}
                    variant="flushed"
                    errorBorderColor="gray"
                    size="lg"
                  />
                </FormControl>

                <FormControl
                  isInvalid={isErrorMessage}
                  isRequired
                  mb={{ base: 10, md: 12 }}
                >
                  <FormLabel htmlFor="message">お問い合わせ内容</FormLabel>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={onChangeMessage}
                    errorBorderColor="gray"
                    minHeight="300px"
                  />
                  <FormErrorMessage>{isErrorMessage && "未入力です"}</FormErrorMessage>
                </FormControl>

                <Box color="gray.600" border="solid 1px" p={4} mb={8}>
                  <Text align="center" mb={3}>
                    個人情報の取り扱いについて
                  </Text>
                  <Text borderTop="solid 1px" p={3} pb={0}>
                    お送りいただく個人情報につきまして、chef&apos;sの情報をお送りする目的以外で使用することは一切ございません。
                  </Text>
                  <Text px={3} pt={1}>
                    情報の提供と開示につきましては、法令に基づいて司法、行政、又はこれに類する機関から情報開示の要請を受けた場合を除き、お客様の同意無く個人情報を第三者に提供、又は開示する事はありません。
                  </Text>
                </Box>

                <PrimaryButton type="submit">送信</PrimaryButton>
              </Flex>
            </form>
          </FadeIn>
        </Flex>
      </main>
    </>
  );
};

export default Contact;

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
