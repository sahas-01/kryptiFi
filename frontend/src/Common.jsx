import React from 'react'
import { Link } from 'react-router-dom'

function Common() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
               
                
            <div className="w-full ">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-56 bg-purple-200 rounded-md overflow-hidden">
          <img
            src="https://images.ctfassets.net/az3stxsro5h5/2VHaaB3RD4GtxmS1lGrfTe/95b89b7b185a801337ae69eb682eb98d/Jan-17-30-Impactful-Black-Creators-on-Social-Media-Horizontal.png"
            alt="creatorImage"
            className="w-full h-full object-cover object-center transform group-hover:scale-125 group-hover:rotate-6 transition duration-200	"
          />
        </div>
        <h3 className=' text-4l mx-auto my-5'>
          Sign in if you are a user
        </h3>
                     <Link to='/loginuser'>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white  font-bold py-2 px-4 rounded w-full">
                        User
                    </button>
                </Link>
      </div>
    </div>
            <div className="w-full ">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-56 bg-purple-200 rounded-md overflow-hidden">
          <img
            src="https://images.ctfassets.net/az3stxsro5h5/2VHaaB3RD4GtxmS1lGrfTe/95b89b7b185a801337ae69eb682eb98d/Jan-17-30-Impactful-Black-Creators-on-Social-Media-Horizontal.png"
            alt="creatorImage"
            className="w-full h-full object-cover object-center transform group-hover:scale-125 group-hover:rotate-6 transition duration-200"
          />
        </div>
        <h3 className=' text-4l mx-auto my-5'>
          Sign in if you are a creator
        </h3>
                     <Link to='/logincreator'>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white  font-bold py-2 px-4 rounded w-full">
                        Creator
                    </button>
                </Link>
      </div>
                </div>
                            </div>

        </>
    )
}

export default Common