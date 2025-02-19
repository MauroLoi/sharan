import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"

import PublicLayout from "./layouts/PublicLayout"
import DashboardLayout from "./layouts/DashboardLayout"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Pages from "./pages/app/Pages"
import AppSettings from "./pages/app/Settings"
import CreatePage from "./pages/app/CreatePage"
import AppPaths from "./pages/app/Paths"
import ProgressAnalytics from "./components/ProgressAnalytics"
import CurrentPath from "./pages/app/CurrentPath"
import CurrentPage from "./pages/app/CurrentPage"

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
                    <Route path="pages" element={<Pages />} />
                    <Route path="pages/create" element={<CreatePage />} />
                    <Route path="pages/:page_id" element={<CurrentPage />} />
                    <Route path="analytics" element={<ProgressAnalytics />} />
                    <Route path="settings" element={<AppSettings />} />
                    <Route path="paths" element={<AppPaths />} />
                    <Route path="paths/:path_id" element={<CurrentPath />} />
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
