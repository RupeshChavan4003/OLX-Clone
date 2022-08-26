import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Heading,
  Center,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const comingfrom = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((res) => {
        if (res.type === "USER_LOGIN_SUCCESS") {
          navigate(comingfrom, { replace: true });
        }
      });
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"md"} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Login</Heading>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
            <form onSubmit={handleSubmit}>
              <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
              >
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                  <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                  >
                    <Stack spacing={4}>
                      <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormControl>
                      <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </FormControl>
                      <Stack spacing={10}>
                        <Stack
                          direction={{ base: "column", sm: "row" }}
                          align={"start"}
                          justify={"space-between"}
                        >
                          <Checkbox>Remember me</Checkbox>
                          <Link color={"blue.400"}>Forgot password?</Link>
                        </Stack>
                        <Button
                          type={"submit"}
                          bg={"blue.400"}
                          color={"white"}
                          _hover={{
                            bg: "blue.500",
                          }}
                        >
                          Login
                        </Button>
                      </Stack>

                      <Center p={8}>
                        <Button
                          w={"full"}
                          maxW={"md"}
                          variant={"outline"}
                          leftIcon={<FcGoogle />}
                        >
                          <Center>
                            <Text>Login in with Google</Text>
                          </Center>
                        </Button>
                      </Center>
                      <Stack>
                        <Text color={"gray.400"}>
                          All your personal details are safe with us.
                        </Text>
                      </Stack>
                      <Stack pt={2}>
                        <Text align={"center"} color={"gray.400"}>
                          If you continue, you are accepting{" "}
                          <Link color={"blue.400"}>
                            OLX Terms and Conditions and Privacy Policy
                          </Link>
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
