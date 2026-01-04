import bookstore from "../Assets/bookstore.png"
import votingapp from "../Assets/votingapp.png"
import chatappapi from "../Assets/chatappapi.png"
import todo from "../Assets/todo.png"
import wheather from "../Assets/wheather.png"

const Portfolio = () => {
  const links = [
    {
      id: 1,
      name: "Book Store E-Commerce",
      src: bookstore,
      code: "https://github.com/rajushrestha1/book-store-e-commerce",
      demo: "https://github.com/rajushrestha1/book-store-e-commerce"
    },
    {
      id: 2,
      name: "Online Voting App",
      src: votingapp,
      code: "https://github.com/rajushrestha1/voting_app",
      demo: "https://github.com/rajushrestha1/voting_app"
    },
    {
      id: 3,
      name: "Todo App",
      src: todo,
      code: "https://github.com/rajushrestha1/todoapp",
      demo: "https://02todo.netlify.app/"
    },
    {
      id: 4,
      name: "Weather App",
      src: wheather,
      code: "https://github.com/rajushrestha1/Wheather_App",
      demo: "https://mrproject1.netlify.app/"
    },
    {
      id: 5,
      name: "Chat App",
      src: chatappapi,
      code: "https://github.com/rajushrestha1/chat-app",
      demo: "https://github.com/rajushrestha1/chat-app"
    },
  ];

  return (
    <div name="portfolio" className="w-full md:h-screen pb-40 lg:pl-44 bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 max-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8 items-center justify-center flex">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-yellow-500">Portfolio</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {links.map(({ id, name, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={name} // Using the project name as alt text
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center text-yellow-500">{name}</h3> {/* Project name */}
                <div className="flex justify-center items-center mt-4">
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 cursor-pointer">Demo</button>
                  </a>
                  <a href={code} target="_blank" rel="noopener noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 cursor-pointer">Code</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
