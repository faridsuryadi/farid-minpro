import { Box, Center, Heading, Image, Stack, Text } from "@chakra-ui/react"
import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LikeButton } from "../components/like";

export const Blog = () => {
    const [data, setData] = useState();
    const params = useParams();
    const getDetail = async (data) => {
      try {
        const response = await Axios.get(
          `https://minpro-blog.purwadhikabootcamp.com/api/blog/${params.id}`,
          data
        );
        setData(response.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    console.log(data);
    useEffect(() => {
      getDetail();
    }, []);
    
    // const createdAt = new Date(data.createdAt).toLocaleDateString('en-US');
    return(
      <Center>
            
        <Box w={"80%"} mt={20}  bg={"white"} >
            <Stack>

          <Box alignSelf={"center"}>
            <Image w={"700px"} alignItems={"center"}
              src={`https://minpro-blog.purwadhikabootcamp.com/${data?.imageURL}`}
              />
              </Box>
              <Heading>{data?.title}</Heading>
              
              <Text>{data?.content}</Text>
              <LikeButton/>
              </Stack>
              </Box>
        </Center>
    )
}