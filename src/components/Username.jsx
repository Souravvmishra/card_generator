import React from 'react'
import { useState } from 'react'
import GitHubLogin from 'react-github-login';


import ProfileForm from './ProfileForm'

const Username = () => {
    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    const onChange = (event) => {
        setUsername(event.target.value)
    }

    const getUserInfo = async (username) => {
        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
                setLoading(false)
            }
        } catch (err) {
            console.log({ err });
        }
    }


    const onSuccess = response => console.log(response);

    const onFailure = response => console.error(response);
    

    return (
        <div className='flex min-h-screen justify-center items-center container mx-auto '>

            {!userData && <div className=" px-4 sm:px-8 mx-auto max-w-lg">

                    <GitHubLogin clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        redirectUri={`https://souravvmishra.github.io/card_generator`}
                        className='group border-black border-2 p-3 rounded-full hover:bg-black hover:text-white active:bg-black active:text-white duration-300 hover:-translate-y-1 active:-translate-y-1 font-semibold '
                        scope='read:user%20user:email'
                    >
                        <i className="fa-brands fa-github fa-2xl pr-4"></i> Continue With Github
                    </GitHubLogin>

            </div>
            }


            {
                userData && <ProfileForm user={userData} />

            }



        </div>



    )
}

export default Username
