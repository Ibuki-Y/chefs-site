import React, { memo, useCallback, VFC } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from "@mui/icons-material/Apple";
import ContactlessIcon from "@mui/icons-material/Contactless";
import { Box, Flex } from "@chakra-ui/react";

export const MenuIcons: VFC = () => {
  return (
    <Flex align="center" justify="space-around" color="blue.700">
      <Box
        as="a"
        href="https://twitter.com/chefs_band?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor/"
        _hover={{ opacity: 0.7 }}
      >
        <TwitterIcon />
      </Box>
      <Box
        as="a"
        href="https://www.instagram.com/chefs_band/?utm_medium=copy_link/"
        _hover={{ opacity: 0.7 }}
      >
        <InstagramIcon />
      </Box>
      <Box
        as="a"
        href="https://music.apple.com/jp/artist/chefs/1592627921/"
        _hover={{ opacity: 0.7 }}
      >
        <AppleIcon />
      </Box>
      <Box as="a" href="" _hover={{ opacity: 0.7 }}>
        <ContactlessIcon />
      </Box>
    </Flex>
  );
};
