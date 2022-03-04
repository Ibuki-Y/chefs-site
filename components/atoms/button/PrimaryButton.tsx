import React, { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  isFullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const {
    children,
    isFullWidth = false,
    disabled = false,
    isLoading = false,
    type = "button",
    onClick,
  } = props;

  return (
    <Button
      bg="blue.700"
      color="white"
      shadow="lg"
      _focus={{ _focus: "none" }}
      isFullWidth={isFullWidth}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      px={8}
      type={type}
    >
      {children}
    </Button>
  );
};
