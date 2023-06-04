import React from 'react'
import Navbar from '../components/Navbar'
import Leftmenu from '../components/Leftmenu'
import Upload from '../components/Upload'

const Uploaddoc = () => {
  return (
    <div>
   <Navbar />
   <div className="main-content flex">
    <div className="w-[14%]">
   <Leftmenu />
    </div>

    <Upload/>
   </div>  
    </div>
  )
}

export default Uploaddoc
