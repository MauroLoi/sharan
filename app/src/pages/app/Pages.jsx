import React from 'react';
import { Link } from 'react-router-dom';
import PageCard from '../../components/PageCard';

const Pages = () => {

    return (
        <>
            <div className='bg-slate-100'>
                <div className='flex justify-between items-center p-4 gap-4 sm:gap-6 w-full mx-auto sm:px-6 lg:px-8'>
                    <div>
                        <h2>Pagine</h2>
                    </div>
                    <div>
                        <form action="search">
                            <label htmlFor="">Cerca pagine</label>
                            <input type="search" placeholder='Cerca...' className='focus:outline-secondary ml-2' />
                            <button className='p-2 ml-3 border-2 solid rounded bg-slate-50 border-secondary hover:shadow-md hover:bg-sky-50'>Scrivi nuova pagina</button>
                        </form>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-self-center mt-8 p-6'>
                    <PageCard
                        title='Caro diario'
                        content='Oggi ho cominciato la giornata con un buon caffè, poi ho fatto una passeggiata e il cielo era chiaro, non faceva
                                molto freddo. Quando la temperatura è mite e il sole non è troppo forte, mi dà una sensazione di benessere,
                                caricandomi di energia ed iniziativa.'
                        createdAt='04/02/2025'
                    />
                    <PageCard
                        title='Ricordi'
                        content='Ci sono delle volte in cui la mente si perde nei ricordi e si ha una percezione strana
                            del tempo, come se il passato e il presente diventassero una cosa sola. E allora sento
                            la tristezza e la malinconia che annebbiano il cuore, come in un giorno di pioggia.'
                        createdAt='05/02/2025'
                    />
                    <PageCard
                        title='Libri'
                        content='Dopo tanto tempo, oggi ho rispolverato alcuni libri della mia libreria, soffermandomi a leggere alcune
                            favole di Esopo. Mi hanno riportato alla mente i bei pomeriggi di primavera,
                            di svariati anni fa, quando leggendoli ne immaginavo i luoghi e i personaggi.'
                        createdAt='06/02/2025'
                    />
                    <PageCard
                        title='Passeggiata'
                        content='Oggi ho deciso di uscire e andare in giro per la città, a vedere i negozi e parlare con
                            qualcuno. Ho poi fatto una tappa al parco dove vi erano dei bambini che giocavano e il loro vociare mi ha
                            infuso un calore e una gioia inaspettati.'
                        createdAt='07/02/2025'
                    />
                    <PageCard
                        title='Ispirazione'
                        content='In questo periodo vorrei davvero poter attingere a qualcosa che mi ispiri, che mi dia quella
                            serenità interiore di cui ho bisogno. Sento che la mia mente è stanca della quotidiana monotonia, dei giorni che
                            scorrono senza che io abbia davvero fatto qualcosa di significativo.'
                        createdAt='08/02/2025'
                    />
                    <PageCard
                        title='Inizio'
                        content='Oggi ho iniziato uno dei percorsi di crescita personale proposti dal sito, non credevo
                            di trovare finalmente una risposta pratica ai miei dubbi e alle mie insicurezze. Spero di proseguire
                            con costanza, determinazione e consapevolezza!'
                        createdAt='09/02/2025'
                    />
                    <PageCard
                        title='Meraviglia'
                        content='Sembra incredibile ma sto già comnciando a sentirmi davvero meglio! Sto imparando ad
                            analizzare ciò che mi circonda e a vedere le cose da una prospettiva diversa. La strada è ancora lunga,
                            ma credo che presto troverò la mia pace interiore.'
                        createdAt='10/02/2025'
                    />
                </div>
            </div>
        </>
    )
}

export default Pages