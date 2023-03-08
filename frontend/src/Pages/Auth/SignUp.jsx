import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useStatStyles, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const SignUp = () => {
    const [show, setShow] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [pic, setPic] = useState();

    const postDetails = () => {

    };

    const SubmitHandler = () => {

    }


    return (
        <VStack>
            <FormControl id="first-name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}></Input>
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter Your Email'
                    onChange={(e) => setName(e.target.value)}></Input>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"}
                        placeholder='Enter Your password'
                        onChange={(e) => setName(e.target.value)}></Input>

                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm"
                            onClick={() => setShow(!show)}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>

                </InputGroup>
            </FormControl>
            <FormControl id="Confirm Password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"}
                        placeholder='Enter Your Confirm Password'
                        onChange={(e) => setName(e.target.value)}></Input>

                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm"
                            onClick={() => setShow(!show)}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id="pic">
                <FormLabel>
                    Upload Your Picture
                </FormLabel>
                <Input type="file" p="1" accept="image/"
                    onChange={(e) => postDetails(e.target.files[0])}>

                </Input>
            </FormControl>


            <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }}
                onClick={SubmitHandler}>
                Register
            </Button>



        </VStack>
    );
};

export default SignUp;