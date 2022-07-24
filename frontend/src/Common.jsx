import React from 'react'
import { Link } from 'react-router-dom'

function Common() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <Link to='/'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white mx-5 font-bold py-2 px-4 rounded">
                        User
                    </button>
                </Link>
                <Link to='/creatorsignup'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white mx-5 font-bold py-2 px-4 rounded">
                        Creator
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Common