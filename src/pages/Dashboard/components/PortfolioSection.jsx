import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="16px"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={BsFillInfoCircleFill} />
          </HStack>
          <Text textStyle="h3" fontWeight="medium">
            ₹ 999,999.99
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h4" fontWeight="medium">
                22.39401000
              </Text>
              <Tag
                fontSize="xs"
                bg="blackAlpha.50"
                fontWeight="medium"
                borderRadius="3xl"
              >
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h4" fontWeight="medium">
                ₹ 1,300.00
              </Text>
              <Tag
                fontSize="xs"
                bg="blackAlpha.50"
                fontWeight="medium"
                borderRadius="3xl"
              >
                INR
              </Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={LuArrowDownToLine} />}>Deposit</Button>
        <Button leftIcon={<Icon as={LuArrowUpToLine} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
