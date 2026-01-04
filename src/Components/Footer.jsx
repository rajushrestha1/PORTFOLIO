import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download'; // Import the download icon

const Footer = () => {
    const currentDateTime = new Date().toLocaleDateString();

  return (
    <div name="footer" className="min-h-fit w-full bg-gradient-to-b from-slate-800 to-black lg:pl-44 pb-15 text-white block lg:hidden">
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='mb-4 md:mb-0'>
                <h3 className='text-sm'>+977-9825821351</h3>
                <p className='text-sm'>Date & Time : {currentDateTime}</p>
            </div>

            {/* Social Media Links */}
            <div className='flex space-x-4'>
                <a href='https://github.com/rajushrestha1'
                    className='text-xl hover:text-gray-400'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <GitHubIcon />
                </a>
                <a href='https://www.linkedin.com/in/raju-shrestha-6b5070245/'
                    className='text-xl hover:text-gray-400'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <LinkedInIcon />
                </a>
                <a href='https://www.facebook.com/raju.stha.123829'
                    className='text-xl hover:text-gray-400'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FacebookIcon />
                </a>
                <a href='https://www.instagram.com/rajushrestha67/'
                    className='text-xl hover:text-gray-400'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <InstagramIcon />
                </a>
            </div>
        </div>

        {/* Resume Section */}
        <div className='mt-4 flex justify-center items-center'>
            <a href="resume.pdf" download="resume.pdf" className="flex items-center space-x-2 text-xl hover:text-gray-400">
                <DownloadIcon />
                <span>Download Resume</span>
            </a>
        </div>
    </div>
  );
}

export default Footer;
