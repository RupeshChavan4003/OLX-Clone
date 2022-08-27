import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FormControl, Select } from "@chakra-ui/react";
import { Input, InputGroup, Stack } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsChat, BsBell } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Avatar } from "@chakra-ui/react";
import "./Navbar.css";
const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Box w="100%" padding={"12px"}>
      <Flex justifyContent={"space-evenly"} alignItems={"center"}>
        <Link to={"/"}>
          {" "}
          <Box width={"50px"} cursor={"pointer"} className="navbar_logo">
            <Image
              src="data:image/png;base64,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"
              alt="Dan Abramov"
            />
          </Box>
        </Link>
        <Box
          borderColor={"#002F34"}
          // border={"2px"}
          display={"flex"}
          justifyContent={"space-between"}
          className="navbar_search_bar"
        >
          <Center
            w="45px"
            h="40px"
            bg={"#002F34"}
            color="white"
            cursor={"pointer"}
            borderRadius={"5px"}
            className={"navbar_search_bar"}
          >
            <SearchIcon className="navbar_search_bar" />
          </Center>
          <FormControl className="navbar_search_bar">
            <Select
              placeholder="India"
              className="navbar_search_bar"
              width={"190px"}
              outline={"none"}
              outlineColor={"none"}
              borderRadius={"5px"}
            >
              <option>Kerala</option>
              <option>Tamil Naidu</option>
              <option>Punjab</option>
              <option>Maharastra</option>
            </Select>
          </FormControl>
        </Box>
        <Box
          width={"450px"}
          borderColor={"#002F34"}
          border={"2px"}
          borderRadius={"5px"}
          maxHeight={"44px"}
          className="navbar_search_bar"
        >
          <Stack spacing={4}>
            <InputGroup>
              <Input
                type="tel"
                placeholder="Find Cars, Mobile Phones and more....."
              />
              <Center
                w="45px"
                h="40px"
                bg={"#002F34"}
                color="white"
                cursor={"pointer"}
                className="navbar_search_bar"
              >
                <SearchIcon className="navbar_search_bar" />
              </Center>
            </InputGroup>
          </Stack>
        </Box>
        <Box className="navbar_search_bar">
          <FormControl>
            <Select
              placeholder="English"
              width={"200px"}
              maxW={"120px"}
              borderRadius={"5px"}
            >
              <option>Hindi</option>
            </Select>
          </FormControl>
        </Box>
        <Box
          fontSize={"30px"}
          color={"#002F34"}
          cursor={"pointer"}
          className={"navbar_icon"}
        >
          <BsChat />
        </Box>
        <Box
          fontSize={"30px"}
          color={"#002F34"}
          cursor={"pointer"}
          className={"navbar_icon"}
        >
          <BsBell />
        </Box>
       {isAuth ? (
          <div className={"afterSignin"}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <div>
              <p>Welcome</p>
              <p>User</p>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login">
              <Box
                fontSize={"30px"}
                color={"#002F34"}
                cursor={"pointer"}
                className={"navbar_icon"}
              >
                <BiUser />
              </Box>
            </Link>
          </>
        )}
        <Box cursor={"pointer"} className={"navbar_icon"}>
          <Image
            src="https://user-images.githubusercontent.com/91020498/186889937-a920358d-9d24-41dd-b3e3-9de04f0082dc.jpg"
            alt="sell icon"
            maxWidth={"65px"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
