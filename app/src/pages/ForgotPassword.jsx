import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import worry from "../assets/worry2.jpg";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = (e) => {
        e.preventDefault();
        console.log('Recupero password avviato per:', email);
        setMessage("Se l'indirizzo email è registrato, riceverai un link per reimpostare la password.");
    };

    return (
        <div className="flex w-screen h-screen overflow-hidden">
            <div className="flex flex-1 justify-center items-center h-screen bg-slate-50">
                
                <div className="w-full max-w-md p-6">
                    <div className="form-login">
                        <h2 className="text-secondary text-2xl font-bold mb-6">Recupero Password</h2>
                        <p className="text-gray-600 mb-4">Inserisci il tuo indirizzo email per ricevere un link di recupero.</p>
                        <form onSubmit={handleForgotPassword} className="space-y-4">
                            <div className="mb-5">
                                <label htmlFor="email" className="block text-sm font-medium text-secondary">Indirizzo Email:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    placeholder="Inserisci la tua email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 shadow-md bg-slate-50 border border-slate-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 hover:border-slate-500 focus:outline-none focus:ring-0"
                                    required
                                />
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-secondary text-slate-50 p-2 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-secondary transition"
                            >
                                Invia Link di Recupero
                            </button>
                        </form>
                        {message && <p className="text-green-500 mt-4">{message}</p>}
                        <div className="mt-4 border-t-2 border-gray-300 pt-4">
                            <Link to="/login" className="text-violet-700 cursor-pointer">
                                Torna al login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:block flex-1 h-full'>
                <img src={worry} alt="Worry Less Live More" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default ForgotPassword;
