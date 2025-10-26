import burger_hero from '../assets/burger_hero.png'

const Hero = () => {
  return (
    <>
      <div className=" mt-24 sm:mt-0  md:relative flex flex-col  sm:flex-row  items-center  h-screen ">
        <div className="  md:absolute  md:left-20%  text-center sm:w-1/2 ">
          <p className="font-lexend font-bold opacity-50 text-[#fcfad8] text-2xl ">
            THE ULTIMATE
          </p>
          <p className="font-sansita font-bold text-7xl text-[#fcfad8] mb-2  whitespace-nowrap p-0">
            Burgur Club
          </p>
          <p className="text-[#fcfad8] text-xs font-lexend opacity-80 mb-2">
            Savar the Flavor, Join the club!
          </p>
        </div>
        <img
          src={burger_hero}
          className=" md:ml-[800px] lg:ml-[400px] md:w-[600px]  lg:w-[640px]"
          alt=""
        />
      </div>
      <div className=" hidden sm:flex flex-row   gap-2  md:absolute md:bottom-[-38px] shadow-2xl md:left-40  ">
        <img
          className="w-16 h-16 bg-neutral-800  bg-center  rounded-2xl  object-cover"
          src={burger_hero}
          alt=""
        />
        <img
          className="w-16 h-16 bg-neutral-900   bg-center  rounded-2xl object-cover "
          src={burger_hero}
          alt=""
        />
        <img
          className="w-16 h-16 bg-black  bg-center object-cover   rounded-2xl"
          src={burger_hero}
          alt=""
        />
        <img
          className="w-16 h-16 bg-black  bg-center  object-cover rounded-2xl "
          src={burger_hero}
          alt=""
        />
      </div>
    </>
  )
}

export default Hero
