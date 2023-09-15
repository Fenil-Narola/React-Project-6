import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem">
      <Stack spacing="6">
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack flexDirection={{ base: "column", md: "row" }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Name" />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input placeholder="Surname" />
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="name@gmail.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea resize="none" placeholder="Your Message" />
        </FormControl>

        <Checkbox>
          <Text fontSize="xs">
            I agree with
            <Box as="span" color="p.purple">
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>

        <Stack>
          <Button
            _hover={{
              bg: "p.purple",
              color: "white",
            }}
            bg="black.20"
            color="black.60"
            fontSize="sm"
          >
            Send a Message
          </Button>
          <Button
            _hover={{ bg: "p.purple", color: "white" }}
            bg="black.10"
            color="p.black"
            fontSize="sm"
          >
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
