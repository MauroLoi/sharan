import React from 'react'
import Montagna from '../assets/Montagna-cinese.jpg';
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='flex w-screen h-screen overflow-hidden'>
                <div className='flex flex-1 justify-center items-center h-screen bg-slate-50'>
                    <img src={logo} alt="logo" className="fixed top-2 left-2 w-24 h-24" />
                    <div className='w-full max-w-md p-6'>
                        <div className='form-login'>
                            <h2 className='text-secondary'>Bentornato!</h2><br />
                            <form action="">
                                <label htmlFor="email" className="block text-sm font-medium text-secondary">Indirizzo Email:</label><br />
                                <input className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" type="email" id="email" name="email" required /> <br /><br />
                                <label htmlFor="password" className="block text-sm font-medium text-secondary">Password:</label><br />
                                <input className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0" type="password" id="password" name="password" required /> <br />
                                <div className="flex justify-between items-center">
                                    <a className="text-secondary underline hover:no-underline" href="Pagina di recupero passwod">Hai dimenticato la tua Password? </a>
                                    <button type="submit" className="bg-secondary text-slate-50 p-2 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-secondary my-4 ml-auto">Accedi</button> <br />
                                </div>
                            </form>
                        </div>
                        <div className="border-t-2 border-gray-300">
                            <br /><span className="font-medium text-secondary">Non hai ancora un account? </span>
                            <Link to="/register" className="text-violet-700 cursor-pointer" href="Link di registrazione"> Iscriviti Ora</Link>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block flex-1 h-full'>
                    <img src={Montagna} alt="Montagna Cinese" className="w-full h-full object-cover" />
                </div>
            </div>
        </>
    )
}

export default Login