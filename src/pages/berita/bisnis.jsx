import { Flex, Text, Box, Center, Stack, Image, HStack, Heading, Spacer } from "@chakra-ui/react"
import  Axios  from "axios";
import { useEffect, useState } from "react";
export const Bisnis = () => {
    const [blog, getBlog] = useState([])
    


  const getContent = async (data1) => {
      try {
        const response = await Axios.get('https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=1', data1)
        getBlog(response.data.result)
      } catch (err) {
        
      }
    }
      useEffect(()=>{
        getContent()
      },[])



    return(
        <Center>
        <Box  bg={"white"} w={"80%"} mb={"300px"}>
        <Flex>
        <Text fontSize={{sm: "3xl", md: "5xl",lg: "7xl"}} mt={8} fontWeight={"bold"} p={"5px"} color={"blue.700"}>bisnis</Text>
        <Text fontSize={{sm: "3xl", md: "5xl",lg: "7xl"}} mt={8}  pt={"5px"} color={"red.700"}>com</Text>
        </Flex>
        <Stack>
            <Box w={"100%"} h={200} p={5} >

              <HStack gridTemplateColumns={5}>
        {blog?.map((item,index) =>(
              <Box key={index}>
                <Box  bg={"white"} h={"150px"} solid alignItems={"center"} ml={10} >

            
              
                <Image  width={"100px"} height={"100px"} objectFit={"cover"}  src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}>
                </Image>
                </Box>
                    <Heading textAlign={"center"}>{item.title}</Heading>
                </Box>
      
        
        ))}
        </HStack>
                
            </Box>
        </Stack>
        </Box>
        </Center>
    )
}