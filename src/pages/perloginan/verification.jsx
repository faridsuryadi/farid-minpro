import { Box, Button } from "@chakra-ui/react"
import  Axios  from "axios"
import { useParams, NavLink} from "react-router-dom"


export const Validasi = () => {
const {token} = useParams()
const handleSubmit =  async ()=>{
    try {
        const response = await Axios.patch("https://minpro-blog.purwadhikabootcamp.com/api/auth/verify",{},{
            headers: {Authorization: `bearer ${token}`}
        })
    } catch (error) {
        
    }
}

    return(
        <Box>
            <NavLink to={"/login"}>
            <Button onClick={handleSubmit}>Verifikasi</Button>
            </NavLink>

        </Box>
    )
}