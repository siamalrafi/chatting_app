import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useStatStyles, VStack } from '@chakra-ui/react';



const Login = () => {
    const [show, setShow] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const SubmitHandler = () => {
        console.log();
    };


    return (
        <VStack>

            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}></Input>
            </FormControl>

            <FormControl id="Confirm Password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"}
                        placeholder='Enter Your Confirm Password'
                        onChange={(e) => setPassword(e.target.value)}></Input>

                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm"
                            onClick={() => setShow(!show)}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }}
                onClick={SubmitHandler}>
                Login
            </Button>

            <Button colorScheme="red" width="100%" style={{ marginTop: 15 }}
                onClick={() => {
                    setEmail("guser@example.")
                    setPassword("123456")
                }}>
                As a Guest.
            </Button>


        </VStack>
    );
};

export default Login;