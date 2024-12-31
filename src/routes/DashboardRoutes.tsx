import { Route, Routes } from "react-router-dom"
import AboutPage from "../pages/aboutPage/AboutPage"
import ConocelosPage from "../pages/conocelosPage/ConocelosPage"
import DogPage from "../pages/DogPage/DogPage"
import DonacionesPage from "../pages/donacionesPage/DonacionesPage"
import CastracionesPage from "../pages/castraciones/CastracionesPage"
import EstamosTrabajandoPage from "../pages/estamosTrabajando/EstamosTrabajandoPage"
import Error404Page from "../pages/error404/Error404Page"
import LoginPage from "../pages/auth/LoginPage"
import AgregarPage from "@/pages/agregarPage/AgregarPage"


const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<AboutPage/>}/>
        <Route path="/conocelos" element={<ConocelosPage/>}/>
        <Route path="/add" element={<AgregarPage/>}/>
        <Route path="/colaborar" element={<DonacionesPage/>}/>
        <Route path="/castracion" element={<CastracionesPage/>}/>
        <Route path="/conocelos/:id" element={<DogPage/>}/>
        <Route path="/notaccess" element={<EstamosTrabajandoPage/>}/>
        <Route path="/auth/login" element={<LoginPage/>} />
        <Route path="*" element={<Error404Page/>} />
    </Routes>
  )
}

export default DashboardRoutes