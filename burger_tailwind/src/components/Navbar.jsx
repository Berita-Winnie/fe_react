import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=" w-full text-[rgb(252,250,216)]  flex flex-row   mt-4  md:mx-[100px]   items-center  ">
      <p className=" font-lexend text-2xl md:text-3xl font-medium tracking-wider">
        BURGUR
      </p>
      <div className=" hidden md:flex sm:block absolute left-1/2 -translate-x-1/2  flex-row x font-sansita gap-10 p-2 italic text-sm">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/shop"> Shop</Link>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar
