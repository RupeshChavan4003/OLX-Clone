import React from "react";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";

const Allbrands = () => {
  return (
    <CheckboxGroup>
      <Stack fontSize="15px">
        <Checkbox size="lg">Maruti Suzuki</Checkbox>
        <Checkbox size="lg">Hyundai</Checkbox>
        <Checkbox size="lg">Mahindra</Checkbox>
        <Checkbox size="lg">Kia</Checkbox>
      </Stack>
    </CheckboxGroup>
  );
};

export default Allbrands;
