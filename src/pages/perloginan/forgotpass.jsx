import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import  Axios  from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

export const ForgotPass = () => {
  const { token } = useParams()
  const ForgotSchema = Yup.object().shape({
    email: Yup.string()
      .email("Alamat email tidak sesuai")
      .required("Email dibutuhkan"),
  });
  const handleSubmit = async (data) => {
    try {
      const response = await Axios.put(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/forgotPass",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={ForgotSchema}
      onSubmit={(value, action) => {
        console.log(value);
        handleSubmit(value);
      }}
    >
      {({ props }) => {
        return (
          <Center>

          <Box
            as={Form}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bg={'gray.50'}
            w={"80%"}
            boxShadow={'lg'}
            
          >
            <Box
              p={8}
              maxWidth="500px"
             
            >
              <Box>
                <Heading mb={6} textAlign="center" textColor={"black"}>
                  Lupa  password
                </Heading>
                
                <FormControl>
                  <FormLabel textColor={"white"}>Email Address</FormLabel>
                  <ErrorMessage
                    component="div"
                    name="email"
                    style={{ color: "red" }}
                  />
                  <Input
                    as={Field}
                    name="email"
                    type="text"
                    placeholder="Masukan email anda"
                    mb={4}
                    bgColor={"white"}
                  />
                </FormControl>
              </Box>
              <Button colorScheme="blue" size="lg" width="full" type="submit">
                Sign In
              </Button>
            </Box>
          </Box>
      </Center>
        );
      }}
    </Formik>
  );
};