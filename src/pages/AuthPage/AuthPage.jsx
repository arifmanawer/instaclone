import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';


const AuthPage = () => {
    return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                {/* Left side */}
            <Box display={{base:"none", md:"block"}}>
                <Image src='/auth.png' height={600} alt='Default phone image'/>
            </Box>
                {/* Right side */}
            <VStack>
                <AuthForm />
                <Box textAlign={"center"}>Get App</Box>
                <Flex gap={5} justifyContent={"center"}>
                    <Image src='/microsoft.png' height={10} alt='Microsoft logo'/>
                    <Image src='/playstore.png' height={10} alt='Playstore logo'/>
                </Flex>
            </VStack>
            </Flex>
            
            
        </Container>
    </Flex>
    )
}


export default AuthPage;