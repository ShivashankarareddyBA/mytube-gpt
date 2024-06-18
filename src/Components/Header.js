import logo from "../img/logo-color.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className=" flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44 h-30" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-10 h-10 rounded-full m-1" src={user?.photoURL} alt="UserIcon" />
          <button onClick={handleClick} className="font-bold text-red-800 w-14">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
