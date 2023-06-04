import React from 'react'
import Navbar from "../components/Navbar"
import Leftmenu from '../components/Leftmenu'
import CTO from '../components/CTO'

const Dashboard2 = () => {


  


  return (
     <div className='bg-[#F5F5F5] min-h-[110vh] 2xl:h-[115vh] w-full'> 
<Navbar />
      <div className="middle-page flex">
        <div className="left-menu xl:min-w-[18%]">
          <Leftmenu/>
        </div>

        
      <div>
      <CTO />
      </div>
      </div>

      
      
    </div>
  )
}

export default Dashboard2
