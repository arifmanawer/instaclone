import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestUsers = () => {
    return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={"cetner"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested for you</Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.500"}} cursor={"pointer"}>See All</Text>
        </Flex>

        <SuggestedUser name='Dan Abrahmov' followers={1132} avatar='https://bit.ly/dan-abramov'/>
        <SuggestedUser name='Ryan Florence' followers={79} avatar='https://bit.ly/ryan-florence'/>
        <SuggestedUser name='Christian Nwamba' followers={919} avatar='https://bit.ly/code-beast'/>

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            Built by {" "}
            <Link href="https://github.com/arifmanawer/instaclone" target="_blank" fontSize={14} color={"blue.500"}>
                Arif Manawer
            </Link>
        </Box>
    </VStack>
    )
};


export default SuggestUsers;