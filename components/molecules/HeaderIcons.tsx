import React, { VFC } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from "@mui/icons-material/Apple";
import ContactlessIcon from "@mui/icons-material/Contactless";
import { Box, Flex } from "@chakra-ui/react";

export const HeaderIcons: VFC = () => {
  return (
    <Flex display={{ base: "none", lg: "flex" }}>
      <Box
        as="a"
        href="https://twitter.com/chefs_band?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor/"
        ml={4}
        _hover={{ opacity: 0.7 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </Box>
      <Box
        as="a"
        href="https://www.instagram.com/chefs_band/?utm_medium=copy_link/"
        ml={4}
        _hover={{ opacity: 0.7 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </Box>
      <Box
        as="a"
        href="https://music.apple.com/jp/artist/chefs/1592627921/"
        ml={4}
        _hover={{ opacity: 0.7 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppleIcon />
      </Box>
      <Box
        as="a"
        href="https://open.spotify.com/artist/7I6vgeUew4Ew1pxztnFhMa/"
        ml={4}
        _hover={{ opacity: 0.7 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ContactlessIcon />
      </Box>
    </Flex>
  );
};
