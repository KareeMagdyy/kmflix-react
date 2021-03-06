import { Link } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = ({ classes }) => {
  return (
    <footer className={" text-white py-2 w-full mt-auto" + classes}>
      <div className='container mx-auto gap-2 lg:gap-0 flex flex-col md:flex-row justify-between items-center'>
        <Link to='/'>
          <h1 className='text-red-600 text-3xl font-bold cursor-pointer '>
            KMDB
          </h1>
        </Link>

        <div className='flex gap-2 text-red-600'>
          <a
            href='https://github.com/KareeMagdyy'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition-all'
          >
            <FaGithubSquare size={30} />
          </a>
          <a
            href='https://www.linkedin.com/in/kareem-el-zomor-0a2a94150/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition-all'
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className='container mx-auto pt-2'>
        <p className='text-md text-center'>
          Made With 💖 by{" "}
          <a
            href='https://karim.website/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline font-bold'
          >
            Karim Magdy
          </a>{" "}
          &copy; 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
