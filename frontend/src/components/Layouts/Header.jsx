import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Search from "../Search";
import { BsCart4 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header className="h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white">
        <div className="container mx-auto flex items-center px-2 justify-between">
          <div className="h-full">
            <Link to="/" className="h-full flex justify-center items-center">
              <img
                src={logo}
                width={170}
                height={60}
                alt="logo"
                className="hidden lg:block"
              />
              <img
                src={logo}
                width={120}
                height={60}
                alt="logo"
                className="lg:hidden"
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <Search />
          </div>

          <div className="">
            <div className="hidden lg:flex items-center gap-10">
              <button className="text-lg px-2">Login</button>
              <button className="flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-2 rounded text-white">
                {/**add to card icons */}
                <div className="animate-bounce">
                  <BsCart4 size={26} />
                </div>
                <div className="font-semibold text-sm">
                  <p>My Cart</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
