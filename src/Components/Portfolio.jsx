import planet from "../Assets/planet.png"
import demo from "../Assets/demo.png"
const Portfolio = () => {
  const links=[
    {
      id:1,
      src:planet,
    },
    {
      id:2,
      src:demo,
    },
    {
      id:1,
      src:planet,
    },
    {
      id:2,
      src:demo,
    },
    {
      id:1,
      src:planet,
    },
    {
      id:2,
      src:demo,
    }
  ];

  return (
    <div name="portfolio" className="w-full md:h-screen pb-40 lg:pl-44 bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 max-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Portfolio</p>
            <br></br>
            <p className="py-6">Check out some of my work right here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {links.map(({id,src})=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img 
              src={src}
              alt=""
              />
              <div className="flex justify-center items-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">Demo</button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">Code</button>
              </div>
            </div>
           
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio
