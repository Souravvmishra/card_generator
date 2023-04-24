import React from 'react'
import { useState } from 'react'
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth'

import ProfileForm from './ProfileForm'
import { auth } from '../config/firebase';




const Username = () => {
  const [userData, setUserData] = useState(null)
  const [completeData, setComlpeteData] = useState(null)


  const getUserInfo = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setComlpeteData(data);
      }
    } catch (err) {
      console.log({ err });
    }
  }

  const GithubAuth = () => {
    signInWithPopup(auth, new GithubAuthProvider())
      .then((res) => {
        setUserData({ name: res._tokenResponse.fullName, email: res._tokenResponse.email, username: res._tokenResponse.screenName })
        getUserInfo(res._tokenResponse.screenName)
      })
      
      .catch((err) => console.log(err))
  }



  return (
    <div className='flex min-h-screen justify-center items-center container mx-auto '>

    
      {!completeData &&
        // show login using github until we egt the initial data
        <div className="group px-4 sm:px-8 mx-auto max-w-lg">
          
          <button onClick={GithubAuth}
            className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-800 hover:text-white text-black border border-transparent hover:border-transparent  shadow-md hover:shadow-lg  transition transform hover:-translate-y-1 duration-150 font-semibold  ">

            <i className="fa-brands fa-github fa-2xl pr-4 text-black group-hover:text-white duration-150"></i> Github </button>



        </div>
      }


      {
        // show the form on getting the data 
        completeData && <ProfileForm user={completeData} setUser={setComlpeteData} />

      }



    </div>



  )
}

export default Username
