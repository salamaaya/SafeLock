import React from 'react';
import { Flex, Button, HStack, VStack, Center, Heading, Text, Box} from '@chakra-ui/react';
import GreenButton from '../components/GreenButton';

const HomePage = () => {
  return (
    <Flex width={"100vw"} height={"100vh"} justifyContent={"center"}>
        <Center>
            <VStack m={20}>
                <Heading>
                    Safe
                </Heading>

                <Heading>
                     Lock
                </Heading>

                <HStack spacing={8}>
                    <GreenButton text={'sign up'}/>
                    <GreenButton text={'sign in'}/>
                </HStack>

                <Box justifyContent={"center"}>
                    <Text maxW={"30vw"} 
                        fontSize={'l'} 
                        color={'#AE4F4D'} 
                        align={'center'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempo.
                    </Text>
                </Box>
                
            </VStack>
        </Center>
    </Flex>
  )
};

export default HomePage;