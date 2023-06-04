import React, { useState } from 'react';
import companylogo from "../images/ClientCompanyLogo.png";
import Directorcomp from './Directorcomp';
import Business from "./Business"

const CTO = () => {
  const [activeTab, setActiveTab] = useState('directors');

  const handleClicked = (tab) => {
    setActiveTab(tab);
  }

    
    const directors = [
        {
          gst:"GKJHFAUAJ54",
          pan:"HAKJHJDHLL521"
        },
    ]
  return (
    <div className='-ml-6 xl:ml-5' >
      <div className="company-info flex items-center mt-5 ml-9">
        <img src={companylogo} alt="error-logo" className="mx-7" />
        <span className="font-monster font-medium text-xl ">
          InfiniteAI Technology Private Limited
        </span>
      </div>

      {directors.map((director, index) => (
        <div  key={index} className="sub-para ml-16 mt-2 font-monster text-sm text-[#5C5C5C]">
          Private Limited | GSTIN: {director.gst} | PAN: {director.pan}
        </div>
          
          ))}

      <div className="headingm font-monster text-sm mt-9 ml-16 flex justify-between w-80 ">
        <div
          className={`directors cursor-pointer ${activeTab === 'directors' ? 'text-red-500 font-bold border-b-4 border-t-0 border-r-0 border-l-0 rounded-sm border-[#FF0000] border-2 border-solid' : 'cursor-pointer'}`}
          onClick={() => handleClicked('directors')}
        >
          Directors
        </div>
        <div
          className={`business cursor-pointer ${activeTab === 'business' ? 'text-red-500 font-bold border-b-4 border-t-0 border-r-0 border-l-0 rounded-sm border-[#FF0000] border-2 border-solid' : 'cursor-pointer'}`}
          onClick={() => handleClicked('business')}
        >
          Business Details
        </div>
        <div
          className={`documents cursor-pointer ${activeTab === 'documents' ? 'text-red-500 font-bold border-b-4 border-t-0 border-r-0 border-l-0 rounded-sm border-[#FF0000] border-2 border-solid' : 'cursor-pointer'}`}
          onClick={() => handleClicked('documents')}
        >
          Documents
        </div>
      </div>
      <div className="line min-w-[770px]  h-[1px] bg-[#B8B8B8] ml-16">
      </div>

        {activeTab === 'directors' && <Directorcomp/>}
        {activeTab === 'business' && <Business/>}


    </div>
  );
};

export default CTO;
