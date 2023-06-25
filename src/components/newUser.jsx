import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
  } from "@chakra-ui/react";
  
  import { useSelector } from "react-redux";
  import * as Yup from "yup";
  import { ErrorMessage, Field, Form, Formik } from "formik";
  import Axios from "axios";
  import { useNavigate } from "react-router-dom";
  
  export const NewUser = () => {
    const data = useSelector((state) => state.user.value);
    const token = localStorage.getItem("token");
    console.log(data);
  
    const navigate = useNavigate();
    const onChangeIt = () => {
      localStorage.removeItem("token");
      navigate("/login");
    };
  
    const handleSubmit = async (data) => {
      try {
        data.FE_URL = "https://coruscating-sfogliatella-cd2b20.netlify.app/";
        const response = await Axios.patch(
          "https://minpro-blog.purwadhikabootcamp.com/api/auth/changeUsername",
          data,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(data);
        console.log(response);
      } catch (error) {}
    };
  
    const ChangeUserSchema = Yup.object().shape({
        currentUsername: Yup.string().required("Username is required"),
    
        newUsername: Yup.string().required("Username is required"),
      });
    return (
      <Formik
        initialValues={{
            currentUsername: "",
            newUsername: "",
        }}
        validationSchema={ChangeUserSchema}
        onSubmit={(value, action) => {
          console.log(value);
          handleSubmit(value);
        }}
      >
        {(props) => {
          return (
            
          <Box as={Form} w={"33%"}  h={"250px"} bg={"gray.100"} p={5}>            
          <Text as={"b"} textAlign={"center"}>Edit Username</Text>
              <Stack spacing={4} w={"80%"} p={5} mx={"auto"}>
                <FormControl>
                  
                  <ErrorMessage
                    component="div"
                    name="currentUsername"
                    style={{ color: "red" }}
                  />
                  <Input as={Field} name="currentUsername" placeholder="Username saat ini" />
                </FormControl>
  
                <FormControl justifyContent={"center"}>
               
                  <ErrorMessage
                    component="div"
                    name="newUsername"
                    style={{ color: "red" }}
                  />
                  <Input as={Field} name="newUsername" placeholder="Username baru" />
                </FormControl>
                
                  <Button
                  mx={"auto"}
                  w={"70%"}
                    isDisabled={!props.dirty}
                    onClick={onChangeIt}
                    type={"submit"}
                    loadingText="Submitting"
                    size="lg"
                    bg={"gray.500"}
                    color={"white"}
                    _hover={{
                      bg: "gray",
                    }}
                  >
                    Ubah
                  </Button>
                
              </Stack>
            </Box>
          );
        }}
      </Formik>
    );
  };
        {/* <Box as={Form} w={"33%"}  h={"250px"} bg={"gray.100"}> */}