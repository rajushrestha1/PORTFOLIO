import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
const Socials = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                Linkedin <LinkedInIcon  size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/raju-shrestha-6b5070245/",
            style:"rounded-tr-md"
        },
        {
            id:2,
            child:(
                <>
                Github <GitHubIcon size={30}/>
                </>
            ),
            href:"https://github.com/rajushrestha1"
        },
        {
            id:3,
            child:(
                <>
                Mail <MailIcon size={30}/>
                </>
            ),
            href:"shrestharaju010101@gmail.com"
        },
        {
            id:4,
            child:(
                <>
                Resume <PersonIcon size={30}/>
                </>
            ),
            href:"/resume.pdf",
            style:"rounded-br-md",
            download:true
        },
    ];
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed w-11/12'>
      <ul>
        {links.map(({id,child,href,style,download})=>(
        <li key={id} 
        className={"  flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-r-md duration-300 bg-gray-500 " 
        +""+ style
        }
        >
            <a href={href} 
            className='flex justify-between items-center w-full text-white'
            download={download}
            target='_blank'
            rel='noreferrer'
            >
                {child}
            </a>
        </li> 
        ))}
      </ul>
    </div>
  )
}

export default Socials
