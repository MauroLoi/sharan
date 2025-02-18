import React, { useState, useEffect } from "react";

const GrowthPath = ({
    title = "Titolo del Percorso",
    description = "Descrizione breve del percorso.",
    pathDescription = "Descrizione dettagliata del percorso.",
    image = "",
    missions = [],
    rewardMessage = "Complimenti! Hai completato il percorso!",
}) => {
    const [userMissions, setUserMissions] = useState(missions); // Stato per le missioni
    const [showReward, setShowReward] = useState(false); // Stato per il messaggio di ricompensa

    // Calcola la percentuale di completamento delle missioni
    const completedCount = userMissions.filter(m => m.completed).length;
    const completion = userMissions.length > 0 ? (completedCount / userMissions.length) * 100 : 0;

    // Mostra il messaggio di ricompensa se tutte le missioni sono completate
    useEffect(() => {
        setShowReward(completion === 100);
    }, [completion]);

    // Inverte lo stato di completamento della missione
    const toggleMission = (index) => {
        const newMissions = [...userMissions];
        newMissions[index].completed = !newMissions[index].completed;
        setUserMissions(newMissions);
    };

    return (
        <div className="space-y-4 w-full flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-200 relative">
            {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />}
            
            <div className="p-6 pb-0">
                <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
                <p className="text-slate-600">{description}</p>
            </div>

            {pathDescription && (
                <div className="text-slate-700 p-6 pb-0">
                    <h3 className="font-medium">Descrizione del Percorso</h3>
                    <p>{pathDescription}</p>
                </div>
            )}

            {/* Lista delle missioni */}
            <div className="p-6 pb-0">
                <h3 className="font-medium text-slate-700 mb-4">Micro Missioni</h3>
                <ul className="list-disc list-inside text-slate-700 flex flex-col gap-1">
                    {userMissions.map((mission, index) => (
                        <li key={index} className={`flex items-center gap-2 ${mission.completed ? "text-green-600" : "text-red-500"}`}>
                            <button
                                onClick={() => toggleMission(index)}
                                className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all ${mission.completed ? "bg-green-500 border-green-500" : "border-red-500"}`}
                            >
                                {mission.completed && <span className="text-white">✓</span>}
                            </button>
                            <span className={`cursor-pointer ${mission.completed ? "text-green-600" : "text-red-500"}`} onClick={() => toggleMission(index)}>{mission.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Barra di progresso */}
            <div className="p-6 flex flex-col gap-4">
                <h3 className="font-medium text-slate-700">Completamento</h3>
                <div className="w-full bg-slate-200 rounded h-4 overflow-hidden">
                    <div className="h-full transition-all bg-blue-600" style={{ width: `${completion}%` }}></div>
                </div>
            </div>

            {/* Messaggio di ricompensa */}
            {showReward && (
                <div className="absolute top-0 m-0 inset-0 flex items-center justify-center bg-white bg-opacity-95 rounded-lg p-6 text-center shadow-lg" style={{ margin: 0 }}>
                    <h3 className="text-2xl font-bold text-green-600">{rewardMessage}</h3>
                </div>
            )}
        </div>
    );
};

export default GrowthPath;
