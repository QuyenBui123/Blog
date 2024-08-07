import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
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
        }
    ])
    return routerElement
}