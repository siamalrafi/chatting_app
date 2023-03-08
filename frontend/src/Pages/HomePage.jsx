import React from 'react';
import { Box, Center, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import SignUp from './Auth/SignUp';



const HomePage = () => {
    return (
        <Container maxW="xl" centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p="2"
                bg="white"
                w="100%"
                m="20px 0 10px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Center
                    fontSize="40px"
                >
                    Talk_A_Tive
                </Center>
            </Box>


            <Box bg='white' w="100%" p="4" borderRadius="lg" borderWidth="1px">

                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList mb="1rm">
                        <Tab width="50%">Login In</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            login
                        </TabPanel>
                        <TabPanel>
                            <SignUp />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Box>
        </Container>
    );
};

export default HomePage;