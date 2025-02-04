import React, { useState } from "react";

const InfoForm = () => {
    const [info, setInfo] = useState({ first_name: "", last_name: "" });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Test aggiornamento Nome o Cognome:", info);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Cambia Nome e Cognome</h3>
            <input
                type="text"
                name="first_name"
                placeholder="Nome"
                value={info.first_name}
                onChange={handleChange}
                className="w-full p-2 mb-3 border rounded"
            />
            <input
                type="text"
                name="last_name"
                placeholder="Cognome"
                value={info.last_name}
                onChange={handleChange}
                className="w-full p-2 mb-3 border rounded"
            />
            <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600">
                Aggiorna Info
            </button>
        </form>
    );
};

const EmailForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Test aggiornamento Email:", email);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Cambia Email</h3>
            <input
                type="email"
                name="email"
                placeholder="Nuova Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
            />
            <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600">
                Aggiorna Email
            </button>
        </form>
    );
};

const PasswordForm = () => {
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Test aggiornamento password:", password);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Cambia Password</h3>
            <input
                type="password"
                name="password"
                placeholder="Nuova Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
            />
            <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600">
                Aggiorna Password
            </button>
        </form>
    );
};

const Settings = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-slate-100 p-6">
            <h2 className="text-2xl font-bold mb-6">Impostazioni</h2>
            <div className="w-full max-w-md space-y-6">
                <InfoForm />
                <EmailForm />
                <PasswordForm />
            </div>
        </div>
    );
};

export default Settings;
