import { TbMailFilled } from "react-icons/tb";
import { AiFillMessage } from "react-icons/ai";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="15px">
      <SupportCard
        icon={TbMailFilled}
        leftComponent={<ContactCard />}
        title="Contact Us"
        text="Have a question or just want to know more? Feel free to reach out to us."
      />
      <SupportCard
        icon={AiFillMessage}
        leftComponent={
          <InfoCard
            inverted={true}
            tagText="Chatbot"
            imgUrl="/grid_bg.svg"
            text="Chat with us now"
          />
        }
        title="Live Chat"
        text="Don’t have time to wait for the answer? Chat with us now."
      />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
