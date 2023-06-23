import { Box, Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react"
import  Axios  from "axios"
import { ErrorMessage, Field, Formik } from "formik"
import { useSelector } from "react-redux"
import { Form } from "react-router-dom"
import * as Yup from 'yup'

export const NewEmail = ()=> {
    const data = useSelector((state) => state.user.value)
    const token = localStorage.getItem('token')

    const emailSchema = Yup.object().shape({
        newEmail : Yup.string()
        .notOneOf([Yup.ref("currentEmail")], "Email tidak boleh sama")
        .required("Password dibutuhkan"),
        currentEmail: Yup.string()
        .required("Email dibutuhkan"),
    })

    const handleSubmit = async() => {
        try {
          const response = await Axios.patch("https://minpro-blog.purwadhikabootcamp.com/api/auth/changeEmail",{},{
              headers: {Authorization: `Bearer ${token}`}
    
            })
            console.log(response);
      } catch (error) {
          
      }
      }

    return(

        <Formik
        onSubmit={(values) => {
          handleSubmit(values);
        
        }}
        initialValues={{currentEmail:'',newEmail:'' }}
        validationSchema={emailSchema}
        >
    <Box as={Form} w={"33%"}  h={"250px"} bg={"gray.100"}>
      <FormLabel fontSize={"2xl"} mt={3} mb={3}textAlign={"center"}>Email</FormLabel>

        <FormControl>
      <Input as={Field} name="currentEmail" value={data.email} w={"80%"} mb={5}/>
      <ErrorMessage
        component="div"
        name="currentEmail"
        style={{color:"red"}}/>
        </FormControl>

      <Stack textAlign={"center"}>
    <FormControl>
      <Input as={Field} name="newEmail" placeholder="Email Baru" w={"80%"}/>
      <ErrorMessage
      component="div"
      name="newEmail"
      ttyle={{color:"red"}}/>
    </FormControl>
      </Stack>
      <Button type={"submit"}  mt={5}>
        Ubah
      </Button>
    </Box>
    </Formik>
        )
}