import React from 'react'

const ProfileForm = (props) => {

  

return (

  
<div>
  <div className="">
    <div className="p-8  mx-auto ">
      <div className="bg-white rounded-t-lg p-6 ">
        <p className="text-center text-sm text-gray-400 font-semibold">Welcome From </p>
        <div>
          <div className="flex items-center justify-center space-x-4 mt-3"> <button disabled
              className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-black border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              <i className="fa-brands fa-github fa-2xl px-2 text-black"></i> Github </button> 
              </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-b-lg py-4 px-4 lg:px-24">
        <p className="text-center text-sm text-gray-500 font-light"> Please Fill The Missing Information & Continue </p>
        <form className="mt-4">

        <h3 className='text-sm font-semibold my-4 text-slate-400'>Basic Information ⬇️</h3>
        <div className=''>
          <div className='flex items-center justify-center space-x-4'>

          <div className="relative"> 
          <input
              className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-2 text-gray-600 leading-tight focus:outline-none focus:ring-gray-400 focus:shadow-outline font-semibold focus:border-black/50 duration-100"
              id="name" type="text" placeholder="Name" value={props.user.name} />
            <div className="absolute left-0 inset-y-0 flex items-center">
            <i className="fa-solid fa-signature text-gray-400 pl-4"></i>
            </div>
          </div>

          <div className="relative mt-0"> <input
              className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-2 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline font-semibold focus:border-black/50 duration-100"
              id="profession" type="text" placeholder="Profession" />
            <div className="absolute left-0 inset-y-0 flex items-center">
            <i className="fa-solid fa-user-tie pl-4 text-gray-400 "></i></div>
          </div>
          </div>

          <div className="relative mt-3"> <input
              className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-2 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline font-semibold focus:border-black/50 duration-100"
              id="address" type="text" placeholder="Address" value={props.user.location} />
            <div className="absolute left-0 inset-y-0 flex items-center">
            <i className="fa-solid fa-location-dot pl-4 text-gray-400"></i></div>
          </div>

          <div className="relative mt-3 flex "> 
          <textarea
              className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-2 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline font-semibold focus:border-black/50 duration-100 flex placeholder:pt-7"
              id="bio" placeholder="Bio" rows={4} value={props.user.bio} >
            </textarea>
            <div className="absolute left-0 inset-y-0 flex items-center">
            <i className="fa-solid fa-dna pl-4 text-gray-400"></i></div>
          </div>
          </div>


          <h3 className='text-sm font-semibold mt-4 text-slate-400'>Social Media ⬇️</h3>

          <div className="relative mt-3"> <input
              className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-2 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline font-semibold focus:border-black/50 duration-100"
              id="instagram" type="text" placeholder="Instagram" />
            <div className="absolute left-0 inset-y-0 flex items-center">
            <i className="fa-brands fa-instagram pl-4 text-gray-400"></i></div>
          </div>

          <div className="relative mt-3"> <input
              className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-2 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline font-semibold focus:border-black/50 duration-100"
              id="twitter" type="text" placeholder="Twitter" value={props.user.twitter_username} />
            <div className="absolute left-0 inset-y-0 flex items-center">
            <i className="fa-brands fa-twitter pl-4 text-gray-400"></i></div>
          </div>

          <div className="relative mt-3"> <input
              className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-2 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline font-semibold focus:border-black/50 duration-100"
              id="linkedIn" type="text" placeholder="LinkedIn" />
            <div className="absolute left-0 inset-y-0 flex items-center">
            <i className="fa-brands fa-linkedin pl-4 text-gray-400"></i></div>
          </div>
          
          <div className="relative mt-3"> <input
              className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-2 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline font-semibold focus:border-black/50 duration-100"
              id="github" type="text" placeholder="Github" />
            <div className="absolute left-0 inset-y-0 flex items-center">
            <i className="fa-brands fa-github pl-4 text-gray-400"></i></div>
          </div>

          <div className="flex items-center justify-center mt-8"> <button
              className="text-white py-2 px-4 uppercase rounded bg-slate-500 hover:bg-slate-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
               Continue </button> </div>
        </form>
      </div>
    </div>
  </div>

</div>
)
}

export default ProfileForm