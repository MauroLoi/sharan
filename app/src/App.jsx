import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"

import PublicLayout from "./layouts/PublicLayout"
import DashboardLayout from "./layouts/DashboardLayout"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AppHome from "./pages/app/Home"

const ProtectedRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth);

    if (auth.token) return children;
    return <Navigate to="/login" />
}

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                <Route path="/app" element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }>
                    <Route path="" element={<AppHome />} />
                </Route>
            </Routes>
        </>
    )
}

export default App

// http://localhost:5173/ -> public
// http://localhost:5173/login -> public
// http://localhost:5173/register -> public

// http://localhost:5173/app/ -> dashboard
