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
              <MenuButton hrefs="/" onClose={onClose}>
                Top
              </MenuButton>
              <MenuButton hrefs="/news" onClose={onClose}>
                news
              </MenuButton>
              <MenuButton hrefs="/about" onClose={onClose}>
                about
              </MenuButton>
              <MenuButton hrefs="/movie" onClose={onClose}>
                movie
              </MenuButton>
              <MenuButton hrefs="/goods" onClose={onClose}>
                goods
              </MenuButton>
              <MenuButton hrefs="/contact" onClose={onClose}>
                contact
              </MenuButton>
            </Flex>
            <MenuIcons />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
