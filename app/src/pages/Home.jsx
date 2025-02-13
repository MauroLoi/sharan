import HomeCard from "../components/HomeCard"
import VideoBackground from "../components/VideoBackground"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="flex flex-col xl:flex-row">
                <div className="w-full xl:w-1/2 h-screen hidden xl:block">
                    <HomeCard
                        title="Machine Learning"
                        description="Questo sito utilizza il Machine Learning per analizzare le emozioni trasmesse dai tuoi scritti e offrirti un'esperienza personalizzata."
                        backgroundImage="https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <HomeCard
                        title="Diario Emotivo"
                        description="Scrivi liberamente nel nostro diario digitale: il sito analizzerà il tuo testo per comprendere il tuo stato emotivo e offrirti suggerimenti personalizzati."
                        backgroundImage="https://images.pexels.com/photos/158465/waterlily-pink-water-lily-water-plant-158465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                </div>
                <div className="relative w-full h-screen">
                    <VideoBackground />
                    <div className="relative z-10 text-center text-white p-6 sm:p-10 bg-black bg-opacity-50 transition-all hover:bg-opacity-40 h-full flex flex-col gap-6 items-center justify-center">
                        <h1 className="titolo text-center text-4xl sm:text-5xl text-white leading-tight">Dai voce ai tuoi pensieri, trova la tua pace.</h1>
                        <p className="text-center text-white text-lg sm:text-2xl p-2 px-4 leading-relaxed sm:leading-9">Il nostro sito è pensato per chiunque abbia bisogno di una valvola di sfogo e di un luogo sicuro per esprimersi. Con un diario personale, percorsi guidati di rilassamento e crescita personale, ti aiuta a prenderti cura della tua mente, un passo alla volta. Scrivi, rifletti e ritrova il tuo equilibrio, tutto in un unico spazio creato per il tuo benessere interiore.</p>
                        <div className="p-2 pt-6 flex flex-col gap-6">
                            <p className="mb-4 text-white text-xl sm:text-2xl">Inizia il tuo viaggio!</p>
                            <Link to="/register" className="hover:transition-all hover:bg-opacity-20 hover:bg-black font-semibold text-white text-xl sm:text-2xl bg-transparent py-3 px-6 rounded cursor-pointer border-solid border-2 border-slate-50">Unisciti</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-1/2 h-screen hidden xl:block">
                    <HomeCard
                        title="Percorsi"
                        description="Segui un percorso guidato verso il benessere, con il supporto di esperti per una nuova consapevolezza."
                        backgroundImage="https://images.pexels.com/photos/1640820/pexels-photo-1640820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <HomeCard
                        title="Progressi"
                        description="Tieni traccia dei tuoi progressi con un grafico e scopri il tuo cambiamento."
                        backgroundImage="https://images.pexels.com/photos/2469087/pexels-photo-2469087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                </div>
            </div>
        </>
    )
}

export default Home;
