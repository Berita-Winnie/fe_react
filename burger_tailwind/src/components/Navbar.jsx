import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="text-[rgb(252,250,216)]  flex flex-row justify-between  ">
      <p className="font-lexend">BURGUR</p>
      <div className="  font-sansita flex flex-col italic text-xs ">
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
