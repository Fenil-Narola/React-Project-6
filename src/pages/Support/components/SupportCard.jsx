import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { TbMailFilled } from "react-icons/tb";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex gap="6" flexDirection={{ base: "column", xl: "row" }}>
      <Stack maxW="24rem">
        <Icon as={icon} boxSize="6" color="p.purple" />
        <Text textStyle="h1" as="h1" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="sm" color="black.80">
          {text}
        </Text>
      </Stack>

      <Box maxW="550px" w="full">{leftComponent}</Box>
    </Flex>
  );
};

export default SupportCard;
