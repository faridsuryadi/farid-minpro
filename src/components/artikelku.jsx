import { Box, Button, Center, HStack, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Myblog = () => {
    const [data, setData] = useState();
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const getDetail = async () => {
      try {
        const response = await Axios.get(
          `https://minpro-blog.purwadhikabootcamp.com/api/blog/pagUser/`,
          {
            headers: {Authorization: `Bearer ${token}`},

          }
        );
        setData(response.data.result);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    const handleClick = (id) => {
      navigate(`/blog/${id}`)
    }
    console.log(data);
    useEffect(() => {
      getDetail();
    }, []);

  const handleDelete = async(id) => {
    try {
      const response = await Axios.patch(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog/remove/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      window.location.reload()
      // console.log(id);
    } 
    catch (err) {
      console.log(err);
    }
  }

  

    return(
        <Box p={"5px"} spacing={5} minChildWidth={"200px"} textAlign={"center"} mt={3}  justifyContent={"center"}>
        {data?.map((item,index) =>(
            <Box key={index} h={"fit-content"}>
              <HStack  bg={"white"} h={"150px"}  alignItems={"center"}>
                <Box boxSize={"150px"} onClick={()=>handleClick(item.id)}>
              <Image  objectFit={"cover"}  src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}>
              </Image>
                </Box>
                  <Text as={"b"}>{item.title}</Text>
                  {/* {item} */}
              </HStack>
              <Button onClick={()=>handleDelete(item.id)}>
                Hapus artikel
              </Button>
          </Box>
        ))}
      </Box>        
    )
}