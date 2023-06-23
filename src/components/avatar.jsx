import  Axios  from "axios"
import { Formik } from "formik"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const Avatar = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const data = useSelector((state) => state.user.value)

    const  handleSubmit =async (data) => {
        try {
            const formdata = new FormData()
            const {file} = data
            formdata.append("")
            const response = await Axios.patch("https://minpro-blog.purwadhikabootcamp.com/api/auth/single-uploaded",formdata,{
                headers: {Authorization: `Bearer ${token}`}
  
              })
              console.log(data);
        } catch (error) {
            
        }
    }

    return (
   <Formik>

   </Formik>
    )

}