import { Box, Center, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Spacer, Tab, TabList, TabPanel, TabPanels, Table, Tabs, Td, Text, Th, Tr } from "@chakra-ui/react"
import { dataUser } from "../data"
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";
import  Axios  from "axios";
import { useEffect, useState } from "react";
import { FlatTree } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {ArticlePagination} from "../components/pagination";


export const Layout = () => {
    const [blog, getBlog] = useState([])
    const navigate = useNavigate()
    const [fav, getFav] = useState([])
    const getContent = async (data1) => {
      try {
        const response = await Axios.get('https://minpro-blog.purwadhikabootcamp.com/api/blog', data1)
        getBlog(response.data.result)
      } catch (err) {
        
      }
    }
    const handleClick = (id) => {
      navigate(`/blog/${id}`)
    }
    const getMost = async () => {
      try {
        const res = await Axios.get('https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav?page=1&orderBy=total_fav&sort=DESC')
        getFav(res.data.result)
        console.log(res);
      } catch (err) {
        
      }
    }
    useEffect(()=>{
      getContent()
      getMost()
    },[])
    return(
        <Center height>
        <Grid templateColumns="repeat(5,1fr)"  w={"80%"}>
        <GridItem
        as={"main"}
        colSpan={"5"}
        height={"100%"}
        >
        <Flex>

        <Text fontSize={{sm: "3xl", md: "5xl",lg: "7xl"}} mt={8} fontWeight={"bold"} p={"5px"} color={"blue.700"}>berita</Text>
        <Text fontSize={{sm: "3xl", md: "5xl",lg: "7xl"}} mt={8}  pt={"5px"} color={"red.700"}>com</Text>

        </Flex>
          <Carousel/>
                   <Flex p={"5px"} gap={"5"} mt={10}  mb={8}>
                <Box bg={"white"} h={"400px"} w="59.6%" >
                <Flex>

<Text fontSize={{sm: "3xl", md: "5xl",lg: "9xl"}} mt={8} fontWeight={"bold"} p={"5px"} color={"blue.700"}>berita</Text>
<Text fontSize={{sm: "3xl", md: "5xl",lg: "9xl"}} mt={8}  pt={"5px"} color={"red.700"}>com</Text>

</Flex>
       <Text fontSize={"2rem"} >Merupakan situs berita yang menampilkan berbagai macam artikel yang dibuat oleh murid Purwadhika</Text>
       
                </Box>
               
                <Box bg={"white"} h={"fit-content"} w="39.4%"  >
                    <Heading  pt={2} textAlign={"center"}>Populer</Heading>

                <Box mt={10} ml={10} >
                    
                <Tabs size='md' variant='enclosed'>
                  <TabList>
                    <Tab>1</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                    
                    <Flex>
                        <Text as={"b"}>Judul</Text>
                        <Spacer/>
                        <Text as={"b"}>Jumlah Like</Text>
                    </Flex>
                        
                {fav?.map((item,index) =>(
                    <Flex key={index} mb={5} >            
                        <Text onClick={()=>handleClick(item.id)} _hover={{
                    color: 'blue.500', cursor:"pointer"
                  }}>{item.title}</Text>
                        <Spacer/>
                        <Text mr={"30px"}>{item.total_fav}</Text>
                        
                 </Flex>
                 ))}
                    </TabPanel>
                  
                  </TabPanels>
                </Tabs>
                 </Box>

                 </Box>
            </Flex>
   
        <ArticlePagination/>
        </GridItem>
        </Grid>

                  </Center>                   
    )
}