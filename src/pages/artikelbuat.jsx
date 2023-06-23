import { Box, Button, FormControl, Heading, Input, Select, Stack, Textarea } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Form, Formik, Field, ErrorMessage, FieldArray} from "formik"
import * as Yup from "yup"
import Axios  from "axios"
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Myblog } from "../components/artikelku"



export const Buat = () => {
   const [cat, getCat] = useState([])
   const [values, setvalues] = useState([])
   
   const[image,setImage] = useState("")
    const BuatSchema = Yup.object().shape({
      title: Yup.string()
        .required("Judul dibutuhkan"),
      content: Yup.string()
      .required("Konten dibutuhkan"),
      country: Yup.string()
      .required("Asal negara dibutuhkan"),
      CategoryId: Yup.string()
      .required("Kategori dibutuhkan"),
      url: Yup.string()
      .required("Link dibutuhkan"),
      keywords: Yup.string()
      .required("Kata kunci dibutuhkan"),
      file: Yup.string()
      .required("file dibutuhkan"),
    });
    const initialstate = {
      title:"", 
      content:"", 
      country:"", 
      CategoryId:"", 
      url:"",
      keywords:"",
      file: ""
    }
    const  token = localStorage.getItem("token")
    const handleSubmit =  async (data)=>{

      try { 
        const {title,content, country, CategoryId, url,keywords,file} = data
        const formdata = new FormData()
        formdata.append("data",JSON.stringify({title,content, country, CategoryId, url,keywords,file}))
        formdata.append("file",file)
          const response = await Axios.post("https://minpro-blog.purwadhikabootcamp.com/api/blog",formdata,{
            headers: {Authorization: `Bearer ${token}`},
            "Content-Type":"multipart/form-data",

       } )
       alert("Artikel berhasil dibuat")
        } catch (error) {
          console.log(error);
        }
      }
      
  const getCategory = async (values) => {
    try {
      const response = await Axios.get('https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory',values)
      getCat(response.data)
    } catch (err) {
      
    }
  }
  useEffect(()=>{
    getCategory()
  },[])

  return(
  
    <Formik
    initialValues={initialstate}
    validationSchema={BuatSchema}
    onSubmit={(values) => {
      console.log(values);
      handleSubmit(values);
      
    }}
    >
{({setFieldValue, dirty}) => {
return(

  <Box bgColor={"white"} w={"80%"} h={"fit-content"} p={5} borderRadius={"5px"} as={Form} >
            <Heading pb={5}>
                Buat Artikel
            </Heading>
            <Stack>
              <FormControl>
                <Input as={Field} name="title"placeholder="Judul" />
                <ErrorMessage
                            component="div"
                            name="title"
                            style={{color:"red"}}/>

              </FormControl>

              <FormControl>
                <Field as={Select} placeholder="Kategori" name="CategoryId"color={"gray"} >
                
                {cat.map((item,index)=>{
                  return(
                    
                    <option key={index} value={item.id}> {item.name} </option>
                    
                )
                })}
                
                </Field>
                <ErrorMessage
                            component="div"
                            name="CategoryId"
                            style={{color:"red"}}/>

              </FormControl>

              <FormControl>
                <Textarea as={Field}  placeholder="Konten Berita" name="content"></Textarea>
                <ErrorMessage
                            component="div"
                            name="content"
                            style={{color:"red"}}/>

              </FormControl>
              <FormControl>
                <Textarea as={Field}  placeholder="Asal Negara" name="country"></Textarea>
                <ErrorMessage
                            component="div"
                            name="country"
                            style={{color:"red"}}/>

              </FormControl>
              
              <FormControl>
                <Input as={Field}  name="url"placeholder="Url"/>
                <ErrorMessage
                            component="div"
                            name="url"
                            style={{color:"red"}}/>

              </FormControl>

              <FormControl>
                <Input as={Field}  placeholder="Kata Kunci" name="keywords"/>
                <ErrorMessage
                            component="div"
                            name="keywords"
                            style={{color:"red"}}/>

              </FormControl>

              <FormControl>
                <Input
                        type="file"
                        alignItems={"center"}
                        name="file"
                        onChange={(e)=>setFieldValue("file",e.target.files[0])}/>
                <ErrorMessage
                            component="div"
                            name="file"
                            style={{color:"red"}}/>

              </FormControl>

            </Stack>

              <Button
              type="submit"
              isDisabled={!dirty}>
                Buat
              </Button>
              <Heading>
                  Artikel Dibuat
                </Heading>
                <Myblog/>
    </Box>
)
}}
</Formik>
)  
  
} 
{/* <FormControl>
  <Input as={Field} name="username"placeholder="Penulis"/>
  <ErrorMessage
              component="div"
              name="username"
              style={{color:"red"}}/>

            </FormControl> */}

{/* <FormControl>
  <Input as={Field} placeholder="Tanggal Publikasi" type="datetime-local" name="date"color={"gray"}/>
  <ErrorMessage
              component="div"
              name="date"
              style={{color:"red"}}/>

</FormControl> */}