import { VFC } from "react";
import dynamic from "next/dynamic";
import { Box, Center, Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ScrollRevealContainer = dynamic(import("../../../hooks/useScrollReveal"), {
  ssr: false,
});

type Props = {
  id: number;
  image?: string;
  title: string;
  subTitle?: string;
  date: string;
  contents: string;
  move?: string;
};

export const NewsCard: VFC<Props> = (props) => {
  const { id, image, title, subTitle, date, contents, move = "bottom" } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ScrollRevealContainer move={move}>
        <Center mx={4}>
          <Box
            key={id}
            bg="white"
            borderRadius={2}
            shadow="md"
            _hover={{ cursor: "pointer", opacity: 0.8 }}
            onClick={onOpen}
            mb="100px"
            maxWidth="900px"
          >
            <Stack textAlign="center" spacing="20px">
              {image ? <Image src={image} alt={title} m="auto" borderRadius={2} /> : null}

              <Text fontSize="xl" fontWeight="700" color="blue.800">
                {title}
              </Text>
              <Text fontSize="md" color="gray.600">
                {subTitle}
              </Text>
              <Text fontSize="sm" color="gray">
                {date}
              </Text>
            </Stack>
          </Box>
        </Center>
      </ScrollRevealContainer>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent alignItems="center" p={4} bg="gray.100">
          <ModalHeader fontSize={{ base: "lg", md: "2xl" }} color="blue.800" m={2}>
            {title}
          </ModalHeader>
          <ModalCloseButton _focus={{ _focus: "none" }} />
          <ModalBody>
            {image ? <Image src={image} alt={title} m="auto" borderRadius={2} /> : null}
            <Text
              py={8}
              fontSize={{ base: "md", md: "lg" }}
              color="gray.800"
              whiteSpace="pre-line"
              lineHeight={1.3}
            >
              {contents}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
