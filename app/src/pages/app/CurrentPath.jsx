import React, { useEffect, useState } from 'react';
import GrowthPath from "../../components/app/GrowthPath";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SDK } from '../../sdk';
import { setCurrentPath } from '../../store/slices/pathsSlice';
import { toast } from 'react-toastify';
import BackButton from '../../components/shared/BackButton';

const CurrentPath = () => {
    const dispatch = useDispatch();
    const { path_id } = useParams();
    const { token } = useSelector(state => state.auth);
    const _path = useSelector(state => state.paths.current);

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
        if (!_path || _path._id != path_id) fetchPath();
    }, [_path]);

    useEffect(() => {
        return () => {
            dispatch(setCurrentPath(null));
        }
    }, []);

    return (
        <div className="min-h-screen p-8 bg-slate-100">
            <BackButton to="/app/paths">Tutti i percorsi</BackButton>

            <div className="max-w-4xl mx-auto mb-6">
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
        </div>
    );
};

export default CurrentPath;
