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
import Blog from "./pages/Blog";

export default function useRouterElement() {
  const routerElement = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/post-page",
      element: <PostPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/three",
      element: <ThreeDotMenu />,
    },
    {
      path: "/profile-page",
      element: <ProfilePage />,
    },
    {
      path: "/post-card",
      element: <PostCard />,
    },
    {
      path: "/pos",
      element: <About />,
    },
    {
      path: "uppos",
      element: <UpdatePost />,
    },
    {
      path: "commen",
      element: <ComentSesion />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);
  return routerElement;
}
