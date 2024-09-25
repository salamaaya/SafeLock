import React from "react";
import {
  Flex,
  VStack,
  Center,
  Heading,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import FormSignin from "../components/FormSignin";
import FormSignup from "../components/FormSignup";

const HomePage = () => {
  return (
    <Box bgImg={"lock-bg-3x.png"} bgSize={"cover"} bgPos={"top"} bgRepeat={"no-repeat"}>
    <Flex width={"100vw"} height={"100vh"} justifyContent={"center"}>
      <Center>
        <VStack >
          <Heading pb={10}>
            <img src="SafeLock-logo.png" alt="SafeLock"></img>
          </Heading>

          <HStack spacing={4}>
            <VStack><FormSignup text={"sign up"}/></VStack>
            <VStack><FormSignin text={"sign in"}/></VStack>
          </HStack>

          <Box justifyContent={"center"}>
            <Text
            id='text-intro'
              maxW={"30vw"}
              fontSize={"l"}
              color={"#AE4F4D"}
              align={"center"}
              noOfLines={5}
              
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              hic quia laudantium pariatur ullam tempora, autem doloribus,
              distinctio eius cumque exercitationem enim aliquid amet, earum
              omnis illo quidem harum asperiores!
            </Text>
          </Box>
        </VStack>
      </Center>
    </Flex>
    </Box>
  );
};

export default HomePage;
