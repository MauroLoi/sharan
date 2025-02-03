import { Link } from "react-router-dom"
import HomeCard from "../components/HomeCard"
import VideoBackground from "../components/VideoBackground"

const Home = () => {

  

  return (
    <>
      <div className="flex">
        <div className="w-1/2 h-screen hidden md:block border-solid border-[1px] border-slate-500 border-r-0 ">
          <HomeCard
            title="Diario"
            description=" diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum."
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>}
          />
          <HomeCard
            title="Card2"
            description="descrizione di prova"
            icon={""}
          />
        </div>
        <div className="relative w-full h-screen border-solid border-[1px] border-slate-500 bg-slate-50">
          <VideoBackground/>
          <div className="relative z-10 text-center text-white p-10">
            <h1 className="titolo text-center  text-slate-700">Dai voce ai tuoi pensieri, trova la tua pace.</h1>
            <p className="text-center text-slate-50 text-[18px] p-2">Il nostro sito è pensato per chiunque abbia bisogno di una valvola di sfogo e di un luogo sicuro per esprimersi. Con un diario personale, percorsi guidati di rilassamento e crescita personale, ti aiuta a prenderti cura della tua mente, un passo alla volta. Scrivi, rifletti e ritrova il tuo equilibrio, tutto in un unico spazio creato per il tuo benessere interiore.</p>
            <div className="p-2 pt-6">
              <p className="mb-4 text-slate-50">Inizia il tuo viaggio!</p>
              <Link to="/register" className="font-semibold text-slate-50 bg-transparent py-2 px-4 rounded cursor-pointer border-solid border-2 border-slate-50">Unisciti</Link>
            </div>
            
          </div>
        </div>
        <div className="w-1/2 h-screen hidden md:block border-solid border-[1px] border-slate-500 border-l-0 bg-slate-50">
          <HomeCard
            title="Card3"
            description="descrizione di prova"
            icon={""}
          />
          <HomeCard
            title="Card4"
            description="descrizione di prova"
            icon={""}
          />
        </div>
      </div>
    </>
  )
}

export default Home