import planet from "../Assets/planet.png"
import demo from "../Assets/demo.png"
import todo from "../Assets/todo.png"
import wheather from "../Assets/wheather.png"
const Portfolio = () => {
  const links=[
    {
      id:1,
      src:planet,
      code:"https://github.com/rajushrestha1/Planet_store",
      demo:"https://planetstore.netlify.app/"
    },
    {
      id:2,
      src:demo,
      code:"https://github.com/rajushrestha1/Project1",
      demo:"https://mrproject1.netlify.app/"
    },
    {
      id:3,
      src:todo,
      code:"https://github.com/rajushrestha1/todoapp",
      demo:"https://02todo.netlify.app/"
    },
    {
      id:4,
      src:wheather,
      code:"https://github.com/rajushrestha1/Wheather_App",
      demo:"https://mrproject1.netlify.app/"
    },
    
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
          {links.map(({id,src,code,demo})=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img 
              src={src}
              alt=""
              />
              <div className="flex justify-center items-center">
                <a href={demo} target="_blank" rel="noopener noreferrer">

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 cursor-pointer">Demo</button>
                </a>
                <a href={code} target="_blank" rel="noopener noreferrer">

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 cursor-pointer">Code</button>
                </a>
              </div>
            </div>
           
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio
