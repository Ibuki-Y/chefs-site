import React, { VFC } from "react";
import NextLink from "next/link";
import { Box, Flex, Link, useDisclosure } from "@chakra-ui/react";

import { MenuIcon } from "../../atoms/button/MenuIcon";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { HeaderIcons } from "../../molecules/HeaderIcons";

export const Header: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="nav"
        bg="blue.700"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 4, md: 6 }}
      >
        <Flex align="center" mr={16} _hover={{ cursor: "pointer" }}>
          <Box
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight={700}
            _hover={{ opacity: 0.7 }}
          >
            <NextLink href="/">Chef&apos;s</NextLink>
          </Box>
        </Flex>
        <Flex
          align="center"
          fontSize="2xl"
          display={{ base: "none", md: "flex" }}
          flexGrow={2}
          fontWeight={600}
        >
          <Box mr={8} _hover={{ opacity: 0.7 }}>
            <Link as={NextLink} href="/news">
              news
            </Link>
          </Box>
          <Box mr={8} _hover={{ opacity: 0.7 }}>
            <Link as={NextLink} href="/about">
              about
            </Link>
          </Box>
          <Box mr={8} _hover={{ opacity: 0.7 }}>
            <Link as={NextLink} href="/movie">
              movie
            </Link>
          </Box>
          <Box mr={8} _hover={{ opacity: 0.7 }}>
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

        <HeaderIcons />
        <MenuIcon onOpen={onOpen} />
      </Flex>

      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
