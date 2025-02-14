import PathCard from '../../components/PathCard'
import pcImg from '../../assets/pc.jpg'
import manImg from '../../assets/meditazione.jpg'

import React from 'react'

const Paths = () => {
    return (
        <>
            <div className="flex gap-3 justify-end">
                <PathCard 
                    image={pcImg}
                    title="Le prime Pagine.."
                    description="Un percorso per prendere confidenza con il diario, con spunti quotidiani per raccontare la tua giornata, riscoprire ricordi e trasformare la scrittura in un'abitudine di benessere."
                />
                <PathCard 
                    image={manImg}
                    title="Equilibrio interiore"
                    description="Un percorso pensato per aiutarti a riconnetterti con te stesso attraverso la meditazione e il digiuno digitale. Ogni task ti guiderà verso un momento di calma, per ritrovare la pace interiore e liberarti dalle distrazioni quotidiane."
                />
            </div>
        </>

    )
}

export default Paths