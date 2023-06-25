import {HStack, Heading, Stack, Text, Editable,
    EditableInput,
    EditablePreview,
    IconButton,
    ButtonGroup,
    
    Input,
    Box,
    Button,
    FormControl,
    FormLabel, } from "@chakra-ui/react"
import { EditIcon, CheckIcon, CloseIcon} from "@chakra-ui/icons"
import { useState } from "react"
import { useSelector } from "react-redux"
import {Form, NavLink} from "react-router-dom"
import { ErrorMessage, Field, Formik } from "formik"
import * as Yup from 'yup'
import  Axios  from "axios"
import { NewEmail } from "../components/newEmail"
import { NewUser } from "../components/newUser"
import { NewPhone } from "../components/newPhone"
import { SetAvatar } from "../components/avatar"


export const Profil = () => {
  const data = useSelector((state) => state.user.value)
  console.log(data.username);
  
  const emailSchema = Yup.object().shape({
    newEmail : Yup.string()
    .notOneOf([Yup.ref("currentEmail")], "Email tidak boleh sama")
    .required("Password dibutuhkan"),
    currentEmail: Yup.string()
    .required("Email dibutuhkan"),
    
    // username: Yup.string()
    // .required("User dibutuhkan"),

    // phone : Yup.string()
    // .min(10, "Nomor telepon minimal 10 digit")
    // .required("Telepon dibutuhkan"),
  })
  const token = localStorage.getItem('token')

  const handleSubmit = async(data) => {
    try {
      const response = await Axios.patch("https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass",data,{
          headers: {Authorization: `Bearer ${token}`}

        })
        console.log(data);
  } catch (error) {
      
  }
  }
   
        
    return (
       
        <Box bgColor={"white"} w={"80%"} h={"485x"} p={5} borderRadius={"5px"} as={Form} textAlign={"center"}>
            <Heading mb={5}>
                Kelola Akun
            </Heading>
            <HStack>
             
            <NewEmail/>
            <NewUser/>
            <NewPhone/>

              {/* <Formik>
              <Box w={"33%"}  h={"250px"} bg={"gray.100"}>
                <FormLabel fontSize={"2xl"} mt={3}mb={3}textAlign={"center"}>Username</FormLabel>
              <FormControl>
                <Stack textAlign={"center"}>
                <Input as={Field} name="" value={data.username} w={"80%"} mb={5}/>
                <Input as={Field} name="" placeholder="Username baru" w={"80%"}/>
                <Button  mt={5}>
                  Ubah
                </Button>
                </Stack>
              </FormControl>
              </Box>
              </Formik>

              <Formik>
              <Box w={"33%"}  h={"250px"} bg={"gray.100"}>
                <FormLabel fontSize={"2xl"} mt={3}mb={3}textAlign={"center"}>Nomor Telepon</FormLabel>
              <FormControl>
                <Stack alignSelf={"center"}>
                <Input as={Field} name="" value={data.phone} w={"80%"} mb={5}/>
                <Input as={Field} name="" placeholder="Nomor Telepon baru" w={"80%"}/>
                <Button mt={5}>
                  Ubah
                </Button>
                </Stack>
              </FormControl>
              </Box>
              </Formik> */}
            </HStack>
          

    
        <NavLink to={"/newpass"}>  
        <Button mt={8}>Ubah Password</Button>
        </NavLink>

        </Box>

    )
    }