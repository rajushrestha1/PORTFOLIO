import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Home = () => {
  return (
    <div name="home" className='h-screen w-full
    bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg flex flex-col max-auto items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h1 className='text-4xl md:text-7xl font-bold text-white'>
                Hello I am a Frontend Developer
                </h1>
            <p className='text-gray-500 py-4 max-w-md'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Molestias sapiente fuga accusantium reiciendis eveniet 
                aliquam? Accusantium numquam corporis, sequi nihil 
                raesentium maxime. Quos suscipit nulla minima!
                </p>
        <div>
            <button className='text-white group w-fit mx-3 px-3 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                Portfolio
                <span className='group-hover:rotate-90 duration-500'>

                <ArrowForwardIosIcon size={2} className='ml-1' />
                </span>
            </button>
        </div>
        </div>
        <div>
            <img src="Photo.png" alt="dada" className='rounded-2xl mx-auto w-2/3 md:w-full ' />
        </div>
      </div>
    </div>
  )
}

export default Home
