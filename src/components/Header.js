import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()



  
  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL: photoURL}))
        navigate("/browse")
        
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
       
      }
    });
    return () => unsuscribe()
    
  
  },[])
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/Error")
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img className='w-44'
     src={LOGO} alt='Logo'></img>
      { user && 
        <div className="flex p-2 ">
        <img className='w-12 h-12 ' src={user.photoURL} alt="User Icon" ></img>
<button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>
      }

    </div>
  )
}

export default Header
