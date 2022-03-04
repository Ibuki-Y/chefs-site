import dynamic from "next/dynamic";
import { Flex, Text, Image } from "@chakra-ui/react";

const ScrollRevealContainer = dynamic(import("../hooks/useScrollFadeIn"), { ssr: false });

export default function Page404() {
  return (
    <>
      <Flex justify="center" align="center" direction="column" height="90vh">
        <ScrollRevealContainer>
          <Text fontSize={{ base: "lg", md: "xl" }} mb={16}>
            Page 404 | This is not the page you&apos;re looking for.
          </Text>
        </ScrollRevealContainer>

        <ScrollRevealContainer delay={300}>
          <Image src="/logo/logo05.png" width={500} height={500} alt="page 404" />
        </ScrollRevealContainer>
      </Flex>
    </>
  );
}
