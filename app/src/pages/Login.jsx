import React from 'react'
import Montagna from '../assets/Montagna-cinese.jpg';
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='flex w-screen h-screen overflow-hidden'>
                <div className='flex flex-1 justify-center items-center h-screen bg-slate-50'>
                    <img src={logo} alt="logo" className="fixed top-2 left-2 w-24 h-auto" />
                    <div className='w-full max-w-md p-6'>
                        <div className='form-login'>
                            <h2 className='text-secondary'>Bentornato!</h2><br />
                            <form action="">
                                <label htmlFor="email" className=" text-secondary">Indirizzo Email:</label><br />
                                <input className="w-full border-2 border-gray-300 focus:border-secondary rounded-lg py-1" type="email" id="email" name="email" required /> <br /><br />
                                <label htmlFor="password" className=" text-secondary">Password:</label><br />
                                <input className="w-full border-2 border-gray-300 focus:border-secondary rounded-lg py-1" type="password" id="password" name="password" required /> <br />
                                <div className="flex justify-between items-center">
                                    <a className="text-secondary underline hover:no-underline" href="Pagina di recupero passwod">Hai dimenticato la tua Password? </a>
                                    <button type="submit" className="bg-secondary text-white py-2 px-4 rounded-lg my-4 ml-auto">Accedi</button> <br />
                                </div>
                            </form>
                        </div>
                        <div className="border-t-2 border-gray-300">
                            <br /><span>Non hai ancora un account? </span>
                            <Link to="/register" className="text-violet-700" href="Link di registrazione"> Iscriviti Ora</Link>
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