import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

//const category= useParams

import { useDispatch } from "react-redux/es/exports";
import { getAllProducts } from "../Redux/ProductsReducer/action";

const Allbrands = ({ category }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const brandsList = searchParams.getAll("brand");

  //console.log(brandsList);
  const [brand, setBrand] = useState([]);

  const [sortBy, setSortBy] = useState("");

  const dispatch = useDispatch();

  const handleCheckbox = (e) => {
    const option = e.target.value;
    const newBrand = [...brand];

    if (newBrand.includes(option)) {
      newBrand.splice(newBrand.indexOf(option), 1);
    } else {
      newBrand.push(option);
    }

    setBrand(newBrand);
  };

  const handleSort = (e) => {
    const option = e.target.value;

    setSortBy(option);
  };

  useEffect(() => {
    if (brand) {
      setSearchParams({ brand: brand });

      dispatch(getAllProducts(category, { params: { brand } }));
    }
  }, [brand, setBrand]);

  useEffect(() => {
    if (sortBy) {
      setSearchParams({ brand: searchParams.getAll("brand"), sortBy });

      dispatch(
        getAllProducts(category, {
          params: {
            brand: searchParams.getAll("brand"),
            _sort: "price",
            _order: sortBy,
          },
        })
      );
    }
  }, [sortBy, setSortBy, dispatch, searchParams]);
  return (
    <Box>
      <Box
        paddingTop="20px"
        dispalay="flex"
        flexDirection="column"
        marginBottom="20px"
        //gap="5px"
      >
        <Stack>
          <Button value="desc" onClick={handleSort}>
            High to low
          </Button>

          <Button value="asc" onClick={handleSort}>
            Low to High
          </Button>
        </Stack>

        {/* <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio colorScheme="red" value="desc" onClick={handleSort}>
              High To Low
            </Radio>
            <Radio colorScheme="green" value="asc" onClick={handleSort}>
              Low To High
            </Radio>
          </Stack>
        </RadioGroup> */}
      </Box>

      <CheckboxGroup padding="15px" marginTop="15px" color="grey">
        <Stack>
          <Checkbox
            color="grey"
            value="Maruti Suzuki"
            size="lg"
            defaultChecked={brand.includes("Maruti Suzuki")}
            onChange={handleCheckbox}
          >
            Maruti Suzuki
          </Checkbox>
          <Checkbox
            color="grey"
            value="Hyundai"
            size="lg"
            defaultChecked={brand.includes("Hyundai")}
            onChange={handleCheckbox}
          >
            Hyundai
          </Checkbox>
          <Checkbox
            color="grey"
            value="Tata"
            size="lg"
            defaultChecked={brand.includes("Tata")}
            onChange={handleCheckbox}
          >
            Tata
          </Checkbox>
          <Checkbox
            color="grey"
            value="Mahindra"
            size="lg"
            defaultChecked={brand.includes("Mahindra")}
            onChange={handleCheckbox}
          >
            Mahindra
          </Checkbox>

          <Checkbox
            color="grey"
            value="Honda"
            size="lg"
            defaultChecked={brand.includes("Honda")}
            onChange={handleCheckbox}
          >
            Honda
          </Checkbox>

          <Checkbox
            color="grey"
            value="Royal Enfield"
            size="lg"
            defaultChecked={brand.includes("Royal Enfield")}
            onChange={handleCheckbox}
          >
            Royal Enfield
          </Checkbox>

          <Checkbox
            color="grey"
            value="TVS"
            size="lg"
            defaultChecked={brand.includes("TVS")}
            onChange={handleCheckbox}
          >
            TVS
          </Checkbox>

          <Checkbox
            color="grey"
            value="Samsung"
            size="lg"
            defaultChecked={brand.includes("Samsung")}
            onChange={handleCheckbox}
          >
            Samsung
          </Checkbox>

          <Checkbox
            color="grey"
            value="Apple"
            size="lg"
            defaultChecked={brand.includes("Apple")}
            onChange={handleCheckbox}
          >
            Apple
          </Checkbox>

          {/*<Checkbox
            color="grey"
            value="smartphones"
            //defaultChecked={producttype.includes("smartphones")}
            onChange={handleCheckbox}
          >
            Smartphones
          </Checkbox>

          <Checkbox
            color="grey"
            value="laptops"
            // defaultChecked={producttype.includes("laptops")}
            onChange={handleCheckbox}
          >
            Laptops
          </Checkbox>

          <Checkbox
            color="grey"
            value="tablets"
            //defaultChecked={producttype.includes("tablets")}
            onChange={handleCheckbox}
          >
            Tablets
          </Checkbox>

          <Checkbox
            color="grey"
            value="smart devices"
            //defaultChecked={producttype.includes("smart devices")}
            onChange={handleCheckbox}
          >
            Smart Devices
          </Checkbox> */}
        </Stack>
      </CheckboxGroup>
    </Box>
  );
};

export default Allbrands;

//  <CheckboxGroup>
//    <Stack fontSize="15px">
//      <Checkbox size="lg">Maruti Suzuki</Checkbox>
//      <Checkbox size="lg">Hyundai</Checkbox>
//      <Checkbox size="lg">Mahindra</Checkbox>
//      <Checkbox size="lg">Kia</Checkbox>
//    </Stack>
//  </CheckboxGroup>;
