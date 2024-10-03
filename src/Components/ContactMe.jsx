const ContactME = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen pb-40 lg:pl-44 bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/adryxlga"
            method="POST"
            className="flex flex-col w-full md:w-1/2 group relative"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none z-10"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md
               text-white focus:outline-none z-10"
            />
            <textarea
              name="message"
              placeholder="Enter your message...."
              rows="10"
              required
              className="p-2 bg-transparent border-2
               rounded-md text-white focus:outline-none z-10"
            ></textarea>

            <button className="text-white bg-blue-500
             hover:scale-110 duration-300 px-5 py-1 m-3
              mx-auto flex items-center rounded-full  z-10
               hover:bg-white hover:text-blue-600 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactME;
