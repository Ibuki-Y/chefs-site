import { VFC } from "react";
import { Flex, Text } from "@chakra-ui/react";

export const AboutName: VFC = () => {
  return (
    <>
      <Flex
        direction={{ base: "row", md: "column" }}
        mb={6}
        fontWeight={600}
        display={{ base: "none", md: "flex" }}
      >
        <Text mb={2}>Vo./Gt. アヤナ</Text>
        <Text mb={2}>Gt. フルギヤ</Text>
        <Text mb={2}>Ba. 高田真路</Text>
        <Text>Dr. いぶし銀</Text>
      </Flex>

      <Flex
        direction={{ base: "row", md: "column" }}
        mb={6}
        fontWeight={600}
        display={{ base: "flex", md: "none" }}
      >
        <Text mr={3} textAlign="center">
          Vo./Gt.
          <Text mt={1}>アヤナ</Text>
        </Text>
        <Text mr={3} textAlign="center">
          Gt.
          <Text mt={1}>フルギヤ</Text>
        </Text>
        <Text mr={3} textAlign="center">
          Ba.
          <Text mt={1}>高田真路</Text>
        </Text>
        <Text textAlign="center">
          Dr.
          <Text mt={1}>いぶし銀</Text>
        </Text>
      </Flex>
    </>
  );
};
