import { Link } from 'react-router-dom'
import SentimentLabel from '../shared/SentimentLabel';

const PageCard = ({ _id, title, content, createdAt, sentiment_score, className = '' }) => {
    return (
        <>
            <div className={`bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col justify-between ${className}`}>
                <div>
                    <h4 className='mb-2'>{title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: content.length > 100 ? `${content.substring(0, 150)}...` : content  }}></p>
                </div>
                <div>
                    <div className='py-4 flex items-center gap-2'>
                        <p>Scritta il:</p>
                        <p>{new Date(createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className='mt-2 flex justify-between'>
                        <div className='flex gap-2'>
                            <span>Sentimento:</span>
                            <SentimentLabel sentiment_score={sentiment_score} />
                        </div>
                        <Link to={`/app/pages/${_id}`} className='group flex gap-1 items-center'>
                            <span className='group-hover:text-primary'>Vedi pagina</span>
                            <svg className='group-hover:fill-primary fill-secondary' xmlns="http://www.w3.org/2000/svg" width='10px' height='10px' viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageCard