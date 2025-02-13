import React from 'react';
import { Link } from 'react-router-dom'

const PageCard = ({ _id, title, content, createdAt, sentiment_score, className = '' }) => {
    return (
        <>
            <div className={`bg-slate-50 shadow-lg rounded p-4 sm:p-6 ${className}`}>
                <h4 className='mb-1'>{title}</h4>
                <p className='pb-5'>{content}</p>
                <label htmlFor="">Oggi è il:</label>
                <span className='px-2'>{createdAt}</span>
                <div className='mt-2 flex justify-between'>
                    <div className='flex'>
                        <label htmlFor="">Sentimento:</label>
                        <span></span>
                    </div>
                    <Link to={`/app/pages/${_id}`} className='group flex gap-1 items-center'>
                        <span className='group-hover:text-primary'>Vedi pagina</span>
                        <svg className='group-hover:fill-primary fill-secondary' xmlns="http://www.w3.org/2000/svg" width='10px' height='10px' viewBox="0 0 448 512">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PageCard