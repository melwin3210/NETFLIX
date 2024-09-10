import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
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

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsuscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/login");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleSearchView());
    // dispatch(addMovieSearchSuggestion([]));
  };

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }
  const gptSearchPage = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col justify-between mx- md:flex-row">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Logo"></img>
      {user && (
        <div className="flex p-2 justify-between ">
          {
            gptSearchPage && <select onChange={handleLanguageChange} className="p-2 m-2 bg-gray-900 text-white">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.name}>
                {lang.name}
              </option>
            ))}
          </select>
          }
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {gptSearchPage ? "Homepage" : "Search Movies"}
          </button>
          <img className="md:w-12 h-12 hidden md:inline-block" src={user.photoURL} alt="User Icon"></img>
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
