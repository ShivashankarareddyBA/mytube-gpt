import logo from "../img/logo.JPG";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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

  return (
    <div className=" flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-40 h-10" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2">
          <button
            className="rounded-lg px-2 mt-3 w-24 h-6 mr-4 bg-purple-800 text-white"
            onclick={handleGptSearchClick}
          >
            GPT Search
          </button>

          <img
            className="w-10 h-10 rounded-full m-1"
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
