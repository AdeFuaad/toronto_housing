import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex, Text } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      marginRight="1"
      marginTop="5"
      marginBottom="10"
      fontSize="20"
    >
      <Text>Scroll down to see details</Text>
    </Flex>
  );
};

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Flex justifyContent="center" alignItems="center" marginLeft="1">
//       <Icon
//         as={FaArrowAltCircleRight}
//         onClick={() => scrollNext()}
//         fontSize="2xl"
//         cursor="pointer"
//         d={["none", "none", "none", "block"]}
//       />
//     </Flex>
//   );
// };

export default function ImageScrollbar({ data }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      // RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <Box
          key={item.id}
          width="910px"
          itemID={item.id}
          overflow="hidden"
          p="1"
        >
          <Image
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            alt="property image"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}
