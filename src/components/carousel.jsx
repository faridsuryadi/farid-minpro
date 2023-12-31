
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Center, Flex, HStack, Heading, Image, Stack, Text, background } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import  Axios from "axios";
import { useNavigate } from "react-router-dom";

export const Carousel = () => {
  const [blog, getBlog] = useState([])
  const navigate = useNavigate()
  const getContent = async () => {
    try {
      const response = await Axios.get('https://minpro-blog.purwadhikabootcamp.com/api/blog', )
      getBlog(response.data.result)
      console.log(response);
    } catch (err) {
      
    }
  }

  const handleClick = (id) => {
    navigate(`/blog/${id}`)
  }
  useEffect(()=>{
    getContent()
  },[])
    return (
    <Box>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={2} >
        {blog?.map((item,index)=>{
                    const createdAt = new Date(item.createdAt).toLocaleDateString('en-US');

          return (
            
            <SwiperSlide key = {index}
            onClick={()=>handleClick(item.id)}>
                <Stack>

                <Image   float={"left"} width={"350px"} height={"300px"} src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`} w={"500px"} alignItems={"center"} _hover={{
                     cursor:"pointer"
                  }}>
                </Image>
                <Heading alignItems={"center"}> {item.title}</Heading>
                <Text fontSize={"20px"}>{item.User.username}</Text>
                <Text fontSize={"1rem"}>{createdAt}</Text>
                
                </Stack>
              


              
            </SwiperSlide>
          )
        })}
      
      </Swiper>
    </Box>
  );
}
