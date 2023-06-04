import React, { useState } from "react";
import companylogo from "../images/ClientCompanyLogo.png";

const optionval = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const optionval2 = [
  { label: "2Option 1", value: "2option1" },
  { label: "2Option 2", value: "2option2" },
  { label: "2Option 3", value: "2option3" },
];
const directors = [
  {
    gst: "AKHDKHJN165",
    pan: "KJKJAFBJK2756",
  },
];

const Upload = () => {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");

  const handleSelected = (event) => {
    if (event.target.name === "selection-box1") {
      setSelected(event.target.value);
    } else {
      setSelected2(event.target.value);
    }
  };

  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const handleDivClick = () => {};

  return (
    <div>
      <div className="company-info flex items-center mt-5 ml-9">
        <img src={companylogo} alt="error-logo" className="mx-7" />
        <span className="font-monster font-medium text-xl ">
          InfiniteAI Technology Private Limited
        </span>
      </div>

      {directors.map((director, index) => (
        <div
          key={index}
          className="sub-para ml-16 mt-2 font-monster text-sm text-[#5C5C5C]"
        >
          Private Limited | GSTIN: {director.gst} | PAN: {director.pan}
        </div>
      ))}

      {/* //Center-card */}
      <div className="flex justify-center items-center w-full h-[650px]  ml-16">
        <div
          className="w-[1000px] h-[550px] bg-white rounded-md"
          style={{ boxShadow: "4px 4px 50px 1px rgba(0, 0, 0, 0.25)" }}
        >
          {/* form */}
          <div className="flex justify-center items-center my-16">
            <form action="" className="font-monster flex flex-col">
              <select
                name="selection-box1"
                value={selected}
                onChange={handleSelected}
                className="pl-2 bg-transparent outline-none border-solid border-[1px] border-[#B8B8B8] h-8 w-[502px] rounded-[3px] font-base font-medium text-black cursor-pointer"
              >
                <option value="" className="text-base">
                  Select an option
                </option>
                {optionval.map((options, index) => (
                  <option
                    key={index}
                    value={options.value}
                    className="text-base"
                  >
                    {options.label}
                  </option>
                ))}
              </select>

              {/*input tag*/}

              <input
                type="text"
                className="pl-2 mt-2 h-8 outline-none  border-solid border-[1px] border-[#B8B8B8] rounded-[3px] font-monster text-xs bg-[#F5F5F5]"
                placeholder="Document Title"
                value={value}
                onChange={handleValue}
              />

              {/* selection box2 */}
              <select
                name="selection-box2"
                value={selected2}
                onChange={handleSelected}
                className="pl-2 bg-transparent outline-none border-solid border-[1px] my-2 border-[#B8B8B8] h-8 w-[502px] rounded-[3px] font-base font-medium text-black font-monster text-base cursor-pointer"
              >
                <option value="">Select an option</option>
                {optionval2.map((options, index) => (
                  <option
                    key={index}
                    value={options.value}
                    className="h-4 w-20"
                  >
                    {options.label}
                  </option>
                ))}
              </select>

              {/* Image Dropping */}
              <div
                className="flex justify-center items-center w-[502px] h-32 outline-none border-[2px] border-[#B8B8B8] border-dashed select-none"
                onClick={handleDivClick}
              >
                <input type="text" className="absolute z-0 opacity-0" />
                <span className="relative z-1 text-center text-[#B8B8B8] text-xs font-monster">
                  Drop Your <br /> Document Here
                </span>
              </div>

                {/* Total form */}
                <div className="flex my-2">

                <p className="h-4 w-16 bg-[#D9D9D9] rounded-sm text-[8px] flex justify-center items-center font-monster font-semibold text-[#5C5C5C]">form167&nbsp; </p>

                </div>



            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
