import PathCard from '../../components/PathCard'
import pcImg from '../../assets/pc.jpg'
import manImg from '../../assets/meditazione.jpg'
import yogaImg from '../../assets/yoga.jpeg'
import percorsoImg from '../../assets/percorsoImg.png'

import React from 'react'

const Paths = () => {
    return (
        <>
            <div className="flex gap-3 justify-end pt-8">
                <img src={percorsoImg} alt="logo" className='p-5 pl-0' />
                <PathCard 
                    image={pcImg}
                    title="Le prime Pagine"
                    description="Un percorso per prendere confidenza con il diario, con spunti quotidiani per raccontare la tua giornata, riscoprire ricordi e trasformare la scrittura in un'abitudine di benessere."
                    period="15 Giorni"
                    path=""
                    status="fatto"
                />
                <PathCard 
                    image={manImg}
                    title="Equilibrio interiore"
                    description="Un viaggio che ti aiuterà a riconnetterti con te stesso attraverso meditazione e digiuno digitale, offrendoti task giornalieri per ritrovare la calma e liberarti dalle distrazioni"
                    period="7 Giorni"
                    path=""
                    status="scopri"
                />
                <PathCard
                    image={yogaImg} 
                    title="Meditazione e Calma"
                    description="Questo percorso ti guiderà in sessioni di meditazione per ridurre lo stress, migliorare la consapevolezza e ritrovare equilibrio interiore."
                    period="12 Giorni"
                    path=""
                    status="in corso"
                />
            </div>
        </>

    )
}

export default Paths