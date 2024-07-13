import css  from "../Assets/css.png"
import html from "../Assets/html.png"
import javascript from "../Assets/javascript.png"
import react from "../Assets/react.png"
import node from "../Assets/node.png"
import Mongodb from "../Assets/Mongodb.png"
import github from "../Assets/github.png"
const Experience = () => {
  let skill=[
    {
    id:1,
    src:html,
    title:"HTML",
    style:"shadow-orange-500",
  },
  {
    id:2,
    src:css,
    title:"CSS",
    style:"shadow-blue-500",
  },
  {
    id:3,
    src:javascript,
    title:"JAVASCRIPT",
    style:"shadow-yellow-500",
  },
  {
    id:4,
    src:react,
    title:"REACT",
    style:"shadow-blue-500",
  },
  {
    id:5,
    src:Mongodb,
    title:"MONGODB",
    style:"shadow-green-500",
  },
  {
    id:6,
    src:node,
    title:"NODE",
    style:"shadow-green-500",
  },
  {
    id:7,
    src:github,
    title:"GITHUB",
    style:"shadow-gray-500",
  },
  ];
  return (
    <div name="skill" className=" text-white bg-gradient-to-b from-gray-800 to-black w-full min-h-full pb-40  md:h-screen lg:pl-44">
      <div className="max-w-screen-lg p-4 max-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">Skills</p>
               <p className="py-6">Check out my skills here</p>
        </div>
        <div className="w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
       {skill.map(({id,src,title,style})=>
      <div key={id} className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-lg ${style} `}>
            <img src={src} className="w-20 mx-auto" alt=""/>
            <p className="mt-4">{title}</p>
      </div>
      )}
        </div>
      </div>
    </div>
  )
}

export default Experience
