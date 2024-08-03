import logo from "../img/logo.JPG";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { chanageLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    //toggle feature
    dispatch(toggleGptSearchView());
  };

  const handleLaunguageChange = (e) => {
    dispatch(chanageLanguage(e.target.value));
  };

  return (
    <div className=" flex flex-col md:flex-row justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <Link to="/"><img className="w-40 h-10 mx-auto md:mx-0" src={logo} alt="logo" /></Link>
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="rounded-lg px-2 mt-3 w-25 h-6 mr-4 bg-gray-900 text-white"
              onChange={handleLaunguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="rounded-lg px-2 mt-3 w-24 h-6 mr-4 bg-purple-800 text-white
                md:w-22 md:h-6 md:px-4 lg:w-31 lg:h-6 lg:px-1"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? " Home": "GPTSearch"}
          </button>

          <img
            className=" hidden md:block w-10 h-10 rounded-full m-1"
            src={user?.photoURL}
            alt="UserIcon"
          />
          <button onClick={handleClick} className="font-bold text-red-800 ">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
