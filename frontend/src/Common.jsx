import React from 'react'
import { Link } from 'react-router-dom'

function Common() {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1>Make your Choice</h1>
            </div>
            <div className="flex items-center justify-center h-screen">

                <button className="bg-blue-500 w-60 h-60 text-2xl hover:bg-blue-700 text-white mx-5 font-bold py-2 px-4 rounded">

                    <Link to="/loginuser">
                        User

                    </Link>
                </button>
                <Link to="/logincreator">
                    <button className="bg-blue-500 h-60	w-60  text-2xl  hover:bg-blue-700 text-white mx-5 font-bold py-2 px-4 rounded">
                        Creator
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Common