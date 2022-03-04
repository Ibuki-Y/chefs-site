import { VFC } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { Timeline } from "react-twitter-widgets";

const ScrollRevealContainer = dynamic(import("../../../hooks/useScrollFadeIn"), {
  ssr: false,
});

export const Twitter: VFC = () => {
  return (
    <Box mt={{ md: "100px" }}>
      <ScrollRevealContainer>
        <Box m={{ base: 14, md: 10 }} p={8} display={{ base: "none", md: "flex" }}>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "chefs_band",
            }}
            options={{
              height: "800",
              width: "700",
              chrome: "nofooternoheader",
            }}
          />
        </Box>

        <Box m={12} display={{ base: "flex", md: "none" }}>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "chefs_band",
            }}
            options={{
              height: "500",
              width: "500",
              chrome: "nofooternoheader",
            }}
          />
        </Box>
      </ScrollRevealContainer>
    </Box>
  );
};
