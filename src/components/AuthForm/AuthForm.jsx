import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email : '',
        passwword: '',
        confirmPassword: ''
    });
    const handleAuth = () => {
        if (!inputs.email || !inputs.passwword) {
            alert("Please fill out all fields");
            return;
        }

        navigate("/");
    }

    return<>
    <Box border={"1px solid gray"} padding={5} borderRadius={4} w={"full"}>
        <VStack spacing={4}>
            <Image src='/logo.png' h={50} alt='Instagram Logo' cursor={"pointer"}/>
            <Input 
            placeholder='Email'
            fontSize={14}
            type='email'
            value={inputs.email}
            onChange={(e) => setInputs({...inputs,email:e.target.value})}
            />

            <Input 
            placeholder='Password'
            fontSize={14}
            type='password'
            value={inputs.passwword}
            onChange={(e) => setInputs({...inputs,passwword:e.target.value})}
            />  

            {!isLogin ? (
                <Input 
                placeholder='Confirm Password'
                fontSize={14}
                type='password'
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
                />  
            ) : null}
            
            <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} onClick={handleAuth}>
                {isLogin? "Log in" : "Sign Up"}
            </Button>

            <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} width={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
                <Text mx={1} color={"white"}>OR</Text>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
            </Flex>

            <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                <Image src='/google.png' w={5} alt='Google logo'/>
                <Text mx="2" color={"blue.500"}>Log in with Google</Text>
            </Flex>
        </VStack>
    </Box>
    <Box border={"1px solid gray"} borderRadius={4} padding={5} w={"full"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>
                {isLogin? "Don't have an account?" : "Already have an account?"}
            </Box>
            <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                {isLogin? "Sign up": "Log in"}
            </Box>
        </Flex>
    </Box>
    </>;
    
}

export default AuthForm;