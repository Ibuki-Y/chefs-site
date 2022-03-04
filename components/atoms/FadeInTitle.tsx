import { VFC } from "react";
import { Heading } from "@chakra-ui/react";
import styled, { keyframes } from "styled-components";

type Props = {
  title: string;
};

export const FadeInTitle: VFC<Props> = (props) => {
  const { title } = props;
  return (
    <FadeIn>
      <Heading
        mt={{ base: 4, md: 10 }}
        mb={{ base: 2, md: 4 }}
        color="blue.800"
        textAlign="center"
      >
        {title}
      </Heading>
    </FadeIn>
  );
};

const Opacity = keyframes`
  from{
    opacity:0;
    transform: translateY(3em);
  }
  to{
    opacity:1;
    transform: translateY(0);
  }
`;
const FadeIn = styled.div`
  animation: ${Opacity} 1s ease-in-out;
`;
