import { Badge, Box, Img, Text, Button } from "@chakra-ui/react";
import React from "react";

const Singleproduct = (item) => {
  // console.log(item);
  return (
    <Box
      margin="auto"
      w="90%"
      overflow="hidden"
      boxShadow=" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      borderRadius="3px"
    >
      <Img boxSize="250px" src={item.img[0]} margin="auto" paddingTop="9px" />

      <Box textAlign="left" padding="7px">
        <Text fontSize="lg" fontWeight="semibold">
          ₹ {item.price}
        </Text>

        <Text fontSize="sm" color="gray.500" paddingTop="4px">
          {item.year}-{item.distance}
        </Text>
        <Text fontSize="lg" fontWeight="semibold">
          {item.brand} {item.model}
        </Text>

        <Box
          w="100%"
          bgColor="lightgrey"
          justifyContent="space-evenly"
          display="flex"
          marginTop="5px"
        >
          <Text fontSize="xs">WARRANTY </Text>
          <Text fontSize="xs">DOCUMENT TRANSFER</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Singleproduct;
