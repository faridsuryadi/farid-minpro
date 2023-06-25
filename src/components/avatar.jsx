import { Avatar, Box, Button, Flex, FormLabel, Input, Stack } from "@chakra-ui/react"
import  Axios  from "axios"
import { Form, Formik } from "formik"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup' 

export const SetAvatar = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const data = useSelector((state) => state.user.value)
    const ChangeAvaSchema = Yup.object().shape({
      file: Yup.string().required("File is required"),
    });

    const handleSubmit = async (data) => {
        try {
          const { file } = data;
          const formData = new FormData();
          formData.append("file", file);
          const response = await Axios.post(
            "https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded",
            formData,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          console.log("res",response);
        } catch (error) {}
      };

      return (
        <Formik
          initialValues={{
            file: "",
          }}
          validationSchema={ChangeAvaSchema}
          onSubmit={(values, action) => {
            handleSubmit(values);
            console.log(values);
          }}
        >
          {({ setFieldValue, dirty }) => {
           

  
            return (
              <Flex 
              as={Form} >
                <Avatar
                  
                  size="2xl"
                  src={`https://minpro-blog.purwadhikabootcamp.com/${data?.imgProfile}`}
                  alt={data.username}
                />
                  <Stack justifyContent={"center"} mt={"5%"}>
                <Input
                  variant="flushed"
                  type={"file"}
                  name="file"
                  onChange={(e) => setFieldValue("file", e.target.files[0])}
                />
                  <Button
                  mx={"auto"}
                    isDisabled={!dirty}
                    colorScheme="blue"
                    size="xs"
                    w={"50%"}
                    type="submit"
                  >
                    Ubah                
                     </Button>
                </Stack>
              </Flex>
            );
          }}
        </Formik>
      );
    }