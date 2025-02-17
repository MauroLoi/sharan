import React, { useEffect, useState } from 'react';
import GrowthPath from "../../components/app/GrowthPath";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SDK } from '../../sdk';
import { setCurrentPath } from '../../store/slices/pathsSlice';
import { toast } from 'react-toastify';

const CurrentPath = () => {
    const dispatch = useDispatch();
    const { path_id } = useParams();
    const { token } = useSelector(state => state.auth);
    const _path = useSelector(state => state.paths.current);

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

    const fetchPath = async () => {
        try {
            const path = await SDK.paths.getOneById(token, path_id);
            dispatch(setCurrentPath(path));
        } catch (error) {
            console.error(error);
            toast.error("Errore nel caricamento del percorso");
        }
    }

    useEffect(() => {
        if (!_path) fetchPath();
    }, [_path]);

    return (
        <div className="min-h-screen p-8 bg-slate-100">
            {/* Titolo della pagina */}
            <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                Percorso di Meditazione e Calma
            </h1>

            {/* Componente GrowthPath */}
            <div className="max-w-2xl mx-auto mb-6">
                {
                    _path?.path && _path?.missions && (
                        <GrowthPath
                            title={_path.path.title}
                            description={_path.path.short_content}
                            pathDescription={_path.path.content}
                            image={_path.path.cover_image}
                            missions={_path.missions.map(({ mission, completed }) => ({ text: mission.text, completed }))}
                            rewardMessage={_path.path.reward_message}
                            backgroundMusic="https://www.bensound.com/bensound-music/bensound-relaxing.mp3"
                        />
                    )
                }
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

export default CurrentPath;
