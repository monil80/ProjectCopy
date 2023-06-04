import React from 'react'
import Businessinput from './Businessinput';

const Business = () => {
  return (
    <div className='ml-16'>
      <div className="main-white mt-7 shadow-2xl bg-white  w-[800px] h-[570px] rounded-md xl:w-[850px] xl:h-[580px] mb-4">
        <Businessinput/>
        <div className="button flex justify-center items-center mt-7 ml-5">

          <div className="update w-20 h-7  mr-4  bg-white  border-[#FF0000] border-2 border-solid text-[#FF0000] flex justify-center items-center font-monster font-medium rounded-sm hover:bg-[#FF0000] hover:text-white">
            <button>UPDATE</button>
          </div>
       <div className="save w-20 h-7  bg-[#FF0000] text-white flex justify-center items-center font-monster font-medium rounded-sm  hover:bg-white hover:text-[#FF0000] border-[#FF0000] border-2 border-solid" >
        <button>
          SAVE
        </button>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Business;
