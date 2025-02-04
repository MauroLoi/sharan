import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
    return (
        <>
            <nav></nav>
            <div>
                <div></div>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default DashboardLayout