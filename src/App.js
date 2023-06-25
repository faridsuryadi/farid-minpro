import { Navbar } from "./components/navbar";
import { Layout } from "./pages/home";
import {Login} from "./pages/perloginan/login"
import {Register} from "./pages/perloginan/register"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { NewPass } from "./pages/perloginan/newPass";
import { Profil } from "./pages/profil";
import { LoginTelp } from "./pages/perloginan/logintelp";
import { LoginUser } from "./pages/perloginan/loginuser";
import { Akun } from "./components/akun";
import { ForgotPass } from "./pages/perloginan/forgotpass";
import { Teknologi } from "./pages/berita/teknologi";
import { Bisnis } from "./pages/berita/bisnis";
import { Olahraga } from "./pages/berita/olahraga";
import { Kuliner } from "./pages/berita/kuliner";
import { Internasional } from "./pages/berita/internasional";
import { Fiksi } from "./pages/berita/fiksi";
import { Ekonomi } from "./pages/berita/ekonomi";
import { Suka } from "./pages/artikelsuka";
import { Buat } from "./pages/artikelbuat";
import { Validasi } from "./pages/perloginan/verification";
import  Axios from "axios";
import { useDispatch } from "react-redux";
import { setValue } from "./redux/userSlice";
import { useEffect } from "react";
import { ResetPass } from "./pages/perloginan/resetPass";
import { Blog } from "./pages/blog";
import {ArticlePagination} from "./components/pagination"


function App() {
  const dispatch = useDispatch()
  const router = createBrowserRouter(
    [
    {path: "/", 
    element: <Navbar/>,
    children: [
      {path: "/",element:<Layout/>},
      {path: "teknologi",element:<Teknologi/>},
      {path: "bisnis",element:<Bisnis/>},
      {path: "Ekonomi",element:<Ekonomi/>},
      {path: "Kuliner",element:<Kuliner/>},
      {path: "Olahraga",element:<Olahraga/>},
      {path: "Internasional",element:<Internasional/>},
      {path: "Fiksi",element:<Fiksi/>},
      {path: "blog/:id",element:<Blog/>},
      {path: "pagination",element:<ArticlePagination/>},
      {path: "Akun", element:<Akun/>,children:[
        {path: "Profil", element: <Profil/>},
        {path: "Artikel-Suka", element: <Suka/>},
        {path: "Artikel-Buat", element: <Buat/>}
      ]}
    ]
    },
      {path: "/login", element: <Login/>},
      {path: "/forgotpass", element: <ForgotPass/>},
      {path: "/logintelp", element: <LoginTelp/>},
      {path: "/loginuser", element: <LoginUser/>},
      {path: "/register", element: <Register/>},
      {path: "/newpass", element: <NewPass/>},
      {path: "/verification/:token", element: <Validasi/>},
      {path: "/reset-password/:token", element: <ResetPass/>},
    
    ])
    const token = localStorage.getItem('token')
    const keepLogin = async () => {
      try {
      const res = await Axios.get('https://minpro-blog.purwadhikabootcamp.com/api/auth/',{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      const {username, email, phone, imgProfile}=res.data
       dispatch(setValue({username, email, phone, imgProfile}))
       

        
      } catch (error) {console.log(error);
      }
    }

    useEffect(()=>{
      token? keepLogin():console.log("Login First");
    },[])
  return (
       <>
      <div>

      <RouterProvider router ={router}/>
      </div>
      
       </>
    
          
  );
}

export default App;
