import {
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";

import { Link, useParams } from "react-router-dom";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Allbrands from "../Components/Allbrands";
import SearchBrand from "../Components/SearchBrand";
import Singleproduct from "../Components/Singleproduct";
import { getAllProducts } from "../Redux/ProductsReducer/action";

// import { useSearchParams } from "react-router-dom";

const Productspage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  let data = useSelector((state) => state.ProductsReducer.data);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const { brand } = searchParams;
  // console.log(brand);

  //const { brand } = searchParams;

  //console.log(data);
  useEffect(() => {
    dispatch(getAllProducts(category));
  }, [category, dispatch]);
  return (
    //products page layout completed
    <>
      <Box>
        <Flex justifyContent="center" marginTop="150px">
          <Box
            width="25%"
            height="250vh"
            justifyContent="center"
            // border="1px solid black"
          >
            <Box
              height="18vh"
              width="85%"
              borderBottom="1px solid grey"
              borderRadius="3px"
              justifyContent="center"
              margin="auto"
              marginTop="50px"
              padding="5px"
              // border="1px solid black"
            >
              <Box textAlign="left">
                <Text fontSize="xl" fontWeight="600">
                  CATEGORIES
                </Text>
              </Box>
              <Box width="90%" justifyContent="center" margin="auto">
                <Text
                  fontFamily="Muli,sans-serif"
                  fontSize="17px"
                  fontWeight="550"
                >
                  -- All Categories
                </Text>
              </Box>
            </Box>

            <Box
              height="18vh"
              width="85%"
              borderBottom="1px solid grey"
              borderRadius="3px"
              justifyContent="center"
              margin="auto"
              marginTop="50px"
              padding="5px"
              textAlign="left"
              // border="1px solid black"
              // border="1px solid black"
            >
              <Text fontSize="xl" fontWeight="600">
                LOCATIONS
              </Text>
              <Text fontWeight="500" bg="#c8f8f6 ">
                Delhi
              </Text>
            </Box>

            {/* <Box textAlign="left">
            <Text fontSize="2xl" color="grey" paddingLeft="15px">
              Filters
            </Text>
          </Box> */}

            <Box
              width="90%"
              justifyContent="center"
              margin="auto"
              marginTop="10px"
            >
              <SearchBrand />
            </Box>

            <Box
              justifyContent="center"
              margin="auto"
              marginTop="40px"
              // border="1px solid grey"
              borderRadius="3px"
              height="70vh"
              width="85%"
              padding="5px"
            >
              <Text
                fontFamily="Muli,sans-serif"
                fontSize="xl"
                fontWeight="semibold"
              >
                All Brands
              </Text>

              <Box>
                <Allbrands category={category} />
              </Box>
              <Box marginTop="35px"></Box>
            </Box>

            <Box
              height="15vh"
              width="85%"
              border="1px solid grey"
              borderRadius="3px"
              justifyContent="center"
              margin="auto"
              marginTop="50px"
              padding="5px"
            >
              <Box width="90%" justifyContent="center" margin="auto">
                <Text fontFamily="Muli,sans-serif" fontSize="13px">
                  AVAILABILITY
                </Text>
                <Flex justifyContent="space-evenly">
                  <Checkbox marginTop="12px" />
                  <Text marginTop="12px" color="grey">
                    Out of Stock
                  </Text>
                </Flex>
              </Box>
            </Box>

            <Box
              height="21vh"
              width="85%"
              // border="1px solid grey"
              borderRadius="3px"
              justifyContent="center"
              margin="auto"
              marginTop="50px"
              padding="5px"
            >
              <Box width="90%" justifyContent="center" margin="auto">
                <Text fontFamily="Muli,sans-serif" fontSize="lg">
                  What do you want us to launch next?
                </Text>
                <Text color="grey" fontSize="15px">
                  Suggest us a product
                </Text>
                <Input marginTop="5px" placeholder="Your Suggestion" />
              </Box>
            </Box>
          </Box>
          <Box width="65%">
            <GridItem>
              <Grid
                templateColumns="repeat(3,1fr)"
                templateRows="repeat(6,1fr)"
                gap="9px"
                paddingLeft="7px"
                marginTop="50px"
              >
                {data.length > 0 &&
                  data.map((item) => {
                    return (
                      <Link
                        to={`/products/${item.category}/${item.id}`}
                        key={item.id}
                      >
                        <Singleproduct {...item} />
                      </Link>
                    );
                  })}
              </Grid>
            </GridItem>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Productspage;
