import { Outlet, useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const PublicLayout = () => {
  const location = useLocation()
  const exculdePatname = ["/login", "/register"]

  if (exculdePatname.includes(location.pathname)) {
    return <Outlet/>
  }
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