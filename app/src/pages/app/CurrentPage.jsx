import { Link, useParams } from 'react-router-dom';
import { SDK } from '../../sdk';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setCurrentPage } from '../../store/slices/pagesSlice';
import { useEffect } from 'react';
import SentimentLabel from '../../components/shared/SentimentLabel';
import BackButton from '../../components/shared/BackButton';

const CurrentPage = () => {
    const dispatch = useDispatch();
    const { page_id } = useParams();
    const { token } = useSelector(state => state.auth);
    const { current: page } = useSelector(state => state.pages);

    const fetchData = async () => {
        try {
            const page = await SDK.pages.getOneById(page_id, token);

            dispatch(setCurrentPage(page));
        } catch (error) {
            console.log(error);
            toast.error("Errore interno del server, riprova fra qualche minuto")
        }
    }

    useEffect(() => {
        if (!page || page._id != page_id) fetchData();
    }, [page_id]);

    return (
        <div className="h-full w-full bg-slate-100 p-6 flex flex-col gap-6 items-center">
            <div className="w-full">
                <BackButton to="/app/pages">Tutte le pagine</BackButton>
                <div className="flex flex-col gap-4 bg-white p-10 rounded-lg shadow-md">
                    {
                        page && (
                            <>
                                <div className="flex justify-between">
                                    <span>
                                        <SentimentLabel sentiment_score={page.sentiment_score} />
                                    </span>
                                    <span>
                                        {new Date(page.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                                <h2>{page.title}</h2>
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CurrentPage;
