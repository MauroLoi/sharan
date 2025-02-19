import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/slices/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <nav className="hidden sm:flex items-center w-full bg-transparent mx-auto px-4 p-4 font-semibold sm:px-6 lg:px-8 absolute top-0 left-0 z-20">
                <div>
                    <Link to="/" className="flex items-center">
                        <h2 className="flex text-slate-700">Sharan</h2>
                    </Link>
                </div>
                <div className="flex-grow flex justify-center space-x-6 font-semibold pl-32 text-lg">
                    <Link to="/" className="text-slate-700">Home</Link>
                    <Link to="/" className="text-slate-700">Chi siamo</Link>
                    <Link to="/" className="text-slate-700">Servizi</Link>
                    <Link to="/" className="text-slate-700">Contattaci</Link>
                </div>
                <div className="flex items-center gap-4 p-4 text-xl">
                    {auth.token == null ? (
                        <Link to="/login" className="text-slate-700">Accedi</Link>
                    ) : (
                        <>
                            <Link to="/app/pages" className="text-slate-700 font-bold">{auth.user.first_name} {auth.user.last_name}</Link>
                            <button onClick={handleLogout} className="text-slate-700 font-bold">Logout</button>
                        </>
                    )}
                </div>
            </nav>
            <div className="sm:hidden flex justify-between gap-4 bg-secondary p-4">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-50">
                    ☰
                </button>
                <h2 className="text-slate-50 flex-1  text-left">Sharan</h2>
                <div className="flex items-center gap-4">
                    {auth.token == null ? (
                        <Link to="/login" className="text-slate-50">Accedi</Link>
                    ) : (
                        <>
                            <Link to="/app" className="text-slate-50 cursor-pointer">{auth.user.first_name} {auth.user.last_name}</Link>
                            <button onClick={handleLogout} className="text-slate-50">Logout</button>
                        </>
                    )}
                </div>
            </div>
            <div 
                className={`sm:hidden fixed inset-0 bg-secondary transition-opacity duration-300 ease-in-out z-40 ${isMenuOpen ? "opacity-95" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsMenuOpen(false)}
            >
                <div className={`fixed w-screen h-screen inset-0 bg-secondary flex flex-col items-center justify-center z-50 transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-slate-50">
                        ✖
                    </button>
                    <nav className="flex flex-col space-y-6 text-center">
                        <Link to="/" className="text-white font-semibold text-2xl" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/" className="text-white font-semibold text-2xl" onClick={() => setIsMenuOpen(false)}>Chi siamo</Link>
                        <Link to="/" className="text-white font-semibold text-2xl" onClick={() => setIsMenuOpen(false)}>Servizi</Link>
                        <Link to="/" className="text-white font-semibold text-2xl" onClick={() => setIsMenuOpen(false)}>Contattaci</Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;

