import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className='flex items-center justify-between p-4 z-[100] absolute  w-full '>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer '>
          KMFLIX
        </h1>
      </Link>
      {!user ? (
        <div>
          <Link to='/login'>
            <button className=' text-white pr-4 '>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 text-white rounded px-6 py-2 '>
              Sign Up
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to='/account'>
            <button className=' text-white pr-4 '>Account</button>
          </Link>
          <button
            onClick={logOutHandler}
            className='bg-red-600 text-white rounded px-6 py-2 '
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
