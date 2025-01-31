import HomeCard from "../components/HomeCard"

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/2 h-screen hidden md:block border-solid border-[1px] border-slate-500 border-r-0 ">
          <HomeCard/>
          <HomeCard/>
        </div>
        <div className="w-full h-screen border-solid border-[1px] border-slate-500 bg-slate-50"></div>
        <div className="w-1/2 h-screen hidden md:block border-solid border-[1px] border-slate-500 border-l-0 bg-slate-50">
          <HomeCard/>
          <HomeCard/>
        </div>
      </div>
    </>
  )
}

export default Home