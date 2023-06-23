import { Flex, Text, Box, Center } from "@chakra-ui/react"

export const Internasional = () => {
    return(
        <Center>
        <Box templateColumns="repeat(5,1fr)" bg={"gray.100"} w={"80%"}>
        <Flex>
        <Text fontSize={{sm: "3xl", md: "5xl",lg: "7xl"}} mt={8} fontWeight={"bold"} p={"5px"} color={"blue.700"}>Internasional</Text>
        <Text fontSize={{sm: "3xl", md: "5xl",lg: "7xl"}} mt={8}  pt={"5px"} color={"red.700"}>com</Text>
        </Flex>
        </Box>
        </Center>
    )
}