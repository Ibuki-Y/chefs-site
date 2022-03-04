import React, { VFC } from "react";
import NextLink from "next/link";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

export const Footer: VFC = () => {
  return (
    <>
      <Flex
        as="nav"
        bg="blue.700"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" fontSize="lg" display={{ base: "none", md: "flex" }} ml={8}>
          <Box mr={6} _hover={{ opacity: 0.7 }}>
            <Link as={NextLink} href="/">
              top
            </Link>
          </Box>
          <Box mr={6} _hover={{ opacity: 0.7 }}>
            <Link as={NextLink} href="/news">
              news
            </Link>
          </Box>
          <Box mr={6} _hover={{ opacity: 0.7 }}>
            <Link as={NextLink} href="/about">
              about
            </Link>
          </Box>
          <Box mr={6} _hover={{ opacity: 0.7 }}>
            <Link as={NextLink} href="/movie">
              movie
            </Link>
          </Box>
          <Box mr={6} _hover={{ opacity: 0.7 }}>
            <Link as={NextLink} href="/goods">
              goods
            </Link>
          </Box>
          <Box _hover={{ opacity: 0.7 }}>
            <Link as={NextLink} href="/contact">
              contact
            </Link>
          </Box>
        </Flex>

        <Text fontSize="sm">© 2022 chef&apos;s inc.</Text>
      </Flex>
    </>
  );
};
