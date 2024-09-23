import React from "react";
import { Flex, VStack, Center, Heading, Text, Box } from "@chakra-ui/react";
import FormButton from "../components/FormButton";

const HomePage = () => {
  return (
    <Flex width={"100vw"} height={"100vh"} justifyContent={"center"}>
      <Center>
        <VStack m={0}>
          <Heading>
            <Image src="SafeLock-logo.png" alt="SafeLock"></Image>
          </Heading>

          <FormButton text={"signup"} form={"signup"} />

          <FormButton text={"signin"} form={"signin"} />

          <Box justifyContent={"center"}>
            <Text
              maxW={"30vw"}
              fontSize={"l"}
              color={"#AE4F4D"}
              align={"center"}
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
  );
};

export default HomePage;
