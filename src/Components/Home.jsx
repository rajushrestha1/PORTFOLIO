import {Link} from "react-scroll"
import { TypeAnimation } from 'react-type-animation'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';const Home = () => {
  return (
    <div name="home" className='h-screen w-full  lg:pl-44
    bg-gradient-to-b from-black via-black to-gray-800 '>
      <div className='max-w-screen-lg flex flex-col max-auto items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h1 className='text-4xl md:text-7xl font-bold text-yellow-500 '>
                  <TypeAnimation 
                  sequence={[
                    "I Design A Website",1000,
                    "I Am Frontend Developer",1000
                  ]}
                  wrapper="span"
                  speed={5}
                  />
                </h1>
            <p className='text-gray-500 py-4 max-w-md'>
            I am a motivated and versatile individual, always
                eager to take a new chellanges, with a passion for
                learning. I am ready to make meaningful contribution and achieve
                great things.
                </p>
        <div>
            <Link to="portfolio" smooth duration={500} className='text-white group w-fit m-3 px-5 py-1 flex items-center rounded-full bg-blue-500 hover:bg-white hover:text-blue-400 hover:scale-110 duration-500 cursor-pointer  hover:border-blue-950'>
                Portfolio
                <span className='group-hover:rotate-90 duration-500'>

                <ChevronRightIcon size={-1} className='' />
                </span>
            </Link>
        </div>
        </div>
        <div>
            <img src="home.png" alt="dada" className='rounded-2xl mx-auto w-2/3 md:w-full ' />
        </div>
      </div>
    </div>
  )
}

export default Home
