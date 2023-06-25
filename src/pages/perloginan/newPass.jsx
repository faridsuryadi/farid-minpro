import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import  Axios  from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { Form, Formik, Field, ErrorMessage} from "formik"

  export  const NewPass = ()=> {
    const token = localStorage.getItem('token')
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleSubmit =  async (data)=>{
      try {
          const response = await Axios.patch("https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass",data,{
              headers: {Authorization: `Bearer ${token}`}

            })
            console.log(data);
      } catch (error) {
          
      }
  }
  const newPassSchema = Yup.object().shape({ 
    

    currentPassword : Yup.string()
    .min(6, "karakter password minimal 6")
    .matches(/^(?=.*[A-Z])/, "Minimal terdapat 1 huruf kapital")
    .matches(/^(?=.*(\W|_))/, "Minimal terdapat 1 simbol")
    .required("Password dibutuhkan"),
    
    password : Yup.string()
    .min(6, "karakter password minimal 6")
    .matches(/^(?=.*[A-Z])/, "Minimal terdapat 1 huruf kapital")
    .matches(/^(?=.*(\W|_))/, "Minimal terdapat 1 simbol")
    .required("Password dibutuhkan"),
    
    
    confirmPassword : Yup.string()
    .oneOf([Yup.ref("password")], "Password tidak sesuai")
    .required("Password dibutuhkan"),
  })
  
    return (
      <Formik
      onSubmit={(values) => {
        handleSubmit(values);
        navigate("/")
        localStorage.removeItem('token')
      }}
      initialValues={{currentPassword:"",password:"", confirmPassword:""}}
      validationSchema={newPassSchema}
      >

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
            Ganti Password
            </Heading>
          </Stack>
          <Box
          as={Form}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              
            <FormControl id="currentPassword" >
                <FormLabel>Password Lama</FormLabel>
                <InputGroup>
                  <Input as={Field}type={showPassword ? 'text' : 'password'} name='currentPassword' />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                    <ErrorMessage
                    component="div"
                    name="currentPassword"
                    style={{ color: "red" }}
                  />
              </FormControl>

            <FormControl id="password" >
                <FormLabel>Password Baru</FormLabel>
                <InputGroup>
                  <Input as={Field}type={showPassword ? 'text' : 'password'} name='password'/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                    <ErrorMessage
                    component="div"
                    name="password"
                    style={{ color: "red" }}
                  />
              </FormControl>

              <FormControl id="confirmPassword" >
                <FormLabel>Konfirmasi  Password</FormLabel>
                <InputGroup>
                  <Input as={Field}type={showPassword ? 'text' : 'password'} name='confirmPassword' />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                    <ErrorMessage
                    component="div"
                    name="confirmPassword"
                    style={{ color: "red" }}
                  />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  type='submit'
                  bg={'blue.700'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Ganti
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Formik>
    );
  }