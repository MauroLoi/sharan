import { useState } from "react"
import imageSrc from "../assets/lago-di-montagna.jpg"
import icon from "../assets/logo.svg"
import { Link } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
    })


    const handleInput = (event) => {
        const { name, value, type, checked } = event.target;
        setForm((form) => ({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form)
        if (form.confirmPassword !== form.password) {
            alert("Le password devono essere uguali");
            return;
        }
        alert("Ti sei iscritto!")
    }

    return (
        <div className="flex h-screen">
            <div className="flex-1 flex items-center justify-center p-8 bg-slate-50">
                <div className="w-full max-w-lg bg-slate-50 rounded-lg p-8">
                <div className="absolute top-2 left-2">
                    <img src={icon} alt="sharan-icon" className="w-24 h-24"/>
                </div>
                    <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                        Crea il tuo Account
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="name" className="block text-sm font-medium text-secondary">
                                Nome
                            </label>
                            <input type="text" id="name" name="name" value={form.name} onInput={handleInput} className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                                Cognome
                            </label>
                            <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-sm font-medium text-secondary">
                                Email
                            </label>
                            <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block text-sm font-medium text-secondary">
                                Password
                            </label>
                            <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                                Conferma Password
                            </label>
                            <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" />
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