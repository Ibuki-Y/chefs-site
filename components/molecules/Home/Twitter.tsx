import { VFC } from "react";
import dynamic from "next/dynamic";
import { Box, Center } from "@chakra-ui/react";
import { Timeline } from "react-twitter-widgets";

const ScrollRevealContainer = dynamic(import("../../../hooks/useScrollFadeIn"), {
  ssr: false,
});

export const Twitter: VFC = () => {
  return (
    <Center m={10} mt="80px">
      <ScrollRevealContainer>
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "chefs_band",
          }}
          options={{
            height: "85vh",
            width: "700px",
            chrome: "nofooternoheader",
          }}
        />
      </ScrollRevealContainer>
    </Center>
  );
};
