import { Box, Container, InputGroup, SimpleGrid, Stack, Text,Input, InputRightElement, Button, Flex, Spacer, Center, Heading} from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (

     <Center>

     <Box
      bg={"blue.700"}
      color={"black"}
      w={"100%"}
      bottom={0}
      >
          

      <Container maxW={'6xl'} py={"10"}>
       <Flex >
            <Button bg={"transparent"} color={"white"}>Instagram</Button>
            <Button bg={"transparent"} color={"white"}>Facebook</Button>
            <Button bg={"transparent"} color={"white"}>Twitter</Button>
            <Button bg={"transparent"} color={"white"}>Customer Service</Button>
            <Spacer/>
            <InputGroup w={"40%"}>
            <Input placeholder="email" _placeholder={{color:"white"}} color={"white"}/>
            <InputRightElement mr={9}><Link style={{color:"white"}}>Subscribe</Link></InputRightElement>
            </InputGroup>
          
       </Flex>
            </Container>
            </Box>
           </Center>
    )
}