import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=" w-full text-[rgb(252,250,216)]  flex flex-row  gap-12  m-6  items-center  ">
      <p className=" font-lexend text-3xl font-bold tracking-wider">BURGUR</p>
      <div className=" absolute left-1/2 transform -translate-x-1/2 hidden md:flex flex-row sm:block  font-sansita gap-8 italic text-sm">
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
