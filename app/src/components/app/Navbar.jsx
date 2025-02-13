import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";


const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    if (!auth.user) return null;

    return (
        <nav className="flex justify-end rounded">
            <div className="border-solid border-x-0 border-t-0 border-b-2 p-5 gap-4 w-[94%] flex justify-end">
                <div>
                    <Link to="/app" className=" hover:text-slate-500 font-semibold">
                        {auth.user.first_name} {auth.user.last_name}
                    </Link>
                </div>
                <div className="border-solid border-y-0 border-r-2 border-l-0"></div>
                <div>
                    <button onClick={handleLogout} className=" hover:text-red-400 font-semibold pr-3"> Logout </button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;

