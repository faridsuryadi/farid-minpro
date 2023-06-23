import { Box, Center, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Spacer, Tab, TabList, TabPanel, TabPanels, Table, Tabs, Td, Text, Th, Tr } from "@chakra-ui/react"
import { dataUser } from "../data"
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";
import  Axios  from "axios";
import { useEffect, useState } from "react";


export const Layout = () => {
    const [blog, getBlog] = useState([])
    const [fav, getFav] = useState([])
    const getContent = async (data1) => {
      try {
        const response = await Axios.get('https://minpro-blog.purwadhikabootcamp.com/api/blog', data1)
        getBlog(response.data.result)
      } catch (err) {
        
      }
    }
    const getMost = async (data1) => {
      try {
        const response = await Axios.get('https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav', data1)
        getFav(response.data.result)
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

        <Text fontSize={{sm: "3xl", md: "5xl",lg: "7xl"}} mt={8} fontWeight={"bold"} p={"5px"} color={"blue.700"}>detik</Text>
        <Text fontSize={{sm: "3xl", md: "5xl",lg: "7xl"}} mt={8}  pt={"5px"} color={"red.700"}>com</Text>

        </Flex>
          <Carousel/>

        <SimpleGrid p={"5px"} spacing={5} minChildWidth={"200px"} textAlign={"center"} mt={10} justifyContent={"center"}>
          {blog?.map((item,index) =>(
              <Box key={index}>
                <Box  bg={"white"} h={"150px"} border={"1px"}solid alignItems={"center"}>
                <Image w={20}  src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}>
                </Image>
                    <Text>{item.title}</Text>
                    {/* {item} */}
                </Box>
            </Box>
          ))}
        </SimpleGrid>        
            <Flex p={"5px"} gap={"5"} mt={10}  >
                <Box bg={"white"} h={"400px"} w="59.6%" border={"1px"}solid>Headline</Box>
               
                <Box bg={"white"} h={"400px"} w="39.4%" border={"1px"}solid >
                    <Heading  pt={2} textAlign={"center"}>Populer</Heading>

                <Box mt={10} ml={10}>
                    
                <Tabs size='md' variant='enclosed'>
                  <TabList>
                    <Tab>1</Tab>
                    <Tab>2</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                    
                        <Text>Judul</Text>
                        <Text textAlign={"right"}>Disukai</Text>
                        
                {fav?.map((item,index) =>( 
                    <Flex key={index} mb={5} >
              
                        
                        <Text >{item.title}</Text>
                        <Spacer/>
                        <Text mr={20}>{item.total_fav}</Text>
                        
                 </Flex>
                 ))}
                    </TabPanel>
                    <TabPanel>
                {fav?.slice(5,10).map((item,index) =>( 
                    <Flex key={index} mb={5} >
              
                        
                        <Text >{item.title}</Text>
                        <Spacer/>
                        <Text mr={20}>{item.total_fav}</Text>
                        
                 </Flex>
                 ))}
                      
                    </TabPanel>
                  </TabPanels>
                </Tabs>
                 </Box>

                 </Box>
            </Flex>
    
        <SimpleGrid p="5px" spacing={5} minChildWidth={"200px"} textAlign={"center"} mt={8} mb={'20%'}>
            <Box bg={"white"} h={"150px"} border={"1px"}solid>1</Box>
            <Box bg={"white"} h={"150px"} border={"1px"}solid>2</Box>
            <Box bg={"white"} h={"150px"} border={"1px"}solid>3</Box>
            <Box bg={"white"} h={"150px"} border={"1px"}solid>4</Box>
            <Box bg={"white"} h={"150px"} border={"1px"}solid>5</Box>
           
        </SimpleGrid>
        </GridItem>
        </Grid>

                  </Center>                   
    )
}