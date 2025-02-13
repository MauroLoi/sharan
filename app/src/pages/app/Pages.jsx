import React, { useEffect, useState } from 'react';
import PageCard from '../../components/app/PageCard';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { SDK } from '../../sdk';
import { setAllPages } from '../../store/slices/pagesSlice';
import DatePicker, { registerLocale } from 'react-datepicker';
import { es } from "date-fns/locale/es"

registerLocale('es', es)

const Pages = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    const pages = useSelector(state => state.pages.all);
    const [startDate, setStartDate] = useState(new Date());

    const fetchPages = async () => {
        try {
            const _pages = await SDK.pages.getAll(token);

            dispatch(setAllPages(_pages));
        } catch (error) {
            console.log(error);
            toast.error("Errore interno del server, riprova fra qualche minuto")
        }
    }

    useEffect(() => {
        if (!pages) fetchPages();
    }, []);

    return (
        <>
            <div className='bg-slate-100'>
                <div className='flex justify-between items-center p-4 gap-4 sm:gap-6 w-full mx-auto sm:px-6 lg:px-8'>
                    <div>
                        <h2>Pagine</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div>
                            <DatePicker 
                                className=""
                                selected={startDate}
                                locale="es"
                                onChange={(date) => setStartDate(date)} 
                            />
                        </div>
                        <button className='py-2 px-4 flex gap-2 items-center font-semibold ml-3 rounded shadow hover:shadow-lg transition-all cursor-pointer bg-secondary text-white'>
                            <svg className="fill-white h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/>
                            </svg>
                            Scrivi nuova pagina
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-self-center mt-8 p-6'>
                    {
                        pages && pages.map(page => (
                            <PageCard key={page._id} {...page} />
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Pages