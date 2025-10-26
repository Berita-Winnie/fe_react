import burger_hero from '../assets/burger_hero.png'

const Hero = () => {
  return (
    <div className="  relative flex flex-col sm:flex-row items-center  h-screen ">
      <div className=" absolute  left-20%  text-center sm:w-1/2 ">
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
  )
}

export default Hero
