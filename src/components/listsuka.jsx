import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Box, Button, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const LikedArticles = () => {
  const [data, setData] = useState();
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  
  const getDetail = async () => {
    try {
      const response = await Axios.get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog/pagLike/`,
        {
          headers: {Authorization: `Bearer ${token}`},

        }
      );
      setData(response.data.result);
      console.log("res",response.data.result);
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

  return (
    <Box p={"5px"} spacing={5} minChildWidth={"200px"} mt={3}>
        {data?.map((item,index) =>(
            <Box key={index}>
              <Stack  bg={"white"} h={"150px"} >
              <Box onClick={()=>handleClick(item.BlogId)}>

                <Heading>
                  {item.Blog.title}
                  </Heading>
                <Text>
                  {item.Blog.Category.name}
                  </Text>
                
                  <Text>{item.title}</Text>
              </Box>
                  {/* {item} */}
              </Stack>
          </Box>
        ))}
      </Box>        
  );
};

