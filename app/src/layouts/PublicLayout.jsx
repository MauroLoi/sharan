import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const PublicLayout = () => {
  return (
    <>
        <Navbar />
        <div>
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default PublicLayout