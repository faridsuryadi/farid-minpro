import { SearchIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputRightElement, Table } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Axios from "axios"
import { json } from "react-router-dom"


export const Searchbar = () => {
    const [input, setInput] = useState("")
    const [data, setdata] = useState([])
    
    const handleSearch = async(value) => {
           Axios.get('https://minpro-blog.purwadhikabootcamp.com/api/blog')
           .then((response) =>  { 
                const results = response.data.result.filter((user)=>{ console.log(response.data);
                    return (
            value &&
            user && 
            user.name && 
            user.name.toLowerCase().includes(value)
            );
           
        });
        console.log(results);
        });
    
        }

        const handleChange = (value) => {
                setInput(value)
                handleSearch(value)
            }
        
    
return(
    <>
    <InputGroup  w={"50%"}>
    <Input variant='outline' placeholder='Cari Berita' w={"100%"}  _placeholder={{color : "white"}}  color={"white"}
    value={input} onChange={(e)=>handleChange(e.target.value)}/>
    <InputRightElement width='4.5rem'>
    <Button ml={"30px"} h='1.75rem' size='sm' bg={"transparent"} color={"gray"}>
    <SearchIcon color={"white"}/>
    </Button>
    </InputRightElement>
    </InputGroup>
        {/* <ul>
            {data.map((item)=>(

            <li key={item.id} >
                {item.title}
            </li>
            ))}
        </ul> */}
        </>
    )
}

    // useEffect(()=>{
    //     fetchArtikel()
    // },[input])
    
    // const fetchArtikel = async() => {
    //     try {
    //         const response = await Axios.get(`https://minpro-blog.purwadhikabootcamp.com/api/blog/?q=${input}`)
    //         const data = await response.json()
    //         setdata(data)
    //         console.log(response);
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
    // const handleSearch = (event) => {
    //     setInput(event.target.value)
    // }