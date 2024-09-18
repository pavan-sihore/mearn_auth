import {createBrowserRouter, Route, createRoutesFromElements} from "react-router-dom";
import Home from "../pages/public/Home";
import AboutUs from "../pages/public/AboutUs";
import Profile from "../pages/public/Profile";
import MainLayout from "../layouts/public/MainLayout";

export default function MainRouter() {

{/* <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/> */}

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Route>
        )
    );

  return router;
}
