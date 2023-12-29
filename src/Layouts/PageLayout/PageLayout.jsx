import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
    return (
        <Flex>
            {/*Left side. just sidebar*/}
            {pathname !== '/auth' ? (
                <Box w={{base:"70px", md:"240px"}}>
                <Sidebar />
                </Box>
            ): null}
            {/*Right side content*/}
            <Box flex={1} w={{base:"calc(100%-70px)", md:"calc(100%-240px)"}}>
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout;