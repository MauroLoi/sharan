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
            <nav className="flex items-center w-full bg-secondary mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <Link to="/" className="flex items-center">
                        <svg className="flex float-left" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2048 2048" width="100" height="100">
                            <path transform="translate(1e3 533)" d="m0 0h26l39 3 35 4 30 7 19 5 26 8 28 11 30 14 17 9 11 6 15 9 15 10 18 13 14 11 13 11 10 9 15 14 19 19 7 8 11 13 15 20 11 16 16 25 13 23 12 25 9 21 10 28 10 35 9 42 3 32v73l-2 25-9 45-11 40-8 23-9 22-14 29-12 23-11 17-11 16-10 14-13 16-11 12-9 11-27 27-11 9-10 9-14 11-15 11-17 11-15 9-14 8-23 12-27 12-21 8-24 8-22 6-39 8-38 5-22 2h-42l-34-3-35-5-37-8-31-9-25-9-23-10-38-19-20-12-31-21-12-9-14-12-7-7-8-7-23-23-7-8-7-7-22-28-10-14-12-18-9-15-13-24-10-21-11-28-12-36-6-19-8-44-3-29-1-15v-45l2-33 3-21 5-28 3-18 12-34 6-20 11-24 5-12 10-18 8-16 7-10 7-11 10-14 8-12 13-16 9-11 15-16 10-11 8-7 12-11 11-9 16-13 18-13 21-14 25-15 27-14 20-9 21-8 21-7 29-8 36-8 40-5zm10 61-28 1-21 2-43 8-30 8-26 9-21 9-17 8-19 10-22 13-10 7-17 12-16 13-15 13-16 15-11 11-7 8-10 12-15 20-14 20-12 20-7 12-12 26-11 28-9 27-8 31-5 31-2 17-1 19v29l2 30 5 35 6 27 7 25 10 29 11 25 12 23 11 18 12 18 12 16 11 13 9 11 7 7 7 8 10 10 8 7 12 11 10 8 19 14 18 12 19 11 32 16 14 6 22 8 23 7 31 8 34 6 20 2 21 1h33l32-2 20-3 35-7 25-7 29-10 20-8 16-8 24-13 22-14 18-13 17-13 14-12 7-7 2-1v-2l4-2 12-12 7-8 12-14 11-15 11-14 9-13 9-16 11-19 15-33 13-37 4-12 10-44 5-32 1-17v-35l-2-24-5-35-8-31-12-36-11-28-13-26-12-21-13-19-12-16-13-16-8-10-15-16-15-15-8-7-14-12-13-10-20-14-19-12-18-10-29-14-23-9-27-9-25-7-38-7-27-3z" fill="#FEFEFE" />
                            <path transform="translate(751,758)" d="m0 0h7l12 6 10 9 11 9 9 6 9 5 16 6 10 3 21 2 460 1 8 2 11 6 5 5 6 9 2 5v18l-4 8-7 8-8 4-12 3h-29l-15-1v407l-2 12-5 9-7 7-8 4-3 1h-10l-12-4-6-4-6-8-4-11-2-14v-343l1-55h-64v39l-1 201-1 17-4 26-7 25-10 24-12 22-9 14-10 13-14 15-12 12-14 11-15 10-23 12-24 9-31 7-17 2h-41l-26-3-26-6-20-7-22-10-16-10-14-10-11-9-10-9-9-9-11-14-11-15-11-19-8-18-5-13-7-29-1-8-1-19v-44l4-11 6-8 7-6 6-3 11-1 10 3 9 7 6 10 3 8 1 4 1 44 2 21 5 17 7 16 7 13 12 16 9 10v2l4 2 7 7 18 13 12 7 20 8 20 6 19 3h39l21-3 24-8 16-8 16-10 11-9 5-5 11-12 11-15 6-10 4-7 5-10 9-28 4-22 1-185 1-5-5 5-9 11-15 16-12 11-16 11-17 9-8 2 10 17 7 18 3 13v36l-5 21-5 13-9 16-13 15-7 7-13 9-10 5-15 5-13 2h-24l-15-2-14-5-11-6-9-7-10-10-8-15-1-4v-12l3-8 5-8 6-5 9-5 9-1 10 5 14 10 9 5 4 1h15l10-4 9-6 3-3h2l9-18 1-5v-16l-3-12-7-13-9-10-10-9-8-5-15-6-17-3h-17l-12 2-21 9-7 2h-9l-11-4-8-7-5-7-2-11v-8l2-10 6-9 7-7 14-8 8-4 14-3 21-2h10l21 2 17 3 17 6 4 2 10-1 17-4 24-12 10-7 7-6 9-11 7-8 11-16 3-5-29 1h-130l-25-1-32-4-13-4-19-8-15-9-13-10-10-9-9-10-7-11-4-9-1-4v-10l5-12 6-7z" fill="#FEFEFE" />
                            <path transform="translate(1012,643)" d="m0 0h16l12 3 15 9 11 11 8 15 2 8v20l-3 12-7 13-9 10-10 7-8 4-11 2h-16l-13-3-12-7-10-9-8-13-5-14-1-6v-14l3-12 7-13 8-9 11-7 9-5z" fill="#FEFEFE" />
                        </svg>
                        <h2 className="flex text-slate-50">Sharan</h2>
                    </Link>
                </div>
                <div className="flex items-center flex-grow gap-4 p-4 justify-center space-x-6  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <Link to="/" className="text-slate-50">Home</Link>
                    </div>
                    <div>
                        <Link to="/" className="text-slate-50">Chi siamo</Link>
                    </div>
                    <div>
                        <Link to="/" className="text-slate-50">Servizi</Link>
                    </div>
                    <div>
                        <Link to="/" className="text-slate-50">Contattaci</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4">
                    {
                        auth.token == null ? (
                            <>
                                <div>
                                    <Link to="/login" className="text-slate-50">Accedi</Link>
                                </div>
                                <div>
                                    <Link to="/register" className="text-slate-50">Registrati</Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <Link to="/app" className="text-slate-50">{auth.user.first_name} {auth.user.last_name}</Link>
                                </div>
                                <div>
                                    <button onClick={handleLogout} className="text-slate-50">Logout</button>
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