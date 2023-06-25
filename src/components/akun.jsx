import { Avatar, Box, Button, Center, Container, Flex, HStack, Heading, Img, Link, LinkBox, Stack, Text } from "@chakra-ui/react"
import {EmailIcon, ArrowForwardIcon, EditIcon, PlusSquareIcon, StarIcon, SettingsIcon, CloseIcon} from "@chakra-ui/icons"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setValue } from "../redux/userSlice";

import  Axios from "axios"
import { useEffect } from "react";
import { SetAvatar } from "./avatar";

export const Akun = () => {
    const data = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const onLogout = () =>{
        localStorage.removeItem('token')
        navigate('/')
        window.location.reload()
    }
    console.log(data);
    // const onLogin = async () => {
    //     try {
    //     const res = await Axios.get('https://minpro-blog.purwadhikabootcamp.com/api/auth/',{
    //       headers : {
    //         Authorization : `Bearer ${token}`
    //       }
    //     })
    //     const {username, email, phone, imgprofil}=res.data
    //      dispatch(setValue({username, email, phone, imgprofil}))
         
  
          
    //     } catch (error) {console.log(error);
    //     }
    //   }
  
    //   useEffect(()=>{
    //     token? onLogin():console.log("Login First");
    //   },[])
    return (
<Center>

        <Box
        mt={"50px"}
        h={"fit-content"}
        justify={'center'}
        bg={'gray.100'}
        w={"80%"}
        >
            <Heading p={5}>
                Profil
            </Heading>
        <Flex  p={5}  mt={15} gap={5}>
        <Box  w={"30%"} bg={"white"} borderRadius={"5px"} h={'fit-content'}>
        <Stack alignItems={"center"} mt={5} justifyContent={"center"} gap={5} p={4}>
        <SetAvatar
                  
                
                />
        <Text noOfLines={2} fontSize= {{sm: "xl", md: "2xl",lg: "3xl"}} textAlign={"center"}>{data.username} </Text>
        </Stack>
                        <Box>
        <Text noOfLines={2} fontSize= {{sm: "xl", md: "xl",lg: "2xl"}} textAlign={"center"}>{data.email} </Text>
        <Text noOfLines={2} fontSize= {{sm: "xl", md: "xl",lg: "2xl"}} textAlign={"center"}>{data.phone} </Text>
        </Box>
        <Stack w={"100%"}  spacing={5} p={3} >
        <NavLink to={"profil"}>
        <Button leftIcon={<SettingsIcon/>} gap={5} fontSize={"25px"} bgColor={"transparent"}  variant='solid' justifyContent={"left"}>
         Kelola Akun
         </Button>
        </NavLink>

        <NavLink to={"Artikel-Suka"}>
        <Button leftIcon={<StarIcon />} bgColor={"transparent"} gap={5} fontSize={"25px"}  variant='solid' justifyContent={"left"}>
         Artikel Disukai
         </Button>
        </NavLink>

        <NavLink to={"Artikel-Buat"}>
        <Button leftIcon={<PlusSquareIcon />} bgColor={"transparent"} gap={5} fontSize={"25px"}  variant='solid' justifyContent={"left"}>
         Buat Artikel
         </Button>
        </NavLink>

       

        <Button onClick= {onLogout} leftIcon={<CloseIcon />} bgColor={"transparent"} gap={5} fontSize={"25px"}  variant='solid' justifyContent={"left"}>
         Logout
         </Button>
    
        
        </Stack>

        </Box>
        <Outlet/>
        </Flex>
       </Box>
            
</Center>
    
        
    )
}