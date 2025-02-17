import React, { useState } from 'react';
import GrowthPath from "../../components/app/GrowthPath";

const ExamplePath = () => {
    const [audio] = useState(new Audio("https://www.bensound.com/bensound-music/bensound-relaxing.mp3"));
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    const handlePlayMusic = () => {
        if (isMusicPlaying) {
            audio.pause();
        } else {
            audio.play().catch(error => console.error("Errore nella riproduzione audio:", error));
        }
        setIsMusicPlaying(!isMusicPlaying);
    };

    return (
        <div className="min-h-screen p-8 bg-slate-100">
            {/* Titolo della pagina */}
            <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                Percorso di Meditazione e Calma
            </h1>

            {/* Componente GrowthPath */}
            <div className="max-w-2xl mx-auto mb-6">
                <GrowthPath
                    title="Percorso di Meditazione Guidata"
                    description="Un viaggio di 7 giorni per raggiungere la calma interiore e migliorare il benessere mentale."
                    pathDescription="Questo percorso ti guiderà attraverso sessioni di meditazione strutturate per aiutarti a rilassarti, ridurre lo stress e coltivare la consapevolezza. Ogni giorno avrai una nuova missione per approfondire la tua pratica."
                    image="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    missions={[
                        { text: "Giorno 1: Medita per 5 minuti", completed: false },
                        { text: "Giorno 2: Ascolta una meditazione guidata", completed: false },
                        { text: "Giorno 3: Crea un angolo di meditazione in casa", completed: false },
                        { text: "Giorno 4: Pratica la respirazione consapevole", completed: false },
                        { text: "Giorno 5: Fai una passeggiata in silenzio", completed: false },
                        { text: "Giorno 6: Scrivi un diario delle emozioni", completed: false },
                        { text: "Giorno 7: Medita per 10 minuti e rifletti sull'esperienza", completed: false },
                    ]}
                    rewardMessage="Hai completato il percorso! Ora goditi un momento di pace e soddisfazione."
                    backgroundMusic="https://www.bensound.com/bensound-music/bensound-relaxing.mp3"
                />
            </div>

            {/* Pulsante per avviare/stoppare la musica */}
            <div className="text-center">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={handlePlayMusic}
                >
                    {isMusicPlaying ? "Ferma Musica 🎶" : "Avvia Musica Rilassante 🎵"}
                </button>
            </div>
        </div>
    );
};

export default ExamplePath;
