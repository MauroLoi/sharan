import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../store/slices/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <nav className="flex items-center w-full shadow bg-slate-50">
                <div>
                    { /* LOGO */}
                </div>
                <div className="flex items-center flex-grow gap-2 p-4">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                </div>
                <div className="flex items-center gap-2 p-4">
                    {
                        auth.token == null ? (
                            <>
                                <div>
                                    <Link to="/login">Login</Link>
                                </div>
                                <div>
                                    <Link to="/register">Register</Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <Link to="/app">{auth.user.first_name} {auth.user.last_name}</Link>
                                </div>
                                <div>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar