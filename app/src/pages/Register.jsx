import imageSrc from "../assets/lago-di-montagna.jpg"
import icon from "../assets/logo.svg"
import { Link, useNavigate } from "react-router-dom";
import { getDataFromEntries } from "../utilities/form";
import { toast } from "react-toastify";
import { SDK } from "../sdk";

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = getDataFromEntries(e.target);

        if (payload.confirm_password !== payload.password) {
            toast.error("Le password devono essere uguali");
            return;
        }

        try {
            delete payload.confirm_password;

            await SDK.auth.register(payload);

            toast.success("Ti sei registrato correttamente, ora puoi effettuare l'accesso");
            navigate("/login");
        } catch(err) {
            console.log(err);
            toast.error("Qualcosa è andato storto, riprova fra qualche minuto");
        }
    }

    return (
        <div className="flex h-screen">
            <div className="flex-1 flex items-center justify-center p-8 bg-slate-50">
                <div className="w-full max-w-lg bg-slate-50 rounded-lg p-8">
                    <div className="absolute top-2 left-2">
                        <Link to="/">
                            <img src={icon} alt="sharan-icon" className="w-24 h-24" />
                        </Link>
                    </div>
                    <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                        Crea il tuo Account
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="first_name" className="block text-sm font-medium text-secondary">
                                Nome
                            </label>
                            <input type="text" id="first_name" name="first_name" className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="last_name" className="block text-sm font-medium text-secondary">
                                Cognome
                            </label>
                            <input type="text" id="last_name" name="last_name" className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-sm font-medium text-secondary">
                                Email
                            </label>
                            <input type="email" id="email" name="email" className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block text-sm font-medium text-secondary">
                                Password
                            </label>
                            <input type="password" id="password" name="password" className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="confirm_password" className="block text-sm font-medium text-secondary">
                                Conferma Password
                            </label>
                            <input type="password" id="confirm_password" name="confirm_password" className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="flex items-center justify-end mt-6">
                            <button type="submit" className="p-2 bg-secondary text-slate-50 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-secondary">
                                Registrati
                            </button>
                        </div>
                        <div className="border-solid border-b-[1px] border-slate-500 p-2 opacity-30 "></div>
                        <p className="p-6 pl-0">Hai già un Account? <Link to="/login" className="text-violet-700 cursor-pointer">Accedi</Link></p>
                    </form>
                </div>
            </div>
            <div className="hidden md:block flex-1">
                <img src={imageSrc} alt="Lago" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default Register