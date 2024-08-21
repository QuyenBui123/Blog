import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/Creatpost";
import Search from "./pages/Search";
import ThreeDotMenu from "./components/ThreeDotMenu";
import ProfilePage from "./pages/ProfilePage";
import PostCard from "./components/PostCard";
import PostPage from "./pages/post-page";
import UpdatePost from "./pages/UpdatePost";
import ComentSesion from "./components/commetn";
import Tag from "./pages/Tag";


export default function useRouterElement(){
    const routerElement=useRoutes([
        {path:'/',
            element:<Home/>
        },
        {
            path:'/Dashboard',
            element:<Dashboard/>
        },
        {
            path:'/SignIn',
            element: <SignIn/>
        },
        {
            path:'SignUp',
            element: <SignUp/>
        },
        {
            path:'/About',
            element: <About/>
        },{
            path:'/Search',
            element:<Search/>
        },{
            path:'/PostPage',
            element:<PostPage/>
        },
        {
            path:'/Dashboard',
            element:<Dashboard/>
        },{
            path:'/Three',
            element:<ThreeDotMenu/>
        },{
            path:'/ProfilePage',
            element:<ProfilePage/>
        },{
            path:'/PostCard',
            element:<PostCard/>
        },{
            path:'/pos',
            element:<About/>
        },{
            path:'uppos',
            element:<UpdatePost/>
        },{
            path:'commen',
            element:<ComentSesion/>
        },{
            path:"/Tag",
            element:<Tag/>
        }

    ])
    return routerElement
}