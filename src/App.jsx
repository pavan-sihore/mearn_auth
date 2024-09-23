import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/public/MainLayout";
import SingleLayout from "./layouts/public/SingleLayout";

import Home from "./pages/public/Home";
import AboutUs from "./pages/public/AboutUs";
import Profile from "./pages/public/Profile";
import SignIn from "./pages/admin/login/SignIn";
import SignUp from "./pages/admin/signup/SignUp";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="/" element={<SingleLayout/>}>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Route>
      </Route>
    )
);

  return (
    <RouterProvider router={router}/>
  );
}

export default App
