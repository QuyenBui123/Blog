import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Search from "./pages/Search";
import PortPage from "./pages/port-page";
import ThreeDotMenu from "./components/ThreeDotMenu";
import ProfilePage from "./pages/ProfilePage";
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
            path:'/PortPage',
            element:<PortPage/>
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
        }
    ])
    return routerElement
}