import React from 'react'
import Navbar from "../components/Navbar"
import Leftmenu from "../components/Leftmenu"
import Middlecontent from "../components/Middlecontent"
import Rightcontent from "../components/Rightcontent"

const Dashboard = () => {

  // const [showLeftMenu, setShowLeftMenu] = useState(true)

  return (
    <div className='bg-[#F5F5F5]; min-h-[100vh] w-full '>
      <Navbar />


      <div className="middle-page flex w-[100%]">
        <div className="left-menu md:min-w-[18%] h-[600px] relative xl:min-w-[14%]">
          <Leftmenu/>
        </div>
        <div className="middle-content  pt-6 min-w-[53%] lg:w-[60%] mr-3 relative">
          <Middlecontent/>
        </div>
        <div className="right-content  h-[550px] mt-[72px] mr-11 bg-white  relative xl:min-w-[400px] xl:h-[670px]" style={{ boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)' }} >
          <Rightcontent/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
