import { VFC, ReactNode } from "react";
import { Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  children: ReactNode;
  hrefs: string;
};

export const MenuButton: VFC<Props> = (props) => {
  const { children, hrefs } = props;
  return (
    <Link as={NextLink} href={hrefs}>
      <Button w="100%" h="75px" mb={4} _focus={{ _focus: "none" }} color="blue.700">
        {children}
      </Button>
    </Link>
  );
};
