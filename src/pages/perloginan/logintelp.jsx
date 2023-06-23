import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    InputGroup,
    InputRightElement,
    Center,
    IconButton,
    HStack
  } from '@chakra-ui/react';
  import { AtSignIcon, EmailIcon, PhoneIcon,ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { Form, Formik, Field, ErrorMessage} from "formik"
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { setValue } from '../../redux/userSlice';
  
  
  
  export const LoginTelp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const LoginSchema = Yup.object().shape({ 
      phone: Yup.string()
      .min(10, "Nomor telepon minimal 10 digit")
      .required("Nomor telepon dibutuhkan"),
  
      password : Yup.string()
      .min(6, "karakter password minimal 6")
      .matches(/^(?=.*[A-Z])/, "Minimal terdapat 1 huruf kapital")
      .matches(/^(?=.*(\W|_))/, "Minimal terdapat 1 simbol")
      .required("Password dibutuhkan"),
      })
   
        const handleSubmit = async(values) => {
          const response = await Axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/login", values)
          try {
            console.log(response.data.token);
            localStorage.setItem("token",response.data.token)
            navigate('/')        
            dispatch(setValue(response))
          } 
            catch (error) {
            console.log(error);
            <ErrorMessage>Akun tidak ada</ErrorMessage>

        }
        }
    return(
        <Center>
           <Formik
        onSubmit={(values) => {
          handleSubmit(values);
        
        }}
        initialValues={{phone:'',password:'' }}
        validationSchema={LoginSchema}
        >

        <Flex
        h={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
        w={"80%"}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={"center"}>Masuk Akun</Heading>
          </Stack>
          <Box
          as={Form}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
         <HStack mb={5} spacing={"5"} justifyContent={"center"}>
                <NavLink to={"../login"}>
              <IconButton
                  variant='outline'
                  color='blue.700'
                  border={"0"}
                  aria-label='Login email'
                  icon={<EmailIcon/>}/>
                  </NavLink>
                  <NavLink to={"../loginuser"}>
              <IconButton
                  variant='outline'
                  color='blue.700'
                  border={"0"}
                  aria-label='Login user'
                  icon={<AtSignIcon/>}/>
                  </NavLink>

                  <NavLink to={"../logintelp"}>
              <IconButton
                  variant='outline'
                  color='blue.700'
                  border={"0"}
                  aria-label='Login telepon'
                  icon={<PhoneIcon/>}/>
                  </NavLink>
                
              </HStack>
            <Stack spacing={4}>
              <FormControl id="phone">
                <FormLabel>Nomor Telepon</FormLabel>
                <Input as={Field }type="text" name='phone' />
                <ErrorMessage
                            component="div"
                            name="phone"
                            style={{color:"red"}}/>
              </FormControl>
              <FormControl id="password" >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input as={Field} type={showPassword ? 'text' : 'password'} name='password' />
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
                            style={{color:"red"}}/>
            </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Ingat saya</Checkbox>
                  <Link href='forgotpass' color={'blue.700'}>Lupa password?</Link>
                </Stack>
                <Button
                  type='submit'
                  bg={'blue.700'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
                    </Formik>
                    </Center>
    )
}