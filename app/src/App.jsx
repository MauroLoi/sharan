import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"


import PublicLayout from "./layouts/PublicLayout"
import DashboardLayout from "./layouts/DashboardLayout"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AppHome from "./pages/app/Home"
import Pages from "./pages/app/Pages"
import AppSettings from "./pages/app/Settings"
import AppDiary from "./pages/app/Diary"

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
                    <Route path="pages" element={<Pages />} />
                    <Route path="pages/create" element={<AppDiary />} />
                    <Route path="settings" element={<AppSettings />} />
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

// http://localhost:5173/app/pages -> Page.jsx -> CREATE + READ ALL + EDIT + DELETE
// http://localhost:5173/app/pages/:id -> SinglePage.jsx -> READ SINGLE + DELETE + EDIT

// // http://localhost:5173/app/pathways -> Pathway.jsx

// http://localhost:5173/app/analytics -> Analityc.jsx -> READ + GRAPH

// http://localhost:5173/app/settings -> Settings.jsx -> FORM PROFILE SETTINGS -> info + email + password
