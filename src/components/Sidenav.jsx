import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import {Link} from 'react-router-dom'

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbArrowsDoubleSwNe,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack
    bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "md",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      height="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">
          @FenilNarola
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link key={nav.text} to={nav.link}>
            <HStack
              py="3"
              px="4"
              mb="1"
              borderRadius="10px"
              cursor="pointer"
              _hover={{ bg: "#F3F3F7", color: "#171717" }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mb="5" mx="3">
        <Link to="/support">
        <HStack
          py="3"
          px="4"
          mb="1"
          borderRadius="10px"
          cursor="pointer"
          _hover={{ bg: "#F3F3F7", color: "#171717" }}
          color="#797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
