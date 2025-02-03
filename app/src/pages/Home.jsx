import { Link } from "react-router-dom"
import HomeCard from "../components/HomeCard"
import VideoBackground from "../components/VideoBackground"

const Home = () => {



  return (
    <>
      <div className="flex">
        <div className="w-1/2 h-screen hidden xl:block border-solid border-[1px] border-slate-500 border-r-0 ">
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
        <div className="relative w-full h-screen border-solid border-[1px] border-slate-500 bg-slate-50">
          <VideoBackground />
          <div className="relative z-10 text-center text-white p-10">
            <h1 className="titolo text-center text-2xl text-slate-700 mb-11">Dai voce ai tuoi pensieri, trova la tua pace.</h1>
            <p className="text-center text-slate-50 text-[18px] p-2">Il nostro sito è pensato per chiunque abbia bisogno di una valvola di sfogo e di un luogo sicuro per esprimersi. Con un diario personale, percorsi guidati di rilassamento e crescita personale, ti aiuta a prenderti cura della tua mente, un passo alla volta. Scrivi, rifletti e ritrova il tuo equilibrio, tutto in un unico spazio creato per il tuo benessere interiore.</p>
            <div className="p-2 pt-6">
              <p className="mb-4 text-slate-50">Inizia il tuo viaggio!</p>
              <Link to="/register" className="font-semibold text-slate-50 bg-transparent py-2 px-4 rounded cursor-pointer border-solid border-2 border-slate-50">Unisciti</Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-screen hidden xl:block border-solid border-[1px] border-slate-500 border-l-0 bg-slate-50">
          <HomeCard
            title="Percorsi"
            description="Una serie di tappe organizzate per il tuo benessere. Scegli il percorso che potrai seguire passo dopo passo, ricercando la versione migliore di te. Intraprendi il tuo viaggio interiore aprendoti a nuove prospettive, grazie anche al supporto di esperti che sapranno guidarti verso una nuova consapevolezza."
            backgroundImage="https://images.pexels.com/photos/1640820/pexels-photo-1640820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <HomeCard
            title="Progressi"
            description="Un grafico ti permetterà di tenere conto dei tuoi progressi e degli obiettivi raggiunti, così che tu possa concretamente renderti conto del tuo cambiamento, senza scoraggiarti mai. Il tuo benessere è importante, ricorda chi sei davvero, al di là delle apparenze e dei ruoli sociali istituiti.di tappe organizzate per il tuo benessere. Scegli il percorso che potrai seguire passo dopo passo, ricercando la versione migliore di te. Intraprendi il tuo viaggio interiore aprendoti a nuove prospettive, grazie anche al supporto di esperti che sapranno guidarti verso una nuova consapevolezza."
            backgroundImage="https://images.pexels.com/photos/2469087/pexels-photo-2469087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </>
  )
}

export default Home