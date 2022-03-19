import { VFC } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

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
        <Box mr={3} textAlign="center">
          <Text>Vo./Gt.</Text>
          <Text mt={1}>アヤナ</Text>
        </Box>
        <Box mr={3} textAlign="center">
          <Text>Gt.</Text>
          <Text mt={1}>フルギヤ</Text>
        </Box>
        <Box mr={3} textAlign="center">
          <Text>Ba.</Text>
          <Text mt={1}>高田真路</Text>
        </Box>
        <Box textAlign="center">
          <Text>Dr.</Text>
          <Text mt={1}>いぶし銀</Text>
        </Box>
      </Flex>
    </>
  );
};
