import logo from "../img/logo-color.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className=" flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
    <img className="w-44 h-30" src={logo} alt="logo" />
    <div className="flex" >
    <img className="w-16 h-16"
        src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png"
          alt="UserIcon"
        />
        <button
          onClick={handleClick}
          className="font-bold text-red-800 w-14"
        >
          SignOut
        </button>
        
    </div>


    </div>
  );
};
    
      // <div className="absolute ml-20 mt-4 bg-gradient-to-b from-black z-10 opacity-80 ">
      //   {/* logo image */}
      //   
      // </div>
      // <div className="absolute  flex justify-between items-center p-4 w-full">
      // 
      //   <button
      //     onClick={handleClick}
      //     className="font-bold text-red-400 mt-5 px-2 w-20"
      //   >
      //     SignOut
      //   </button>
      //   </div>
    
    
  

export default Header;
