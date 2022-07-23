import React from 'react'

import ProfileCover from './sections/ProfileCover/ProfileCover.jsx'
import Sidebar from './sections/Sidebar/Sidebar.jsx'
import Navbar from './sections/Navbar/Navbar.jsx'
import Footer from './sections/Footer/Footer.jsx'

function creatorprofile() {
  return (
    <main className="min-h-screen relative bg-gray-50 pb-10">
      <ProfileCover />
      <div className="container px-4">
        <div className="flex flex-wrap px-4">
          <div className="w-full lg:w-1/3 ">
            <Sidebar />
          </div>
          <div className="w-full lg:w-2/3 ">
            <Navbar />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default creatorprofile