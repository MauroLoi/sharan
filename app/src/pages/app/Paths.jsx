import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { SDK } from '../../sdk'
import { setAllPaths } from '../../store/slices/pathsSlice'

import PathCard from '../../components/PathCard'
import percorsoImg from '../../assets/percorsoImg.png'

const getStatus = (missions) => {
    const completed = missions.filter(mission => mission.completed).length;
    const total = missions.length;
    return completed === total ? 'Fatto' : completed === 0 ? 'Scopri' : 'In corso';
}

const Paths = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    const { all: paths } = useSelector(state => state.paths);

    const fetchPaths = async () => {
        try {
            const paths = await SDK.paths.getAll(token);
            dispatch(setAllPaths(paths));
        } catch (error) {
            console.error(error);
            toast.error('Errore nel caricamento dei percorsi');
        }
    }

    useEffect(() => {
        if (!paths) fetchPaths();
    }, []);

    return (
        <>
            <div className="flex gap-3 justify-end pt-8">
                <img src={percorsoImg} alt="logo" className='p-5 pl-0' />
                {
                    paths && paths.map(({ _id, path, missions }) => (
                        <PathCard 
                            key={path._id}
                            image={path.cover_image}
                            title={path.title}
                            description={path.short_content}
                            period={path.period}
                            to={`/app/paths/${_id}`}
                            status={getStatus(missions)}
                        />
                    ))
                }
            </div>
        </>

    )
}

export default Paths