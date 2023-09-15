import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={inverted ? "p.purple" : "white"}
    >
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purle" : "white"}
        borderRadius="16px"
      >
        {tagText}
      </Tag>
      <Text
        mt="4"
        fontWeight="medium"
        textStyle="h5"
        color={inverted ? "white" : "p.black"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
