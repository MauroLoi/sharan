import { useState } from 'react';
import TextEditor from '../../components/app/TextEditor';
import { Link, useNavigate } from 'react-router-dom';
import { SDK } from '../../sdk';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addNewPage } from '../../store/slices/pagesSlice';

const CreatePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSave = async () => {
        try {
            const page = await SDK.pages.create({ title, content }, token);

            dispatch(addNewPage(page));
            navigate("/app/pages");
        } catch (error) {
            console.log(error);
            toast.error("Errore interno del server, riprova fra qualche minuto")
        }
    }

    return (
        <div className="h-full w-full bg-slate-100 p-6 flex flex-col gap-6 items-center">
            <div className="w-full flex justify-end">
                <Link to="/app/pages" className="py-2 px-4 flex gap-2 items-center font-semibold ml-3 rounded shadow hover:shadow-lg transition-all cursor-pointer bg-red-400 text-white">
                    Annulla
                </Link>
                <button onClick={handleSave} className="py-2 px-4 flex gap-2 items-center font-semibold ml-3 rounded shadow hover:shadow-lg transition-all cursor-pointer bg-secondary text-white">
                    <svg className="fill-white h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M48 96l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-245.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l245.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8L320 184c0 13.3-10.7 24-24 24l-192 0c-13.3 0-24-10.7-24-24L80 80 64 80c-8.8 0-16 7.2-16 16zm80-16l0 80 144 0 0-80L128 80zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
                    </svg>
                    Salva Pagina
                </button>
            </div>
            <div className="w-full">
                <div className="flex flex-col gap-2 bg-white p-10 rounded-lg shadow-md">
                    <label htmlFor="title" className="font-semibold">Titolo della pagina</label>
                    <input className="w-full h-10 p-4 border-b-2 focus:outline-none" type="text" id="title" value={title} onInput={({ target: { value } }) => setTitle(value)} />
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col gap-4 bg-white p-10 rounded-lg shadow-md">
                    <label htmlFor="title" className="font-semibold">Contenuto della pagina</label>
                    <TextEditor
                        className="w-full h-[600px] min-h-[600px] shadow"
                        onChange={(value) => setContent(value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreatePage;
