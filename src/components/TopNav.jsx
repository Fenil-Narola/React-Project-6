import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { LiaUserCircleSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="960px" mx="auto" h="64px" justify="space-between" px>
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={LiaUserCircleSolid} fontSize="30px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <Link to="/support">
              <MenuItem>Support</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
