import React from "react";
import logo from "../images/InfiniteAI Logo with Text White v5 1.png";
import backup from "../images/backup.png"
import setting from "../images/settings.png"
import helpcenter from "../images/help_center.png"
import notification from "../images/notifications.png"
import search from "../images/search.png"


const Navbar = ({onBarsClick}) => {

  return (
    <div  style={{ boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)' }}>
      <div className="navbar w-full h-[48px] items-center lg:justify-between flex bg-[#3C3C3C] ">
        <div className="left-logo w-[15%]">
          <img src={logo} alt="error-left-logo" className="mx-2"/>
        </div>

        {/* <div className="lines flex flex-col cursor-pointer" onClick={onBarsClick}>
          <img src={line1} alt="error-line1" />
          <img src={line2} alt="error-lin2" className="py-1"/>
          <img src={line3} alt="error-line3" />
        </div> */}
        

        <div className="search-bar">
        <input type="search" className="w-[600px] h-8 rounded-[2px] pl-3 text-xs outline-none xl:w-[900px]" placeholder="Search your documents, accounts & contacts... "/>
        <button type="submit">
            <img src={search} alt="error-search" className="relative right-7 top-1"/>
        </button>
          
        </div>

        <div className="icons flex justify-between">
            <img src={backup} alt="error-backup" className="  h-[16px] cursor-pointer"/>
            <img src={notification} className="mx-4  h-[16px] cursor-pointer"alt="error-bb" />
            <img src={setting} alt="error-setting" className="h-[16px] cursor-pointer"/>
            <img src={helpcenter} className="mx-4  h-[16px] cursor-pointer" alt="error-helpcenter" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
