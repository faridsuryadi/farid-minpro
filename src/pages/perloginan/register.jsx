import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Input,
  Center
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Form, Formik, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import Axios from "axios"

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const RegisSchema = Yup.object().shape({
    username: Yup.string()
    .required("User dibutuhkan"),

    email: Yup.string()
        .email("Alamat email tidak valid")
        .required("Email dibutuhkan"),


    phone : Yup.string()
    .min(10, "Nomor telepon minimal 10 digit")
    .required("Telepon dibutuhkan"),

    password : Yup.string()
    .min(6, "karakter password minimal 6")
    .matches(/^(?=.*[A-Z])/, "Minimal terdapat 1 huruf kapital")
    .matches(/^(?=.*(\W|_))/, "Minimal terdapat 1 simbol")
    .required("Password dibutuhkan"),
    
    confirmPassword : Yup.string()
    .oneOf([Yup.ref("password")], "Password tidak sesuai")
    .required("Password dibutuhkan"),

})

const handleSubmit = async(values) => {
  values.FE_URL="https://coruscating-sfogliatella-cd2b20.netlify.app/"
  const response = await Axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/", values)
  try {
    console.log(values);
} catch (error) {
    console.log(error);
}
}

return (  
        <Center>

        <Formik
        onSubmit={(values) => {
          handleSubmit(values);
          
        }}
        initialValues={{ username:'', email: '', phone:'', password: '' , confirmPassword:''}}
        validationSchema={RegisSchema}
        >
    <Flex
  minH={'100vh'}
  align={'center'}
  justify={'center'}
  bg={'gray.50'}
  w={"80%"}
>
  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    <Stack align={'center'}>
      <Heading fontSize={'4xl'} textAlign={'center'}>
        Daftarkan dirimu
      </Heading>
    </Stack>
    <Box rounded={'lg'} bg={('white')} boxShadow={'lg'} p={8} as={Form}>
      <Stack spacing={4}>

            
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input as={Field} type="text" name="username"/>
                <ErrorMessage
                            component="div"
                            name="username"
                            style={{color:"red"}}/>
              </FormControl>

              <FormControl  >
                <FormLabel>Alamat E-mail</FormLabel>
                <Input as={Field} type="email" name="email" />
                <ErrorMessage
                            component="div"
                            name="email"
                            style={{color:"red"}}/>
              </FormControl>

              <FormControl  >
                <FormLabel>Nomor Telepon</FormLabel>
                <Input as={Field} type="text" name="phone"/>
                <ErrorMessage
                            component="div"
                            name="phone"
                            style={{color:"red"}}/>
              </FormControl>

              <FormControl  >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input as={Field} type={showPassword ? 'text' : 'password'} name="password" />

                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>

                </InputGroup>
                <ErrorMessage
                            component="div"
                            name="password"
                            style={{color:"red"}}/>
              </FormControl>

              <FormControl  >
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input as={Field} type={showPassword ? 'text' : 'password'} name="confirmPassword" />

                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage
                            component="div"
                            name="confirmPassword"
                            style={{color:"red"}}/>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  size="lg"
                  bg={'blue.700'}
                  color={'white'}
                  type='submit'
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Daftar
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Sudah punya akun? <Link href={'../login'} color="blue.700">Masuk</Link>
                </Text>
              </Stack>
            
      </Stack>
    </Box>
  </Stack>
</Flex>
    
    
   </Formik>
                    </Center>
  
  );
}