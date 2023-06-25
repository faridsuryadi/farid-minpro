import { Flex, Text, Box, Center, Stack, Image, HStack, Heading, Spacer } from "@chakra-ui/react"
import  Axios  from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Fiksi = () => {
    const [blog, getBlog] = useState([])
    const navigate = useNavigate()


  const getContent = async (data1) => {
      try {
        const response = await Axios.get('https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=7', data1)
        getBlog(response.data.result)
      } catch (err) {
        
      }
    }
      useEffect(()=>{
        getContent()
      },[])


      const handleClick = (id) => {
        navigate(`/blog/${id}`)
      }

    return(
        <Center >
        <Box  bg={"white"} w={"80%"} h={"160vh"} >
        <Flex >
        <Text fontSize={{sm: "3xl", md: "5xl",lg: "7xl"}} mt={8} fontWeight={"bold"} p={"5px"} color={"blue.700"}>fiksi</Text>
        <Text fontSize={{sm: "3xl", md: "5xl",lg: "7xl"}} mt={8}  pt={"5px"} color={"red.700"}>com</Text>
        </Flex>
        <Stack>
            <Box w={"100%"} h={200} p={5} mb={"10%"}>

              <Stack gridTemplateColumns={5}>
        {blog?.map((item,index) =>(
              <Flex key={index}>
                <Box   onClick={()=>handleClick(item.id)} h={"150px"} solid alignItems={"center"} ml={10} >
                <Image  width={"100px"} height={"100px"} objectFit={"cover"}  src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}>
                </Image>
                </Box>
                    <Heading textAlign={"center"}>{item.title}</Heading>
                </Flex>
      
        
        ))}
        </Stack>
                
            </Box>
        </Stack>
        </Box>
        </Center>
    )
}