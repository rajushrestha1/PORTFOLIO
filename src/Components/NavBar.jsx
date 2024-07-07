import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';
const NavBar = () => {
    const [nav, setNav]=useState()
    const links=[
{
    id :1,
    link :"Home"
}, 
{
    id :2,
    link :"About"
}, 
{
    id :3,
    link :"portfolio"
}, 
{
    id :4,
    link :"experience"
}, 
{
    id :5,
    link :"contact"
}, 
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-white px-4 fixed">
        <div>
            <h1 className="text-lg text-slate-300">Raju</h1>
        </div>
        <ul className="hidden md:flex">
            {links.map(({id, link})=>(
                <li key={id}
                className="px-4 cursor-pointer capitalize text-slate-500 hover:scale-110 duration-200">
                    {link}
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
                            {link}
                        </li>
                    ))}
                </ul>
            )}
        
    </div>
  )
}

export default NavBar

