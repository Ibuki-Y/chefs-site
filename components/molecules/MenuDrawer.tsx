import { VFC } from "react";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex } from "@chakra-ui/react";

import { MenuButton } from "../atoms/button/MenuButton";
import { MenuIcons } from "./MenuIcons";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MenuDrawer: VFC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody as="nav" p={0} bg="gray.100">
            <Flex justify="center" align="center" direction="column">
              <MenuButton hrefs="/">Top</MenuButton>
              <MenuButton hrefs="/news">news</MenuButton>
              <MenuButton hrefs="/about">about</MenuButton>
              <MenuButton hrefs="/movie">movie</MenuButton>
              <MenuButton hrefs="/goods">goods</MenuButton>
              <MenuButton hrefs="/contact">contact</MenuButton>
            </Flex>
            <MenuIcons />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
