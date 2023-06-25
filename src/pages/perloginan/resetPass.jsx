import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Flex,
  Stack,
  InputGroup,
  InputRightElement,

}
 from "@chakra-ui/react";
import Axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons"

export const ResetPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();
  const SeePsw = () => {
    setShowPassword(!showPassword);
  };
  const ResetSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .matches(/^(?=.*[A-Z])/, "Must contain at least one Uppercase character")
      .matches(/^(?=.*(\W|_))/, "Must contain at least one symbol"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password didn't match")
      .required("Password is required"),
  });
  const handleSubmit = async (data) => {
    try {
      data.FE_URL="https://coruscating-sfogliatella-cd2b20.netlify.app/"
      const response = await Axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/resetPass",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/login");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (

    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      validationSchema={ResetSchema}
      onSubmit={(value, action) => {
        console.log(value);
        handleSubmit(value);
        // action.resetForm();
      }}
    >

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
            Reset Password
            </Heading>
          </Stack>
          <Box
          as={Form}
            rounded={'lg'}
            bg={'white'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              
            <FormControl id="password" isRequired>
                <FormLabel>Password Baru</FormLabel>
                <InputGroup>
                  <Input as={Field} type={showPassword ? 'text' : 'password'} name="password" />
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
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Konfirmasi  Password</FormLabel>
                <InputGroup>
                  <Input as={Field} type={showPassword ? 'text' : 'password'} name="confirmPassword" />
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
                  Reset Password
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Formik>
    );
  }