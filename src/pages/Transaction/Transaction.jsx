import {
  Button,
  Card,
  Flex,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { TbDownload } from "react-icons/tb";
import TransactionTable from "./components/TransactionTable";
import { BiSearch } from "react-icons/bi";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];

  return (
    <DashboardLayout title="Transaction">
      <Flex justify="end" mb="3">
        <Button leftIcon={<Icon fontSize="16px" as={TbDownload} />}>
          Export CSV
        </Button>
      </Flex>

      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="2" pl="4" display="flex" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  display="flex"
                  px="6"
                  pb="4"
                  gap="2"
                  fontSize="xs"
                >
                  {tab.name}
                  <Tag
                    colorScheme="gray"
                    borderRadius="full"
                    px="6px"
                    py="4px"
                    color="black.60"
                    fontSize="xs"
                  >
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="235px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BiSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID or destination" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
