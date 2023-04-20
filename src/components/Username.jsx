import React from 'react'
import { useState } from 'react'
import ProfileForm from './ProfileForm'

const Username = () => {
    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState(null)

    const onChange = (event) => {
        setUsername(event.target.value)
    }

    const getUserInfo = async (username) => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
            }
        } catch (err) {
            console.log({err});
        }
    }
    console.error("Error")

    return (
        <div className='flex min-h-screen justify-center items-center container mx-auto '>
            {!userData && <div className=" px-4 sm:px-8 mx-auto max-w-lg">

                <div className="wrapper 
                bg-slate-100  rounded-xl shadow-lg shadow-black/50">

                    <div className="card px-8 py-4">
                        <div className="card-image mt-10 mb-6">
                            <i className="fa-brands fa-github fa-2xl"></i>
                        </div>

                        <div className="card-text">
                            <h1 className="text-xl md:text-2xl font-bold leading-tight text-gray-900" >⬇️ Enter Your Github Username </h1>
                            <p className="text-sm font-semibold md:text-lg text-gray-700 mt-3 ">Get Your Profile Card Created In Minutes !</p>
                        </div>

                        <div className="card-mail flex items-center my-10">
                            <input type="email" className="border-l border-t border-b border-gray-200 rounded-l-md w-full text-base md:text-lg px-3 py-2 focus:border-gray-500 outline-none " placeholder="Username" onChange={onChange} />
                            <button className="bg-slate-500 hover:bg-slate-600 hover:border-slate-600 text-white font-semibold capitalize px-3 py-2 text-base md:text-lg rounded-r-md border-t border-r border-b   " onClick={() => getUserInfo(username)}>Search</button>
                        </div>
                    </div>

                </div>
            </div>
            }

            {
                userData && <ProfileForm user={userData} />
            }


        </div>



    )
}

export default Username
