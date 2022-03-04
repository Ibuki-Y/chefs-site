import { VFC } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Heading, Box } from "@chakra-ui/react";

import { NewsCard } from "../../organisms/news/NewsCard";
const ScrollRevealContainer = dynamic(import("../../../hooks/useScrollFadeIn"), {
  ssr: false,
});

export const HomeNews: VFC = () => {
  return (
    <>
      <Box mt="100px" display={{ base: "block", md: "none" }}>
        <ScrollRevealContainer move="left">
          <Heading textAlign="center" color="blue.800">
            <Link href="/news">
              <a>News</a>
            </Link>
          </Heading>

          <NewsCard
            id={1}
            image="/live/live01.jpg"
            title="chef'sホームページ開設!!"
            date="2022/3/1"
            contents={`この度, chef'sのホームページを開設いたしました!!\n今後ともchef'sをよろしくお願い致します!`}
            move="left"
          />
        </ScrollRevealContainer>
      </Box>
    </>
  );
};
