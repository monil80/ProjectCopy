import React, { useState } from "react";
import user from "../images/contact_page.png";
import document from "../images/description.png";

const dataFromBackend = [
  {
    heading: "Arindam FY2022-23.pdf upload",
    category: "In the IT Returns category",
    timestamp: "Uploaded moments ago",
  },
  {
    heading: "Arindam FY2022-23.pdf upload",
    category: "In the IT Returns category",
    timestamp: "Uploaded moments ago",
  },
  {
    heading: "Arindam FY2022-23.pdf upload",
    category: "In the IT Returns category",
    timestamp: "Uploaded moments ago",
  },
  {
    heading: "Arindam FY2022-23.pdf upload",
    category: "In the IT Returns category",
    timestamp: "Uploaded moments ago",
  },
];

const Rightcontent = () => {
  const [showwdiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv((prevDiv) => !prevDiv);
  };

  return (
    <div className="relative">
      <h2 className="font-monster font-semibold text-base text-[#5C5C5C] m-6">
        Last Few Transactions
      </h2>

      <div>
        {dataFromBackend.map((item, index) => (
          <React.Fragment key={index}>
            <div className="divs flex xl:justify-around ">
              <div className="left w-40 mx-2 xl:w-52">
                <div className="main-heading font-monster font-semibold text-[10px] text-[#5C5C5C]">
                  {item.heading}
                </div>
                <div className="text-[10px] font-normal font-monster text-[#B8B8B8]">
                  {item.category}
                </div>
              </div>
              <div className="right-message font-monster font-normal italic text-[10px] text-[#C5C5C5] w-24">
                {item.timestamp}
              </div>
            </div>
            <hr className="mt-3 mb-2 w-5/6 mx-6" />
          </React.Fragment>
        ))}
      </div>

      {showwdiv && (
        <div className="main-toggle bg-white w-56  absolute bottom-[-210px] h-20 right-[30px] xl:-bottom-[335px] " style={{ boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)' }}>
          <div className="1 flex justify-around w-52 p-2">
            <img src={user} alt="error-user" />
            <p className="font-semibold font-monster text-xs cursor-pointer">
              New Customer Account
            </p>
          </div>
          <div className="2 flex justify-around w-52 mt-4">
            <img src={document} alt="document-user" />
            <p className="font-semibold font-monster text-xs cursor-pointer">
              Upload New Document
            </p>
          </div>
        </div>
      )}

      <div className="button-container w-8 bg-[#FF0000] h-8 rounded-full absolute bottom-0 top-[467px] right-[24px] flex justify-center items-center xl:top-[580px]">
        <button className="text-white text-2xl pb-1" onClick={handleClick}>
          &#43;
        </button>
      </div>
    </div>
  );
};

export default Rightcontent;
