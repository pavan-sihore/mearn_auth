import { Outlet } from "react-router-dom";
import Header from "../../components/public/Header";

export default function MainLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
