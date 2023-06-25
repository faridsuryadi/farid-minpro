import { Box, Button, Flex, HStack, Heading, Spacer, Input, InputGroup, InputRightElement, Container, Center, Avatar, Text} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import{BrowserRouter, NavLink,Outlet, Router}from "react-router-dom"
import { Menu } from "./menu"
import { Footer } from "./footer"
import { useSelector } from "react-redux"
import { Searchbar } from "./searchbar"
import { useState } from "react"


export const Navbar = () => {
    const [results, setResults] =useState([])
    const token = localStorage.getItem('token')
    const data = useSelector((state) => state.user.value)
    return(
       <>
       
        <Center>

       <Box  bg={"white"} marginBottom={"20px"} w={"100%"} zIndex={2}>

        <Flex as="nav"  alignItems="center" gap="10px" position={"fixed"} w={"100%"} bg={"blue.700"} minH={"70px"}>
         
         <Menu></Menu>

        <Spacer/>
            <Searchbar />
        <Spacer/>
           {token ?(
            <>
                <NavLink to={"akun"}>
            <Button colorScheme="blue" bg={"transparant"} p="10px" border={"2px"} borderWidth={"3px"} borderColor={"white"} borderRadius={"30px"} color={"white"} mr={3}>
                {data.username}</Button>
                    </NavLink> 
            </>
           ):

            <HStack spacing={"20px"}  alignItems={"center"} >

               <NavLink to={"register"}>
            <Button  colorScheme="whiteAlpha" p="10px" bgColor={"white"} borderRadius={"30px"} color={"blue.700"}>
            Daftar Akun
            </Button>
                </NavLink>
                <NavLink to={"login"}>
            <Button colorScheme="blue" bg={"transparant"} p="10px" border={"2px"} borderWidth={"3px"} borderColor={"white"} borderRadius={"30px"} color={"white"}>
                Masuk</Button>
                    </NavLink> 
            </HStack>
    }
        </Flex>
       </Box> 
         </Center>

         
        <Outlet/>
         
         <Footer/>
       
       </>
         
    )
}