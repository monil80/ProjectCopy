import React from "react";
import companylogo from "../images/ClientCompanyLogo.png";

const divDataArray = [
  {
    id: 1,
    label: "Last Month",
    value: "₹ 5,00,000",
    description: "NET INCOME FOR APRIL",
    head: "Profit & Loss"
  },
  {
    id: 2,
    label: "Last Week",
    value: "₹ 2,50,000",
    description: "NET INCOME FOR MAY",
    head: "Revenue"
  },
  {
    id: 3,
    label: "Last Year",
    value: "₹ 10,00,000",
    description: "NET INCOME FOR 2022",
    head: "Invoices"
  },
  {
    id: 4,
    label: "Last Quarter",
    value: "₹ 7,50,000",
    description: "NET INCOME FOR Q2 2023",
    head: "Expenses"
  },
];

const Middlecontent = () => {
  return (
    <div>
      <div className="company-info flex items-center ml-[-28px]">
        <img src={companylogo} alt="error-logo" className="mx-7" />
        <span className="font-monster font-medium text-lg">
          InfiniteAI Technology Private Limited
        </span>
      </div>

      <div className="cards my-5 grid grid-cols-2 gap-2 ">
        {divDataArray.slice(0, 4).map((divData) => (
          <div
            className="individual-card min-h-[270px] bg-[#FFFFFF] flex flex-col rounded-sm xl:h-[330px] "
            style={{ boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)' }}
            key={divData.id}
          >
            <div className="relative flex justify-center items-center ">
              <select
                name="selection"
                id="select"
                className="relative outline-none ml-[140px] top-5 text-[10px] text-[#B8B8B8] font-medium xl:ml-64 "
              >
                {divDataArray.map((optionData) => (
                  <option
                    value={optionData.label.toLowerCase().replace(" ", "-")}
                    className="text-[10px] text-[#B8B8B8]"
                    key={optionData.id}
                  >
                    {optionData.label}
                  </option>
                ))}
              </select>
            </div>
            <span className="relative font-monster font-semibold text-[#5C5C5C] text-base left-4 w-32">
              {divData.head}
            </span>
            <span className="relative font-monster font-normal text-black text-xl top-5 left-4">
              {divData.value}
            </span>
            <span className="relative font-monster font-normal font-xs text-[#B8B8B8] text-[10px] left-5 top-4">
              {divData.description}
            </span>
            <button className="relative left-20 top-36 font-monster font-normal text-[#5C5C5C] text-[10px] xl:top-52 xl:left-32">View Details&nbsp;+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middlecontent;
