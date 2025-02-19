import HomeCard from "../components/HomeCard"
import VideoBackground from "../components/VideoBackground"
import { Link } from 'react-router-dom'
import logo from "../assets/aa.png"

const Home = () => {
    return (
        <div className="relative w-full h-screen">
            <VideoBackground />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="flex justify-center pt-20">
                <img src={logo} alt="logo" className="absolute w-60 h-60 "/>
            </div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center mb-64 sm:pt-44 text-center px-6 sm:px-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Dai voce ai tuoi pensieri, trova la tua pace.
                </h1>
                <p className="mt-4 text-base sm:text-lg lg:text-2xl max-w-3xl text-white">
                    Il nostro sito è pensato per chiunque abbia bisogno di una valvola di sfogo e di un luogo sicuro per esprimersi. Con un diario personale, percorsi guidati di rilassamento e crescita personale, ti aiuta a prenderti cura della tua mente, un passo alla volta.
                </p>

                <Link to="/register" className="mt-6 text-slate-50 font-semibold text-lg sm:text-xl py-3 px-6 rounded-lg transition-all transform hover:translate-y-[-4px] hover:shadow-lg shadow-2xl bg-opacity-15 bg-black">
                    Unisciti
                </Link>
            </div>

            <div className="absolute bottom-0 w-full flex flex-col sm:flex-row justify-center gap-4 sm:gap-2 p-4 sm:p-2 text-white">
                <HomeCard
                    title="Machine Learning"
                    description="Questo sito analizza le emozioni dei tuoi scritti e ti offre un'esperienza personalizzata."
                />
                <HomeCard
                    title="Diario Emotivo"
                    description="Scrivi liberamente: il sito analizzerà il tuo testo per offrirti suggerimenti personalizzati."
                />
                <HomeCard
                    title="Percorsi"
                    description="Segui un percorso guidato verso il benessere con il supporto di esperti."
                />
                <HomeCard
                    title="Progressi"
                    description="Tieni traccia dei tuoi progressi con un grafico per scoprire il tuo cambiamento."
                />
            </div>
        </div>
    )
}

export default Home;

