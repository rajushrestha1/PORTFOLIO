import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';
import { Link } from 'react-scroll';
const NavBar = () => {
    const [nav, setNav]=useState()
    const links=[
{
    id :1,
    link :"home"
}, 
{
    id :2,
    link :"about"
}, 
{
    id :3,
    link :"portfolio"
}, 
{
    id :4,
    link :"skill"
}, 
{
    id :5,
    link :"contact"
}, 
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-white px-4 fixed">
        <div>
            <h1 className="text-5xl ml-2  font-bold text-slate-400 hover:text-blue-400">RAJU</h1>
        </div>
        <ul className="hidden md:flex">
            {links.map(({id, link})=>(
                <li key={id}
                className="px-4 cursor-pointer capitalize text-slate-500 hover:scale-110 duration-200 hover:text-yellow-300">
                <Link to={link}  smooth={true} spy={true} offset={-100} duration={100} >{link}</Link>
                </li>
            ))}
        </ul>
        <div onClick={()=>setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-slate-300 md:hidden    '>
           {nav? <MenuOpenIcon /> : <MenuIcon />}
        </div>
            {nav &&(
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {links.map(({id, link})=>(
                        <li key={id}
                        className="px-4 cursor-pointer capitalize py-6 text-4xl">
                                            <Link onClick={()=>setNav(!nav)}
                                            to={link}  smooth={true} spy={true} offset={-100} duration={500} >{link}</Link>

                        </li>
                    ))}
                </ul>
            )}
        
    </div>
  )
}

export default NavBar

