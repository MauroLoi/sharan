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
                Aggiorna Informazioni Account
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
    const [oldPassword, setOldPassword] = useState("")
    const hasUppercase = /[A-Z]/.test(password); // Controlla se c'è almeno una lettera maiuscola
    const hasNumber = /\d/.test(password);       // Controlla se c'è almeno un numero
    const hasSpecialChar = /[\W_]/.test(password); // Controlla se c'è almeno un carattere speciale
    const acceptedPassword = password.length >= 4 && hasUppercase && hasNumber && hasSpecialChar

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
                placeholder="Conferma Password Attuale"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
            />
            <input
                type="password"
                name="password"
                placeholder="Nuova Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
            />
            <span className="">La nuova password deve contenere:</span>
            <ul className="list-disc px-5 my-3">
                <li className={`${password.length >= 4 && "text-green-600"}`}>Almeno quattro caratteri</li>
                <li className={`${hasUppercase && "text-green-600"}`}>Almeno una lettera maiuscola</li>
                <li className={`${hasNumber && "text-green-600"}`}>Almeno un numero</li>
                <li className={`${hasSpecialChar && "text-green-600"}`}>Almeno un carattere speciale</li>
            </ul>
            <button type="submit" className={`w-full bg-primary text-white py-2 rounded ${acceptedPassword && "hover:bg-blue-600"}`} disabled={!acceptedPassword}>
                Aggiorna Password
            </button>
        </form>
    );
};

const DeleteAccount = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDeleteClick = () => {
        setShowConfirmation(true);
    };

    const handleCancelClick = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={handleDeleteClick}
                className="w-full bg-gray-500 text-white py-2  rounded hover:bg-gray-600">
                Cancella Account
            </button>

            {showConfirmation && (
                <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
                    <p className="text-lg">Sei sicuro di voler cancellare il tuo account?</p>
                    <div className="mt-2 flex gap-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                            Sì
                        </button>
                        <button
                            onClick={handleCancelClick}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                            No
                        </button>
                    </div>
                </div>
            )}
        </div>
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
                <DeleteAccount />
            </div>
        </div>
    );
};

export default Settings;
